"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function MITPage() {
  const posts = [
    {
      id: "1",
      topic: "Academics",
      company: "MIT",
      timeAgo: "2h ago",
      title: "Surviving the first semester at MIT",
      content: "The workload is intense. How do you all manage your time between classes, psets, and research?",
      likes: 34,
      comments: 21,
      views: 789,
      avatarColor: "bg-red-700",
    },
    {
      id: "2",
      topic: "Housing",
      company: "MIT",
      timeAgo: "5h ago",
      title: "On-campus vs off-campus housing for grad students?",
      content: "Trying to decide between Ashdown House and finding an apartment in Cambridge. Pros and cons?",
      likes: 18,
      comments: 12,
      views: 456,
      avatarColor: "bg-red-700",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">MIT</h1>
              <p className="text-gray-600 mb-6">Discussions from the MIT community</p>

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
