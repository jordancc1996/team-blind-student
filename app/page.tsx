"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function Home() {
  const samplePosts = [
    {
      topic: "Offer Evaluation",
      company: "Meta",
      timeAgo: "Yesterday",
      title: "Uber Senior vs google L4 vs meta E5",
      content: "Former META guy consider rejoining Meta.",
      likes: 0,
      comments: 19,
      views: 1135,
      isPoll: true,
      pollParticipants: 126,
      avatarColor: "bg-blue-500",
    },
    {
      topic: "FAANG Lounge",
      company: "Fortinet",
      timeAgo: "Yesterday",
      title: "Does Meta really give everyone the same initial offer?",
      content:
        "I just got off an offer call with Meta and I was told they always start with the same number for everyone. I was told for position Menlo Park, level E5, position Machine Learning Engineer the initial numbers everyone in 2025 were given are...",
      likes: 1,
      comments: 17,
      views: 942,
      avatarColor: "bg-purple-500",
    },
    {
      topic: "Tech Industry",
      company: "Google",
      timeAgo: "Yesterday",
      title: "Is FAANG Anti-prestige Now?",
      content:
        "Seems like in tech circles, FAANG is becoming less desirable. Startups are hot, small companies pay better, and the culture at big tech is changing. What do you think?",
      likes: 23,
      comments: 87,
      views: 2341,
      avatarColor: "bg-green-600",
    },
    {
      topic: "Compensation",
      company: "Amazon",
      timeAgo: "2 days ago",
      title: "L5 SDE compensation - is 380k still competitive?",
      content:
        "Got my offer from Amazon for L5 in Seattle. 380k total comp (200k base + 180k stock over 4 years). Is this still competitive compared to other FAANG? Seems lower than what people were getting last year.",
      likes: 15,
      comments: 42,
      views: 1876,
      avatarColor: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Three Column Grid Layout */}
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          {/* Left Sidebar */}
          <Sidebar />
          
          {/* Main Feed */}
          <main className="flex-1 ml-64 mr-80 overflow-y-auto bg-white">
            <div className="max-w-3xl mx-auto px-6 py-4">
              {/* Sort Dropdown */}
              <div className="mb-4 flex items-center justify-between">
                <button className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 px-3 py-1.5 rounded border border-gray-300">
                  <span>Sort by :</span>
                  <span className="font-semibold">Popular</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Posts Feed */}
              <div>
                {samplePosts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            </div>
          </main>
          
          {/* Right Sidebar */}
          <TrendingSidebar />
        </div>
      </div>
    </div>
  )
}
