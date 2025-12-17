"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function BestOfCampusBlindPage() {
  const bestPosts = [
    {
      id: "1",
      topic: "Career Advice",
      company: "Stanford",
      timeAgo: "2 weeks ago",
      title: "How I landed 5 FAANG offers as an international student",
      content: "After 3 years of preparation, I managed to get offers from all FAANG companies. Here's my complete journey and tips for other international students...",
      likes: 342,
      comments: 89,
      views: 12453,
      avatarColor: "bg-red-500",
    },
    {
      id: "2",
      topic: "Visa Journey",
      company: "MIT",
      timeAgo: "1 month ago",
      title: "OPT to H1B: Everything you need to know",
      content: "A comprehensive guide based on my experience going through the OPT to H1B transition. I'll cover timelines, documents, common mistakes, and tips...",
      likes: 289,
      comments: 67,
      views: 9876,
      avatarColor: "bg-blue-500",
    },
    {
      id: "3",
      topic: "Student Life",
      company: "UC Berkeley",
      timeAgo: "3 weeks ago",
      title: "Surviving grad school: A realistic guide",
      content: "No one tells you how hard grad school really is. Here's everything I wish I knew before starting my PhD program...",
      likes: 267,
      comments: 54,
      views: 8234,
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
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Best of Campus Blind</h1>
                <span className="px-2 py-1 bg-primary text-white text-xs font-semibold rounded">NEW</span>
              </div>
              <p className="text-gray-600 mb-6">Top posts and most valuable discussions from the community</p>

              {/* Best Posts */}
              <div className="space-y-4">
                {bestPosts.map((post) => (
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
