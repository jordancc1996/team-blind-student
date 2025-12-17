"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function NYUPage() {
  const posts = [
    {
      id: "1",
      topic: "City Life",
      company: "NYU",
      timeAgo: "1h ago",
      title: "Best affordable eats in Greenwich Village?",
      content: "NYU is expensive enough. Where can students eat well without breaking the bank?",
      likes: 45,
      comments: 32,
      views: 892,
      avatarColor: "bg-purple-600",
    },
    {
      id: "2",
      topic: "Internships",
      company: "NYU",
      timeAgo: "3h ago",
      title: "CPT internship opportunities in NYC",
      content: "Looking for CPT-eligible internships in NYC. What companies are hiring international students?",
      likes: 38,
      comments: 24,
      views: 765,
      avatarColor: "bg-purple-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">New York University</h1>
              <p className="text-gray-600 mb-6">Discussions from the NYU community</p>

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
