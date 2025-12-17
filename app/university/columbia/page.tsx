"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function ColumbiaPage() {
  const posts = [
    {
      id: "1",
      topic: "Academics",
      company: "Columbia",
      timeAgo: "1h ago",
      title: "Columbia CS masters program review",
      content: "Just finished my first semester at Columbia CS. Here's my honest review of the program...",
      likes: 52,
      comments: 28,
      views: 1234,
      avatarColor: "bg-blue-500",
    },
    {
      id: "2",
      topic: "Career",
      company: "Columbia",
      timeAgo: "4h ago",
      title: "Recruiting season at Columbia - tips?",
      content: "Tech recruiting is starting. What companies typically come to Columbia for on-campus interviews?",
      likes: 36,
      comments: 19,
      views: 876,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Columbia University</h1>
              <p className="text-gray-600 mb-6">Discussions from the Columbia community</p>

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
