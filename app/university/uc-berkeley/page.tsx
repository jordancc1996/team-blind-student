"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function UCBerkeleyPage() {
  const posts = [
    {
      id: "1",
      topic: "Housing",
      company: "UC Berkeley",
      timeAgo: "2h ago",
      title: "Safe neighborhoods near Berkeley campus?",
      content: "International student looking for housing. Which neighborhoods are safe and have good public transportation?",
      likes: 27,
      comments: 18,
      views: 654,
      avatarColor: "bg-blue-600",
    },
    {
      id: "2",
      topic: "Academics",
      company: "UC Berkeley",
      timeAgo: "6h ago",
      title: "EECS grad program - workload expectations?",
      content: "Starting EECS masters this fall. What should I expect in terms of coursework and research?",
      likes: 19,
      comments: 11,
      views: 432,
      avatarColor: "bg-blue-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">UC Berkeley</h1>
              <p className="text-gray-600 mb-6">Discussions from the UC Berkeley community</p>

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
