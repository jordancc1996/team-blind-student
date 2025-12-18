"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

export default function Navbar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check current user
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)

        if (user) {
          // Fetch username from profiles
          const { data: profile } = await supabase
            .from("profiles")
            .select("username")
            .eq("id", user.id)
            .single()

          if (profile) {
            setUsername(profile.username)
          }
        }
      } catch (error) {
        console.error("Error checking user:", error)
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (!session?.user) {
        setUsername(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
    }
  }

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      setUsername(null)
      setShowDropdown(false)
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white z-50 border-b border-gray-200">
      <div className="h-full max-w-[1920px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-7 h-7 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-base">C</span>
            </div>
            <span className="text-black font-bold text-lg tracking-tight">Campus Blind</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className="text-black font-medium text-sm hover:text-gray-600 cursor-pointer transition-colors">
              Community
            </Link>
            <Link href="/#salaries" className="text-gray-500 text-sm hover:text-black cursor-pointer transition-colors">
              Salaries
            </Link>
            <Link href="/#reviews" className="text-gray-500 text-sm hover:text-black cursor-pointer transition-colors">
              Reviews
            </Link>
            <Link href="/#jobs" className="text-gray-500 text-sm hover:text-black cursor-pointer transition-colors">
              Jobs
            </Link>
            <button className="text-gray-500 text-sm hover:text-black flex items-center gap-1 cursor-pointer transition-colors">
              For Business
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </nav>
        </div>

        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1.5 rounded border border-gray-300 focus:ring-1 focus:ring-black focus:border-black focus:outline-none text-sm bg-gray-50"
            />
          </div>
        </form>

        <div className="flex items-center gap-3">
          {loading ? (
            <div className="w-20 h-8 bg-gray-100 rounded animate-pulse" />
          ) : user && username ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-4 py-1.5 text-black font-medium text-sm hover:bg-gray-100 rounded transition-colors"
              >
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{username[0].toUpperCase()}</span>
                </div>
                <span>{username}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <Link
                    href="/my-university"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/my-university"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowDropdown(false)}
                  >
                    My University
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="px-4 py-1.5 text-black font-medium text-sm hover:bg-gray-100 rounded transition-colors cursor-pointer">
                  Sign in
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-1.5 bg-black text-white font-medium text-sm rounded hover:bg-gray-800 transition-colors cursor-pointer">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
