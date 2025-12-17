"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function PurduePage() {
  const posts = [
    {
      id: "1",
      topic: "Campus Life",
      company: "Purdue",
      timeAgo: "2h ago",
      title: "Best places to eat on Purdue campus?",
      content: "New grad student here. What are the best dining options on or near campus?",
      likes: 18,
      comments: 13,
      views: 345,
      avatarColor: "bg-yellow-600",
    },
    {
      id: "2",
      topic: "Internships",
      company: "Purdue",
      timeAgo: "5h ago",
      title: "CPT opportunities for engineering students",
      content: "Looking for CPT internships in engineering. What companies recruit from Purdue?",
      likes: 24,
      comments: 16,
      views: 532,
      avatarColor: "bg-yellow-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Purdue University</h1>
              <p className="text-gray-600 mb-6">Discussions from the Purdue community</p>

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
