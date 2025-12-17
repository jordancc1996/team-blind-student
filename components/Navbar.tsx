"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function Navbar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page (you can create this later)
      console.log("Searching for:", searchQuery)
      // router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white z-50 border-b border-gray-200">
      <div className="h-full max-w-[1920px] mx-auto px-6 flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-base">C</span>
            </div>
            <span className="text-gray-900 font-bold text-lg">Campus Blind</span>
          </Link>

          {/* Main Navigation */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-900 font-semibold text-sm hover:text-primary cursor-pointer transition-colors">
              Community
            </Link>
            <Link href="/#salaries" className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer transition-colors">
              Salaries
            </Link>
            <Link href="/#reviews" className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer transition-colors">
              Reviews
            </Link>
            <Link href="/#jobs" className="text-gray-600 text-sm hover:text-gray-900 cursor-pointer transition-colors">
              Jobs
            </Link>
            <button className="text-gray-600 text-sm hover:text-gray-900 flex items-center gap-1 cursor-pointer transition-colors">
              For Business
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1.5 rounded border border-gray-300 focus:ring-2 focus:ring-purple-200 focus:border-primary focus:outline-none text-sm bg-gray-50"
            />
          </div>
        </form>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="px-4 py-1.5 text-gray-700 font-medium text-sm hover:bg-gray-50 rounded transition-colors cursor-pointer">
              Sign in
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-1.5 bg-primary text-white font-medium text-sm rounded hover:bg-primary/90 transition-colors cursor-pointer">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
