"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function USCPage() {
  const posts = [
    {
      id: "1",
      topic: "Campus Life",
      company: "USC",
      timeAgo: "2h ago",
      title: "USC vs UCLA for CS masters?",
      content: "Admitted to both. Trying to decide between USC and UCLA for CS. Any thoughts?",
      likes: 29,
      comments: 22,
      views: 678,
      avatarColor: "bg-red-600",
    },
    {
      id: "2",
      topic: "Housing",
      company: "USC",
      timeAgo: "5h ago",
      title: "Safe areas to live near USC campus?",
      content: "International student looking for housing recommendations near USC. Safety is my top priority.",
      likes: 24,
      comments: 16,
      views: 543,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">USC</h1>
              <p className="text-gray-600 mb-6">Discussions from the USC community</p>

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
