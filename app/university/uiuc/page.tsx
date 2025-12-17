"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function UIUCPage() {
  const posts = [
    {
      id: "1",
      topic: "Academics",
      company: "UIUC",
      timeAgo: "2h ago",
      title: "UIUC CS program - course recommendations?",
      content: "Starting CS masters at UIUC. What are the must-take courses?",
      likes: 31,
      comments: 19,
      views: 723,
      avatarColor: "bg-orange-500",
    },
    {
      id: "2",
      topic: "Campus Life",
      company: "UIUC",
      timeAgo: "6h ago",
      title: "Life in Champaign-Urbana for international students",
      content: "Moving from a big city. What's it like living in a college town?",
      likes: 22,
      comments: 17,
      views: 543,
      avatarColor: "bg-orange-500",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">UIUC</h1>
              <p className="text-gray-600 mb-6">Discussions from the UIUC community</p>

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
