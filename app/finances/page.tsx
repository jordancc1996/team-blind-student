"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function FinancesPage() {
  const financePosts = [
    {
      id: "1",
      topic: "Scholarships",
      company: "Stanford",
      timeAgo: "1h ago",
      title: "Full ride scholarship opportunities for international students",
      content: "I compiled a list of universities offering full scholarships to international students. Here are the top programs I found...",
      likes: 67,
      comments: 34,
      views: 1234,
      avatarColor: "bg-green-500",
    },
    {
      id: "2",
      topic: "Budgeting",
      company: "MIT",
      timeAgo: "4h ago",
      title: "How much does it really cost to live in Boston?",
      content: "Breaking down my monthly expenses as a grad student in Boston. Rent, food, transportation, and other costs...",
      likes: 45,
      comments: 28,
      views: 892,
      avatarColor: "bg-blue-500",
    },
    {
      id: "3",
      topic: "Part-time Jobs",
      company: "UC Berkeley",
      timeAgo: "6h ago",
      title: "Best on-campus jobs for F-1 students",
      content: "These are the highest-paying and most flexible on-campus jobs I've found. All are CPT/OPT eligible...",
      likes: 89,
      comments: 41,
      views: 1567,
      avatarColor: "bg-yellow-500",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Finances</h1>
              <p className="text-gray-600 mb-6">Scholarships, budgeting, and financial advice</p>

              {/* Posts */}
              <div className="space-y-4">
                {financePosts.map((post) => (
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
