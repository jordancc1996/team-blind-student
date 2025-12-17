"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function UndergraduatePage() {
  const posts = [
    {
      id: "1",
      topic: "Undergraduate Life",
      company: "Stanford",
      timeAgo: "1h ago",
      title: "Balancing coursework and internship applications",
      content: "How do you manage applying to summer internships while keeping up with classes?",
      likes: 45,
      comments: 28,
      views: 892,
      avatarColor: "bg-blue-500",
    },
    {
      id: "2",
      topic: "Undergraduate Life",
      company: "MIT",
      timeAgo: "3h ago",
      title: "Best freshman year advice for international students?",
      content: "Just started my first semester. What do you wish you knew as a freshman?",
      likes: 62,
      comments: 41,
      views: 1234,
      avatarColor: "bg-blue-500",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Undergraduate Students</h1>
              <p className="text-gray-600 mb-6">Discussions for undergraduate students</p>

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
