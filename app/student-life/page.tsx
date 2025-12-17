"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function StudentLifePage() {
  const studentLifePosts = [
    {
      id: "1",
      topic: "Campus Events",
      company: "UC Berkeley",
      timeAgo: "2h ago",
      title: "Best clubs to join as an international student?",
      content: "I'm new to campus and looking to make friends. What clubs or organizations would you recommend for international students?",
      likes: 23,
      comments: 18,
      views: 456,
      avatarColor: "bg-yellow-500",
    },
    {
      id: "2",
      topic: "Social Life",
      company: "NYU",
      timeAgo: "5h ago",
      title: "Where do students hang out on weekends?",
      content: "Looking for popular spots where students gather during weekends. Any recommendations for cafes, parks, or entertainment venues?",
      likes: 31,
      comments: 24,
      views: 687,
      avatarColor: "bg-purple-500",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Life</h1>
              <p className="text-gray-600 mb-6">Campus activities, events, and social life</p>

              {/* Posts */}
              <div className="space-y-4">
                {studentLifePosts.map((post) => (
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
