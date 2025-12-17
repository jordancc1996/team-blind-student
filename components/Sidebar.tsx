"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, Building2, Eye, Layers, Lightbulb, TrendingUp, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const router = useRouter()
  const [universitiesOpen, setUniversitiesOpen] = useState(true)
  const [degreeProgramsOpen, setDegreeProgramsOpen] = useState(false)
  const [studentStatusOpen, setStudentStatusOpen] = useState(false)
  const [studentLifeOpen, setStudentLifeOpen] = useState(false)
  const [financesOpen, setFinancesOpen] = useState(false)

  const universities = ["Stanford", "MIT", "Harvard", "UC Berkeley", "NYU", "University of Texas"]
  const degreePrograms = ["Computer Science", "Engineering", "Business", "Liberal Arts", "Medicine", "Law"]
  const studentStatuses = ["Undergraduate", "Graduate", "PhD", "Post-Doc", "Recent Alumni"]
  const studentLife = ["Campus Life", "Housing", "Dining", "Clubs & Activities"]
  const finances = ["Scholarships", "Student Loans", "Budgeting", "Part-time Jobs"]

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="py-3">
        {/* Main Navigation */}
        <nav className="space-y-0.5 px-2 mb-4">
          <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-900 bg-white border border-gray-200 font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer">
            <Home className="w-5 h-5" />
            <span>Feed</span>
          </Link>
          
          <Link href="/university" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <Building2 className="w-5 h-5" />
            <span>My University</span>
          </Link>

          <Link href="/alters" className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-gray-700 hover:bg-white hover:border hover:border-gray-200 font-normal text-sm transition-colors cursor-pointer">
            <Eye className="w-5 h-5" />
            <span>Campus Alters</span>
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

        {/* Universities Section */}
        <div className="mb-4">
          <button 
            onClick={() => setUniversitiesOpen(!universitiesOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>UNIVERSITIES</span>
            {universitiesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {universitiesOpen && (
            <nav className="space-y-0.5 px-2 mt-1">
              {universities.map((university) => (
                <button
                  key={university}
                  className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-white rounded transition-colors"
                >
                  {university}
                </button>
              ))}
              <button className="w-full text-left px-6 py-2 text-sm text-gray-500 hover:bg-white rounded transition-colors">
                SHOW MORE
              </button>
            </nav>
          )}
        </div>

        {/* Degree Programs Section */}
        <div className="mb-4">
          <button 
            onClick={() => setDegreeProgramsOpen(!degreeProgramsOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>DEGREE PROGRAMS</span>
            {degreeProgramsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {degreeProgramsOpen && (
            <nav className="space-y-0.5 px-2 mt-1">
              {degreePrograms.map((program) => (
                <button
                  key={program}
                  className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-white rounded transition-colors"
                >
                  {program}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Student Status Section */}
        <div className="mb-4">
          <button 
            onClick={() => setStudentStatusOpen(!studentStatusOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>STUDENT STATUS</span>
            {studentStatusOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {studentStatusOpen && (
            <nav className="space-y-0.5 px-2 mt-1">
              {studentStatuses.map((status) => (
                <button
                  key={status}
                  className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-white rounded transition-colors"
                >
                  {status}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Student Life Section */}
        <div className="mb-4">
          <button 
            onClick={() => setStudentLifeOpen(!studentLifeOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>STUDENT LIFE</span>
            {studentLifeOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {studentLifeOpen && (
            <nav className="space-y-0.5 px-2 mt-1">
              {studentLife.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-white rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Finances Section */}
        <div className="mb-4">
          <button 
            onClick={() => setFinancesOpen(!financesOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-white"
          >
            <span>FINANCES</span>
            {financesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {financesOpen && (
            <nav className="space-y-0.5 px-2 mt-1">
              {finances.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-white rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
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
