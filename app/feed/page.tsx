"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

type FeedTab = "popular" | "recent" | "following"

export default function FeedPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<FeedTab>("popular")

  const samplePosts = [
    {
      id: "1",
      topic: "Campus Life",
      company: "Stanford",
      timeAgo: "2h ago",
      title: "Best places to study on campus?",
      content: "Looking for quiet study spots that aren't the main library. Any recommendations?",
      likes: 24,
      comments: 15,
      views: 342,
      avatarColor: "bg-red-500",
    },
    {
      id: "2",
      topic: "Academics",
      company: "MIT",
      timeAgo: "5h ago",
      title: "How to balance coursework with research?",
      content: "I'm struggling to find time for both my classes and my research project. Any tips from grad students?",
      likes: 18,
      comments: 22,
      views: 456,
      avatarColor: "bg-blue-500",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Feed</h1>
              
              {/* Tabs */}
              <div className="flex gap-6 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("popular")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "popular"
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Popular
                  {activeTab === "popular" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("recent")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "recent"
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Recent
                  {activeTab === "recent" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("following")}
                  className={`pb-3 px-1 font-medium transition-colors relative ${
                    activeTab === "following"
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Following
                  {activeTab === "following" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {samplePosts.map((post) => (
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
