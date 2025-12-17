"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function UTAustinPage() {
  const posts = [
    {
      id: "1",
      topic: "Campus Life",
      company: "UT Austin",
      timeAgo: "1h ago",
      title: "Best neighborhoods for UT students?",
      content: "Moving to Austin for grad school. Which neighborhoods are popular among students?",
      likes: 29,
      comments: 21,
      views: 654,
      avatarColor: "bg-orange-600",
    },
    {
      id: "2",
      topic: "City Life",
      company: "UT Austin",
      timeAgo: "4h ago",
      title: "Things to do in Austin besides studying",
      content: "What makes Austin special? Looking for things to explore on weekends.",
      likes: 35,
      comments: 28,
      views: 789,
      avatarColor: "bg-orange-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">UT Austin</h1>
              <p className="text-gray-600 mb-6">Discussions from the UT Austin community</p>

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
