import { Search, User, Plus } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-primary z-50 shadow-sm border-b border-purple-800">
      <div className="h-full max-w-[1920px] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-[200px]">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-primary font-bold text-lg">B</span>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">Blind</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for posts, topics, and companies"
              className="w-full pl-10 pr-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-purple-300 focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3 min-w-[200px] justify-end">
          <button className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors">
            <Plus className="w-4 h-4" />
            New Post
          </button>
          <button className="flex items-center justify-center w-9 h-9 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors">
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </nav>
  )
}
