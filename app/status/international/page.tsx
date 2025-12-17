"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function InternationalPage() {
  const posts = [
    {
      id: "1",
      topic: "Visa & Immigration",
      company: "Multiple Universities",
      timeAgo: "1h ago",
      title: "F-1 to H-1B: Complete timeline and tips",
      content: "Just successfully transitioned from F-1 OPT to H-1B. Here's everything I learned during the process...",
      likes: 142,
      comments: 78,
      views: 3456,
      avatarColor: "bg-green-600",
    },
    {
      id: "2",
      topic: "International Students",
      company: "NYU",
      timeAgo: "3h ago",
      title: "Dealing with culture shock - 6 months in",
      content: "It's been 6 months since I moved to the US. Still struggling with some aspects. Anyone else?",
      likes: 94,
      comments: 61,
      views: 2134,
      avatarColor: "bg-green-600",
    },
    {
      id: "3",
      topic: "International Students",
      company: "UC Berkeley",
      timeAgo: "5h ago",
      title: "Best resources for international student support",
      content: "What resources have been most helpful for you as an international student?",
      likes: 73,
      comments: 45,
      views: 1678,
      avatarColor: "bg-green-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">International Students</h1>
              <p className="text-gray-600 mb-6">Discussions for international students on F-1 and other visas</p>

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
