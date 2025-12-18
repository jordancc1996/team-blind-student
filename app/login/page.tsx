"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Validate fields
      if (!email || !password) {
        setError("Email and password are required")
        setLoading(false)
        return
      }

      // Sign in with Supabase
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (signInError) {
        throw signInError
      }

      if (!data.user) {
        throw new Error("Login failed")
      }

      console.log("Login successful:", data.user.id)

      // Redirect to home page
      router.push("/")
      router.refresh()

    } catch (err: any) {
      console.error("Login error:", err)
      
      // Provide user-friendly error messages
      if (err.message.includes("Invalid login credentials")) {
        setError("Invalid email or password")
      } else if (err.message.includes("Email not confirmed")) {
        setError("Please confirm your email before signing in")
      } else {
        setError(err.message || "An error occurred during login")
      }
      
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
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
            <h1 className="text-2xl font-bold text-black tracking-tight">Campus Blind</h1>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-sm text-gray-600 mb-6">Sign in to continue to Campus Blind</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-black hover:text-gray-600 underline-offset-2 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-black hover:text-gray-600 font-medium underline-offset-2 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
