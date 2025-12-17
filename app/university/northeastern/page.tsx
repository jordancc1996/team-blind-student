"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function NortheasternPage() {
  const posts = [
    {
      id: "1",
      topic: "Co-op",
      company: "Northeastern",
      timeAgo: "1h ago",
      title: "Co-op experiences as an international student",
      content: "How does the co-op program work for F-1 students? Can we do multiple co-ops?",
      likes: 37,
      comments: 23,
      views: 834,
      avatarColor: "bg-red-600",
    },
    {
      id: "2",
      topic: "Housing",
      company: "Northeastern",
      timeAgo: "4h ago",
      title: "Best areas to live near Northeastern?",
      content: "Looking for housing recommendations with easy access to campus.",
      likes: 26,
      comments: 18,
      views: 621,
      avatarColor: "bg-red-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Northeastern University</h1>
              <p className="text-gray-600 mb-6">Discussions from the Northeastern community</p>

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
