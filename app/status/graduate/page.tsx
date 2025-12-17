"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function GraduatePage() {
  const posts = [
    {
      id: "1",
      topic: "Graduate School",
      company: "Carnegie Mellon",
      timeAgo: "2h ago",
      title: "Thesis vs non-thesis masters - which is better?",
      content: "Trying to decide between thesis and coursework-only option. Which helps more with job search?",
      likes: 51,
      comments: 34,
      views: 1123,
      avatarColor: "bg-purple-600",
    },
    {
      id: "2",
      topic: "Graduate School",
      company: "Columbia",
      timeAgo: "5h ago",
      title: "Juggling full-time masters and part-time job",
      content: "How do you balance a 20hr/week on-campus job with a full course load?",
      likes: 38,
      comments: 22,
      views: 876,
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Graduate Students</h1>
              <p className="text-gray-600 mb-6">Discussions for masters and professional degree students</p>

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
