"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

type FeedTab = "popular" | "recent" | "following"
type SortOption = "popular" | "recent" | "trending"

export default function Home() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<FeedTab>("popular")
  const [sortBy, setSortBy] = useState<SortOption>("popular")
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const samplePosts = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          <Sidebar />
          
          <main className="flex-1 ml-64 mr-80 overflow-y-auto bg-white">
            <div className="max-w-3xl mx-auto px-6 py-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="relative">
                  <button 
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 px-3 py-1.5 rounded border border-gray-300 cursor-pointer transition-colors"
                  >
                    <span>Sort by :</span>
                    <span className="font-semibold capitalize">{sortBy}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showSortDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      {(["popular", "recent", "trending"] as SortOption[]).map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option)
                            setShowSortDropdown(false)
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md cursor-pointer"
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => router.push("/create-post")}
                  className="px-4 py-1.5 bg-black text-white font-medium text-sm rounded hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  + New Post
                </button>
              </div>

              <div className="mb-4 flex gap-1 border-b border-gray-200">
                <button 
                  onClick={() => setActiveTab("popular")}
                  className={`pb-3 px-4 font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === "popular" 
                      ? "text-black border-b-2 border-black" 
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Popular
                </button>
                <button 
                  onClick={() => setActiveTab("recent")}
                  className={`pb-3 px-4 font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === "recent" 
                      ? "text-black border-b-2 border-black" 
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Recent
                </button>
                <button 
                  onClick={() => setActiveTab("following")}
                  className={`pb-3 px-4 font-semibold text-sm transition-colors cursor-pointer ${
                    activeTab === "following" 
                      ? "text-black border-b-2 border-black" 
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Following
                </button>
              </div>

              <div>
                {samplePosts.map((post, index) => (
                  <PostCard key={index} {...post} />
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
