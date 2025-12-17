"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function PhDPage() {
  const posts = [
    {
      id: "1",
      topic: "PhD Life",
      company: "MIT",
      timeAgo: "1h ago",
      title: "Dealing with PhD imposter syndrome",
      content: "Everyone seems so smart and accomplished. How do you deal with feeling like you don't belong?",
      likes: 89,
      comments: 56,
      views: 2134,
      avatarColor: "bg-indigo-600",
    },
    {
      id: "2",
      topic: "PhD Life",
      company: "Stanford",
      timeAgo: "4h ago",
      title: "Switching advisors mid-PhD - experiences?",
      content: "My research interests have changed. Has anyone successfully switched advisors?",
      likes: 67,
      comments: 43,
      views: 1678,
      avatarColor: "bg-indigo-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">PhD Students</h1>
              <p className="text-gray-600 mb-6">Discussions for doctoral students and researchers</p>

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
