"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function BusinessPage() {
  const posts = [
    {
      id: "1",
      topic: "Business",
      company: "Harvard",
      timeAgo: "1h ago",
      title: "MBA vs MS in Business Analytics?",
      content: "Trying to decide between traditional MBA and specialized business analytics program. Thoughts?",
      likes: 39,
      comments: 24,
      views: 876,
      avatarColor: "bg-green-600",
    },
    {
      id: "2",
      topic: "Business",
      company: "NYU",
      timeAgo: "5h ago",
      title: "Internship opportunities for international business students",
      content: "What companies sponsor F-1 students for business internships?",
      likes: 31,
      comments: 19,
      views: 654,
      avatarColor: "bg-green-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Business</h1>
              <p className="text-gray-600 mb-6">Discussions for business students</p>

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
