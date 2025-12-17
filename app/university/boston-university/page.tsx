"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function BostonUniversityPage() {
  const posts = [
    {
      id: "1",
      topic: "City Life",
      company: "BU",
      timeAgo: "3h ago",
      title: "Best areas to live in Boston for BU students?",
      content: "Looking for neighborhoods with good public transportation to BU. Budget is around $1200/month.",
      likes: 21,
      comments: 15,
      views: 456,
      avatarColor: "bg-red-600",
    },
    {
      id: "2",
      topic: "Winter",
      company: "BU",
      timeAgo: "7h ago",
      title: "Surviving your first Boston winter",
      content: "International student from a tropical country. Any tips for dealing with the cold?",
      likes: 32,
      comments: 24,
      views: 678,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Boston University</h1>
              <p className="text-gray-600 mb-6">Discussions from the BU community</p>

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
