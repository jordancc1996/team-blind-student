"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"
import { TrendingUp } from "lucide-react"

export default function TrendingPage() {
  const trendingPosts = [
    {
      id: "1",
      topic: "Breaking News",
      company: "Multiple Universities",
      timeAgo: "30 min ago",
      title: "New immigration policy changes announced",
      content: "The government just announced significant changes to student visa policies that will affect international students starting next semester...",
      likes: 156,
      comments: 78,
      views: 3421,
      avatarColor: "bg-red-600",
    },
    {
      id: "2",
      topic: "Hot Topic",
      company: "Stanford",
      timeAgo: "1h ago",
      title: "Campus housing prices increased by 15%",
      content: "The university announced a significant increase in on-campus housing costs for the next academic year. Many students are concerned about affordability...",
      likes: 124,
      comments: 65,
      views: 2897,
      avatarColor: "bg-orange-500",
    },
    {
      id: "3",
      topic: "Tech Industry",
      company: "MIT",
      timeAgo: "2h ago",
      title: "Tech layoffs affecting new grad hiring",
      content: "Multiple tech companies have frozen new grad hiring. How is this affecting your job search? Let's discuss strategies...",
      likes: 98,
      comments: 43,
      views: 2156,
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
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-gray-900">Trending</h1>
              </div>
              <p className="text-gray-600 mb-6">Hot topics and trending discussions right now</p>

              {/* Trending Posts */}
              <div className="space-y-4">
                {trendingPosts.map((post) => (
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
