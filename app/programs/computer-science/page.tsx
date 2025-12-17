"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function ComputerSciencePage() {
  const posts = [
    {
      id: "1",
      topic: "Computer Science",
      company: "Stanford",
      timeAgo: "1h ago",
      title: "Best CS electives for machine learning focus?",
      content: "Planning my course schedule for next semester. Which electives are most useful for ML careers?",
      likes: 42,
      comments: 27,
      views: 892,
      avatarColor: "bg-blue-600",
    },
    {
      id: "2",
      topic: "Computer Science",
      company: "MIT",
      timeAgo: "3h ago",
      title: "Leetcode grind vs projects - what matters more?",
      content: "For landing FAANG internships, should I focus more on leetcode or building projects?",
      likes: 67,
      comments: 45,
      views: 1543,
      avatarColor: "bg-blue-600",
    },
    {
      id: "3",
      topic: "Computer Science",
      company: "UC Berkeley",
      timeAgo: "5h ago",
      title: "Systems vs AI - which specialization has better job prospects?",
      content: "Trying to decide between systems and AI track. Which has better opportunities for international students?",
      likes: 53,
      comments: 38,
      views: 1234,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Computer Science</h1>
              <p className="text-gray-600 mb-6">Discussions for CS students and professionals</p>

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
