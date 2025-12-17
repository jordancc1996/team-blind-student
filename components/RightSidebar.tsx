import { TrendingUp, Hash } from "lucide-react"

export default function RightSidebar() {
  const trendingTopics = [
    { tag: "layoffs", posts: "2.3k posts" },
    { tag: "salary-negotiation", posts: "1.8k posts" },
    { tag: "tech-interviews", posts: "1.5k posts" },
    { tag: "work-life-balance", posts: "1.2k posts" },
    { tag: "remote-work", posts: "987 posts" },
  ]

  const popularCompanies = [
    { name: "Google", members: "45.2k" },
    { name: "Meta", members: "38.5k" },
    { name: "Amazon", members: "52.1k" },
    { name: "Microsoft", members: "41.3k" },
    { name: "Apple", members: "36.8k" },
  ]

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Trending Topics */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-gray-900">Trending Topics</h2>
          </div>
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <button
                key={topic.tag}
                className="w-full flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-gray-500 font-semibold min-w-[20px]">
                  {index + 1}
                </span>
                <div>
                  <div className="flex items-center gap-1">
                    <Hash className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-gray-900">{topic.tag}</span>
                  </div>
                  <span className="text-sm text-gray-500">{topic.posts}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Companies */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-gray-900">Popular Companies</h2>
          </div>
          <div className="space-y-3">
            {popularCompanies.map((company) => (
              <button
                key={company.name}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{company.name}</span>
                <span className="text-sm text-gray-500">{company.members}</span>
              </button>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3">About Blind</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            An anonymous professional community where verified employees discuss work, 
            salaries, and career advice.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Help</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

function Briefcase({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}
