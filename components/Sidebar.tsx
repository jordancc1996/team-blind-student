"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, Building2, Eye, Layers, Lightbulb, TrendingUp, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const router = useRouter()
  const [locationOpen, setLocationOpen] = useState(true)
  const [industryOpen, setIndustryOpen] = useState(false)
  const [jobFunctionOpen, setJobFunctionOpen] = useState(false)
  const [learningOpen, setLearningOpen] = useState(false)
  const [moneyOpen, setMoneyOpen] = useState(false)

  const locations = ["Dallas", "Miami", "Chicago", "New York", "Austin"]

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="py-3">
        {/* Main Navigation */}
        <nav className="space-y-0.5 px-2 mb-4">
          <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-900 bg-white border border-gray-200 font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer">
            <Home className="w-5 h-5" />
            <span>Feed</span>
          </Link>
          
          <Link href="/company" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <Building2 className="w-5 h-5" />
            <span>My Company</span>
          </Link>

          <Link href="/alters" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <Eye className="w-5 h-5" />
            <span>Blind Alters</span>
          </Link>

          <Link href="/resources" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <Layers className="w-5 h-5" />
            <span>Resources</span>
          </Link>

          <Link href="/best" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <Lightbulb className="w-5 h-5" />
            <span className="flex-1 text-left">Best of Campus Blind</span>
            <span className="px-1.5 py-0.5 bg-primary text-white text-xs font-semibold rounded">NEW</span>
          </Link>

          <Link href="/trending" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <TrendingUp className="w-5 h-5" />
            <span>Trending</span>
          </Link>
        </nav>

        {/* All Channels */}
        <div className="px-2 mb-4">
          <Link href="/channels" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>All Channels</span>
          </Link>
        </div>

        {/* Location Section */}
        <div className="mb-4">
          <button 
            onClick={() => setLocationOpen(!locationOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>LOCATION</span>
            {locationOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {locationOpen && (
            <nav className="space-y-0.5 px-2 mt-1">
              {locations.map((location) => (
                <button
                  key={location}
                  className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-white rounded transition-colors"
                >
                  {location}
                </button>
              ))}
              <button className="w-full text-left px-6 py-2 text-sm text-gray-500 hover:bg-white rounded transition-colors">
                SHOW MORE
              </button>
            </nav>
          )}
        </div>

        {/* Industry Section */}
        <div className="mb-4">
          <button 
            onClick={() => setIndustryOpen(!industryOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>INDUSTRY</span>
            {industryOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Job Function Section */}
        <div className="mb-4">
          <button 
            onClick={() => setJobFunctionOpen(!jobFunctionOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>JOB FUNCTION</span>
            {jobFunctionOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Learning & Advising Section */}
        <div className="mb-4">
          <button 
            onClick={() => setLearningOpen(!learningOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>LEARNING & ADVISING</span>
            {learningOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Money Section */}
        <div className="mb-4">
          <button 
            onClick={() => setMoneyOpen(!moneyOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>MONEY</span>
            {moneyOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Show More Channels */}
        <div className="px-2">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-white rounded transition-colors font-medium">
            SHOW MORE CHANNELS
          </button>
        </div>
      </div>
    </aside>
  )
}
