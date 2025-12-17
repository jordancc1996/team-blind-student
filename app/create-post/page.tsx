"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import { ArrowLeft } from "lucide-react"

export default function CreatePostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [channel, setChannel] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post creation logic here
    console.log("Creating post:", { title, content, channel })
    // Redirect back to home after creating
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to feed</span>
          </Link>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Create a new post</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="channel" className="block text-sm font-medium text-gray-700 mb-2">
                  Channel
                </label>
                <select
                  id="channel"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Select a channel</option>
                  <option value="offer-evaluation">Offer Evaluation</option>
                  <option value="faang-lounge">FAANG Lounge</option>
                  <option value="tech-industry">Tech Industry</option>
                  <option value="compensation">Compensation</option>
                  <option value="career-advice">Career Advice</option>
                  <option value="visa">Visa</option>
                  <option value="jobs">Jobs</option>
                  <option value="housing">Housing</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="What&apos;s your question or topic?"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Share your thoughts, questions, or experiences..."
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Remember:</strong> All posts are anonymous. Your university affiliation will be shown, but your identity will remain private.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 font-medium transition-colors"
                >
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
