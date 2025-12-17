"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import { BookOpen, FileText, Video, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "International Student Guide",
      description: "Complete guide to studying in the US as an international student",
      type: "Guide",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Visa & Immigration FAQ",
      description: "Common questions about F-1, OPT, CPT, and H-1B visas",
      type: "FAQ",
      icon: FileText,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Resume & Interview Prep",
      description: "Tips for landing internships and full-time jobs in the US",
      type: "Video Series",
      icon: Video,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Housing & Accommodation",
      description: "Finding and securing housing near your university",
      type: "Guide",
      icon: BookOpen,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          <Sidebar />
          
          <main className="flex-1 ml-64 mr-80 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Resources</h1>
              <p className="text-gray-600 mb-6">Helpful guides and resources for students</p>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource) => {
                  const Icon = resource.icon
                  return (
                    <div
                      key={resource.id}
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`${resource.color} p-3 rounded-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                            {resource.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
          
          <TrendingSidebar />
        </div>
      </div>
    </div>
  )
}
