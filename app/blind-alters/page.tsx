"use client"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import { Bell, MessageCircle, Heart, UserPlus } from "lucide-react"

export default function BlindAltersPage() {
  const alerts = [
    {
      id: 1,
      type: "comment",
      icon: MessageCircle,
      message: "Someone commented on your post",
      post: "Best places to study on campus?",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "like",
      icon: Heart,
      message: "Your post received 10 new likes",
      post: "Internship advice for international students",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "follow",
      icon: UserPlus,
      message: "3 people from your university started following you",
      time: "1 day ago",
      unread: false,
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
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold text-gray-900">Campus Alters</h1>
              </div>
              
              <p className="text-gray-600 mb-6">Stay updated with notifications and alerts from your campus community</p>

              {/* Alerts List */}
              <div className="space-y-3">
                {alerts.map((alert) => {
                  const Icon = alert.icon
                  return (
                    <div
                      key={alert.id}
                      className={`bg-white rounded-lg border p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                        alert.unread ? "border-primary/30 bg-primary/5" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full ${alert.unread ? "bg-primary/10" : "bg-gray-100"}`}>
                          <Icon className={`w-5 h-5 ${alert.unread ? "text-primary" : "text-gray-600"}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-1">{alert.message}</p>
                          {alert.post && (
                            <p className="text-sm text-gray-600 mb-2">&quot;{alert.post}&quot;</p>
                          )}
                          <p className="text-xs text-gray-500">{alert.time}</p>
                        </div>
                        {alert.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
          
          <TrendingSidebar />
        </div>
      </div>
    </div>
  )
}
