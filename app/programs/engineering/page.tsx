"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function EngineeringPage() {
  const posts = [
    {
      id: "1",
      topic: "Engineering",
      company: "MIT",
      timeAgo: "2h ago",
      title: "Mechanical vs Electrical Engineering for international students?",
      content: "Which engineering discipline has better job prospects in the US for international students?",
      likes: 34,
      comments: 22,
      views: 678,
      avatarColor: "bg-orange-600",
    },
    {
      id: "2",
      topic: "Engineering",
      company: "Carnegie Mellon",
      timeAgo: "4h ago",
      title: "Finding research opportunities in engineering",
      content: "How do I approach professors for research positions? Any tips?",
      likes: 28,
      comments: 17,
      views: 543,
      avatarColor: "bg-orange-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Engineering</h1>
              <p className="text-gray-600 mb-6">Discussions for engineering students</p>

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
