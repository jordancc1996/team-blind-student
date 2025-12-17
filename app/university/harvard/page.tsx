"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function HarvardPage() {
  const posts = [
    {
      id: "1",
      topic: "Social Life",
      company: "Harvard",
      timeAgo: "1h ago",
      title: "International student events this semester?",
      content: "Looking for events specifically for international students. What groups or organizations should I check out?",
      likes: 22,
      comments: 14,
      views: 543,
      avatarColor: "bg-red-800",
    },
    {
      id: "2",
      topic: "Career",
      company: "Harvard",
      timeAgo: "4h ago",
      title: "Harvard career fair - what to expect?",
      content: "First time attending the career fair. Any tips on how to make the most of it?",
      likes: 31,
      comments: 19,
      views: 678,
      avatarColor: "bg-red-800",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Harvard University</h1>
              <p className="text-gray-600 mb-6">Discussions from the Harvard community</p>

              <div className="space-y-4">
                {posts.map((post) => (
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
