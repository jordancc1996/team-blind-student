"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function StanfordPage() {
  const posts = [
    {
      id: "1",
      topic: "Campus Life",
      company: "Stanford",
      timeAgo: "1h ago",
      title: "Best coffee shops near Stanford campus?",
      content: "New grad student here. Looking for good places to study and grab coffee near campus. Any recommendations?",
      likes: 12,
      comments: 8,
      views: 234,
      avatarColor: "bg-red-600",
    },
    {
      id: "2",
      topic: "Academics",
      company: "Stanford",
      timeAgo: "3h ago",
      title: "CS PhD admit - advice on choosing advisor?",
      content: "Just got admitted to Stanford CS PhD program. How do I go about choosing the right research advisor?",
      likes: 28,
      comments: 15,
      views: 567,
      avatarColor: "bg-red-600",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Stanford University</h1>
              <p className="text-gray-600 mb-6">Discussions from the Stanford community</p>

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
