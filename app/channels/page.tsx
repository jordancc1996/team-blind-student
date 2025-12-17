"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import { Hash } from "lucide-react"

export default function ChannelsPage() {
  const channels = [
    { name: "Campus Life", posts: 1234, description: "Daily life on campus" },
    { name: "Academics", posts: 987, description: "Courses, studying, and academic advice" },
    { name: "Career & Internships", posts: 2341, description: "Job search and career guidance" },
    { name: "Visa & Immigration", posts: 876, description: "F-1, OPT, H-1B discussions" },
    { name: "Housing", posts: 543, description: "Finding and sharing accommodation" },
    { name: "Social Events", posts: 432, description: "Campus events and meetups" },
    { name: "Food & Dining", posts: 654, description: "Campus dining and local restaurants" },
    { name: "Sports & Fitness", posts: 321, description: "Athletics and recreation" },
    { name: "Mental Health", posts: 789, description: "Wellness and support" },
    { name: "Tech & Coding", posts: 1567, description: "Programming and tech discussions" },
    { name: "Research", posts: 456, description: "Academic research topics" },
    { name: "Clubs & Organizations", posts: 234, description: "Student groups and activities" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          <Sidebar />
          
          <main className="flex-1 ml-64 mr-80 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">All Channels</h1>
              <p className="text-gray-600 mb-6">Browse all discussion channels</p>

              {/* Channels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {channels.map((channel) => (
                  <div
                    key={channel.name}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        <Hash className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{channel.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{channel.description}</p>
                        <p className="text-xs text-gray-500">{channel.posts.toLocaleString()} posts</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
          
          <TrendingSidebar />
        </div>
      </div>
    </div>
  )
}
