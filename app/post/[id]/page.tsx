"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import { Heart, MessageCircle, Share2, ArrowLeft } from "lucide-react"

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.id

  // Mock post data - in real app, fetch based on postId
  const post = {
    id: postId,
    topic: "Offer Evaluation",
    company: "Meta",
    timeAgo: "Yesterday",
    title: "Uber Senior vs google L4 vs meta E5",
    content: "Former META guy consider rejoining Meta. I&apos;ve been working in industry for 3 years now and recently got offers from multiple companies. Looking for advice on which offer to take. Meta is offering $450k total comp, Google $420k, and Uber $380k. All positions are at similar levels. What factors should I consider beyond just compensation?",
    likes: 142,
    comments: 38,
    views: 1135,
    avatarColor: "bg-blue-500",
  }

  const mockComments = [
    {
      id: 1,
      company: "Google",
      timeAgo: "5h ago",
      content: "I made the switch from Meta to Google last year. The WLB at Google is significantly better. Meta pays more but you&apos;ll work longer hours.",
      likes: 12,
    },
    {
      id: 2,
      company: "Amazon",
      timeAgo: "3h ago",
      content: "Take the Meta offer. The comp difference is significant and will compound over time with stock appreciation.",
      likes: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          <Sidebar />
          
          <main className="flex-1 ml-64 mr-80 overflow-y-auto bg-white">
            <div className="max-w-3xl mx-auto px-6 py-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to feed</span>
              </Link>

              {/* Post Content */}
              <article className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 ${post.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">
                      {post.company.substring(0, 1).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-gray-900">{post.topic}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-sm text-gray-500">{post.timeAgo}</span>
                    </div>
                    <div className="text-sm text-gray-600">{post.company}</div>
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <p className="text-base text-gray-700 leading-relaxed mb-6">{post.content}</p>

                <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors ml-auto">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </article>

              {/* Comments Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">{mockComments.length} Comments</h2>
                
                {mockComments.map((comment) => (
                  <div key={comment.id} className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {comment.company.substring(0, 1).toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm text-gray-900">{comment.company}</span>
                          <span className="text-gray-400">·</span>
                          <span className="text-sm text-gray-500">{comment.timeAgo}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{comment.content}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-3 ml-13">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-medium">{comment.likes}</span>
                      </button>
                      <button className="text-xs text-gray-600 hover:text-primary font-medium">Reply</button>
                    </div>
                  </div>
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
