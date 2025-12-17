"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function CarnegieMellonPage() {
  const posts = [
    {
      id: "1",
      topic: "Academics",
      company: "CMU",
      timeAgo: "1h ago",
      title: "CMU CS workload - how to survive?",
      content: "The coursework is incredibly intense. How do people manage to do research on top of classes?",
      likes: 48,
      comments: 31,
      views: 1098,
      avatarColor: "bg-red-700",
    },
    {
      id: "2",
      topic: "Career",
      company: "CMU",
      timeAgo: "3h ago",
      title: "Best career resources at CMU for international students",
      content: "What career services and resources should international students take advantage of at CMU?",
      likes: 33,
      comments: 18,
      views: 654,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Carnegie Mellon University</h1>
              <p className="text-gray-600 mb-6">Discussions from the CMU community</p>

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
