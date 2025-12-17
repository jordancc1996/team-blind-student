"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Search, MoreVertical } from "lucide-react"

export default function MessagesPage() {
  const conversations = [
    { id: 1, university: "Stanford", lastMessage: "Thanks for the advice!", time: "2h ago", unread: true },
    { id: 2, university: "MIT", lastMessage: "Did you end up taking the offer?", time: "5h ago", unread: false },
    { id: 3, university: "Berkeley", lastMessage: "Let me know if you have questions", time: "1d ago", unread: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="fixed top-14 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          <Sidebar />
          
          <main className="flex-1 ml-64 overflow-hidden bg-white">
            <div className="h-full flex">
              {/* Conversations List */}
              <div className="w-80 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search messages"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      className="w-full p-4 hover:bg-gray-50 border-b border-gray-100 text-left transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {conv.university.substring(0, 1)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-semibold text-sm ${conv.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                              {conv.university}
                            </span>
                            <span className="text-xs text-gray-500">{conv.time}</span>
                          </div>
                          <p className={`text-sm truncate ${conv.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                            {conv.lastMessage}
                          </p>
                        </div>
                        {conv.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message View */}
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Select a conversation</h2>
                  <p className="text-sm text-gray-600">Choose a message from the list to start chatting</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
