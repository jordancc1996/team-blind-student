"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function UWashingtonPage() {
  const posts = [
    {
      id: "1",
      topic: "Seattle Life",
      company: "UW",
      timeAgo: "2h ago",
      title: "Dealing with Seattle rain as an international student",
      content: "I'm from a warm country and this rain is getting to me. How do you all cope with the weather?",
      likes: 34,
      comments: 27,
      views: 765,
      avatarColor: "bg-purple-700",
    },
    {
      id: "2",
      topic: "Internships",
      company: "UW",
      timeAgo: "5h ago",
      title: "Amazon internships for UW students",
      content: "Any tips for landing an Amazon internship? They recruit heavily from UW.",
      likes: 41,
      comments: 23,
      views: 923,
      avatarColor: "bg-purple-700",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">University of Washington</h1>
              <p className="text-gray-600 mb-6">Discussions from the UW community</p>

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
