export default function TrendingSidebar() {
  const mostRead = [
    {
      topic: "Tech Industry",
      date: "Dec 9",
      title: "Most of people make less than 150k and hav...",
      views: 19688,
    },
    {
      topic: "Tech Industry",
      date: "Dec 4",
      title: "200k full remote vs 500k 3days in office?",
      views: 23694,
    },
    {
      topic: "Layoffs",
      date: "5d",
      title: "Forever Layoffs",
      views: 35716,
    },
    {
      topic: "Product Management Career",
      date: "Yesterday",
      title: "The interview hacks that actually worked for...",
      views: 18219,
    },
    {
      topic: "Tech Industry",
      date: "6d",
      title: "What&apos;s the current FAANG+ right now?",
      views: 8037,
    },
  ]

  return (
    <aside className="fixed right-0 top-14 bottom-0 w-80 bg-white border-l border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-4">
        {/* Sponsored Section */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            SPONSORED
          </div>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">Ad Space</span>
          </div>
        </div>

        {/* Most Read Section */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            MOST READ
          </div>
          <div className="space-y-3">
            {mostRead.map((item, index) => (
              <button
                key={index}
                className="w-full text-left hover:bg-gray-50 rounded-lg p-2 transition-colors"
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-xs text-gray-600">{item.topic}</span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-900 mt-1 line-clamp-2">
                  {item.title}
                </h4>
              </button>
            ))}
          </div>
        </div>

        {/* Another Sponsored Section */}
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            SPONSORED
          </div>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">Ad Space</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
