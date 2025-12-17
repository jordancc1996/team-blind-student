"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function DataSciencePage() {
  const posts = [
    {
      id: "1",
      topic: "Data Science",
      company: "UC Berkeley",
      timeAgo: "2h ago",
      title: "Best data science programs for international students?",
      content: "Looking to apply for MS in Data Science. Which programs have the best job placement?",
      likes: 48,
      comments: 32,
      views: 1098,
      avatarColor: "bg-purple-600",
    },
    {
      id: "2",
      topic: "Data Science",
      company: "Columbia",
      timeAgo: "4h ago",
      title: "Data Science vs ML Engineering - career paths?",
      content: "What's the difference in day-to-day work and which role is easier to get as an international student?",
      likes: 56,
      comments: 38,
      views: 1345,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Science</h1>
              <p className="text-gray-600 mb-6">Discussions for data science students and professionals</p>

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
