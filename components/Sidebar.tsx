import { Home, Lock, TrendingUp, MessageSquare, Hash } from "lucide-react"

export default function Sidebar() {
  const channels = [
    { name: "Visa", count: 234 },
    { name: "Jobs", count: 189 },
    { name: "Housing", count: 156 },
    { name: "Startups", count: 143 },
    { name: "Compensation", count: 198 },
    { name: "Career Advice", count: 167 },
  ]

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="py-4">
        {/* Main Navigation */}
        <nav className="space-y-1 px-3">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-purple-50 text-primary font-semibold transition-colors">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Lock className="w-5 h-5" />
            <span>My University</span>
          </button>
        </nav>

        {/* Channels Section */}
        <div className="mt-6">
          <div className="px-6 mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Channels
            </h3>
          </div>
          <nav className="space-y-1 px-3">
            {channels.map((channel) => (
              <button
                key={channel.name}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Hash className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  <span className="text-sm">{channel.name}</span>
                </div>
                <span className="text-xs text-gray-400">{channel.count}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <nav className="space-y-1 px-3">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <TrendingUp className="w-5 h-5" />
              <span>Trending</span>
            </button>
            
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>Messages</span>
            </button>
          </nav>
        </div>
      </div>
    </aside>
  )
}
