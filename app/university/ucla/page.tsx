"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function UCLAPage() {
  const posts = [
    {
      id: "1",
      topic: "Campus Life",
      company: "UCLA",
      timeAgo: "2h ago",
      title: "Best study spots at UCLA?",
      content: "Looking for quiet places to study on campus besides the main library. Suggestions?",
      likes: 26,
      comments: 19,
      views: 543,
      avatarColor: "bg-blue-600",
    },
    {
      id: "2",
      topic: "Housing",
      company: "UCLA",
      timeAgo: "6h ago",
      title: "Westwood housing prices - is it worth it?",
      content: "The rent in Westwood is crazy expensive. Is it worth living close to campus or should I look elsewhere?",
      likes: 38,
      comments: 25,
      views: 789,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">UCLA</h1>
              <p className="text-gray-600 mb-6">Discussions from the UCLA community</p>

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
