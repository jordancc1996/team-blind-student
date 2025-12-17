"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function MyUniversityPage() {
  const [activeTab, setActiveTab] = useState<"posts" | "events" | "jobs">("posts")

  const universityPosts = [
    {
      id: "1",
      topic: "Campus News",
      company: "Your University",
      timeAgo: "1h ago",
      title: "New dining hall opening next semester",
      content: "The university announced a new state-of-the-art dining facility will open in the spring. It will feature international cuisine options and late-night hours.",
      likes: 45,
      comments: 12,
      views: 523,
      avatarColor: "bg-primary",
    },
    {
      id: "2",
      topic: "Housing",
      company: "Your University",
      timeAgo: "3h ago",
      title: "Looking for roommate for fall semester",
      content: "Graduate student looking for a responsible roommate to share a 2BR apartment near campus. $800/month including utilities.",
      likes: 8,
      comments: 6,
      views: 234,
      avatarColor: "bg-primary",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">My University</h1>
              <p className="text-gray-600 mb-6">Posts and discussions from your university community</p>
              
              {/* Tabs */}
              <div className="flex gap-6 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("posts")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "posts" ? "text-primary" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Posts
                  {activeTab === "posts" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "events" ? "text-primary" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Events
                  {activeTab === "events" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("jobs")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "jobs" ? "text-primary" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Jobs
                  {activeTab === "jobs" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {universityPosts.map((post) => (
                  <PostCard key={post.id} {...post} />
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
