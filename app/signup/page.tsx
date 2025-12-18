"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function SignupPage() {
  const router = useRouter()
  const [universityEmail, setUniversityEmail] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  // Generate random 6-character alphanumeric username (Team Blind style)
  const generateRandomUsername = (): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let username = ''
    for (let i = 0; i < 6; i++) {
      username += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return username
  }

  // Check if username already exists in database
  const isUsernameAvailable = async (username: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .maybeSingle()

      if (error) {
        console.error('Error checking username:', error)
        return true // Assume available if error
      }

      return !data // Available if no data found
    } catch (err) {
      console.error('Error checking username availability:', err)
      return true // Assume available if error
    }
  }

  // Generate unique username
  const generateUniqueUsername = async (): Promise<string> => {
    let username = generateRandomUsername()
    let attempts = 0
    const maxAttempts = 10

    // Try up to 10 times to generate a unique username
    while (attempts < maxAttempts) {
      const isAvailable = await isUsernameAvailable(username)
      if (isAvailable) {
        return username
      }
      username = generateRandomUsername()
      attempts++
    }

    // If still no unique username after 10 attempts, append timestamp
    return generateRandomUsername() + Date.now().toString().slice(-2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Validate fields
      if (!universityEmail || !email || !password || !confirmPassword) {
        setError("All fields are required")
        setLoading(false)
        return
      }

      // Validate university email is .edu
      if (!universityEmail.endsWith(".edu")) {
        setError("University email must be a .edu address")
        setLoading(false)
        return
      }

      // Validate passwords match
      if (password !== confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        return
      }

      // Validate password length
      if (password.length < 6) {
        setError("Password must be at least 6 characters")
        setLoading(false)
        return
      }

      // Extract university domain from email
      const domain = universityEmail.split("@")[1]
      console.log("Extracted domain:", domain)

      // Sign up user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      if (authError) {
        throw authError
      }

      if (!authData.user) {
        throw new Error("Failed to create user")
      }

      console.log("User created:", authData.user.id)

      // Find matching university by domain
      const { data: universities, error: universityError } = await supabase
        .from("universities")
        .select("id")
        .eq("domain", domain)
        .single()

      if (universityError) {
        console.error("University lookup error:", universityError)
        // If university not found, we'll still create the profile without university_id
      }

      const universityId = universities?.id || null

      // Generate unique random username (Team Blind style: e.g., "glQe27", "xK9pL2")
      const username = await generateUniqueUsername()
      console.log("Generated username:", username)

      // Create profile
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: authData.user.id,
          username: username,
          university_id: universityId,
        })

      if (profileError) {
        console.error("Profile creation error:", profileError)
        throw new Error("Failed to create profile: " + profileError.message)
      }

      console.log("Profile created successfully")

      // Show success message
      setSuccess(true)
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login")
      }, 2000)

    } catch (err: any) {
      console.error("Signup error:", err)
      setError(err.message || "An error occurred during signup")
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-4">
              Your account has been successfully created. You can now sign in.
            </p>
            <p className="text-sm text-gray-500">Redirecting to login...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-black hover:text-gray-600 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Campus Blind</span>
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Campus Blind</h1>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">Create your account</h2>
          <p className="text-sm text-gray-600 mb-6">Join the anonymous university community</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                University Email
              </label>
              <input
                id="university"
                type="email"
                value={universityEmail}
                onChange={(e) => setUniversityEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black"
                placeholder="you@university.edu"
                required
                disabled={loading}
              />
              <p className="mt-1 text-xs text-gray-500">Use your .edu email to verify your university</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black"
                placeholder="you@example.com"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-black"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-black hover:text-gray-600 font-medium underline-offset-2 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
