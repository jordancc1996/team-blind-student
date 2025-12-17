import { TrendingUp, MessageSquare } from "lucide-react"

export default function TrendingSidebar() {
  const trendingTopics = [
    { tag: "layoffs-2024", posts: "2.3k" },
    { tag: "tech-compensation", posts: "1.8k" },
    { tag: "visa-update", posts: "1.5k" },
    { tag: "interview-tips", posts: "1.2k" },
    { tag: "remote-work", posts: "987" },
  ]

  const popularPosts = [
    {
      title: "Meta L5 vs Google L5 - which offer to take?",
      university: "MIT",
      comments: 142,
      color: "bg-blue-500",
    },
    {
      title: "Anyone else got affected by Amazon layoffs?",
      university: "Stanford",
      comments: 238,
      color: "bg-red-500",
    },
    {
      title: "H1B lottery results - did anyone get picked?",
      university: "Berkeley",
      comments: 189,
      color: "bg-green-500",
    },
  ]

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Trending Topics */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-gray-900">Trending Topics</h2>
          </div>
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <button
                key={topic.tag}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 font-semibold w-5">
                    {index + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-primary">
                      #{topic.tag}
                    </div>
                    <div className="text-xs text-gray-500">{topic.posts} posts</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Today */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-gray-900">Popular Today</h2>
          </div>
          <div className="space-y-3">
            {popularPosts.map((post, index) => (
              <button
                key={index}
                className="w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left border border-gray-100"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className={`w-2 h-2 ${post.color} rounded-full mt-1.5`}></div>
                  <p className="text-sm font-medium text-gray-900 line-clamp-2 flex-1">
                    {post.title}
                  </p>
                </div>
                <div className="flex items-center justify-between ml-4">
                  <span className="text-xs text-gray-500">{post.university}</span>
                  <span className="text-xs text-gray-500">{post.comments} comments</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-2 text-sm">About Blind</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Anonymous professional community for verified employees
          </p>
          <div className="flex gap-3 text-xs">
            <a href="#" className="text-primary hover:underline">Help</a>
            <a href="#" className="text-primary hover:underline">Privacy</a>
            <a href="#" className="text-primary hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </aside>
  )
}
