import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import TrendingSidebar from "@/components/TrendingSidebar"
import PostCard from "@/components/PostCard"

export default function Home() {
  const samplePosts = [
    {
      university: "Stanford",
      universityColor: "bg-red-600",
      timeAgo: "2h ago",
      title: "Meta E5 vs Google L5 - Total comp comparison",
      content:
        "Just got offers from both. Meta is offering $450k TC (350 base + 100 stock) while Google is $420k TC (340 base + 80 stock). Meta seems to have better WLB but Google has more stability. What would you choose?",
      upvotes: 142,
      comments: 38,
      channel: "compensation",
    },
    {
      university: "MIT",
      universityColor: "bg-blue-600",
      timeAgo: "4h ago",
      title: "H1B lottery results are out - did anyone get selected?",
      content:
        "My company just informed me that I wasn't selected in the lottery this year. This is my second attempt and I'm really worried now. What are my options? Can I apply for O-1 or should I look into Canadian PR?",
      upvotes: 267,
      comments: 89,
      channel: "visa",
    },
    {
      university: "Berkeley",
      universityColor: "bg-yellow-600",
      timeAgo: "5h ago",
      title: "Amazon layoffs hitting AWS - anyone else affected?",
      content:
        "Just got the call this morning. After 4 years at Amazon AWS, they're letting go of our entire team. The severance is decent (2 months + 1 week per year) but I'm still in shock. The job market seems rough right now. Any advice on where to look?",
      upvotes: 324,
      comments: 156,
      channel: "jobs",
    },
    {
      university: "CMU",
      universityColor: "bg-green-600",
      timeAgo: "7h ago",
      title: "Rent prices in SF Bay Area - is $3500 for 1BR reasonable?",
      content:
        "Looking at apartments in Sunnyvale and Mountain View. Found a decent 1BR for $3500/month but it seems expensive. I'll be working at Apple and wondering if I should just bite the bullet or look for roommates. What are you all paying?",
      upvotes: 89,
      comments: 67,
      channel: "housing",
    },
    {
      university: "Cornell",
      universityColor: "bg-purple-600",
      timeAgo: "9h ago",
      title: "Startup equity - 0.5% at Series B worth it?",
      content:
        "Got an offer from a Series B startup (raised $50M, valued at $200M). They're offering $180k base + 0.5% equity over 4 years. I'm currently at Microsoft making $250k TC. The work seems more interesting but taking a pay cut. Thoughts?",
      upvotes: 156,
      comments: 94,
      channel: "startups",
    },
    {
      university: "Harvard",
      universityColor: "bg-red-700",
      timeAgo: "11h ago",
      title: "System design interview tips for FAANG",
      content:
        "I have Google L5 interviews coming up next month. Any recommendations for system design prep? I've done Grokking System Design but want to make sure I'm fully prepared. What resources helped you the most?",
      upvotes: 198,
      comments: 52,
      channel: "career-advice",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Three Column Grid Layout */}
      <div className="fixed top-16 left-0 right-0 bottom-0 overflow-hidden">
        <div className="h-full flex max-w-[1920px] mx-auto">
          {/* Left Sidebar */}
          <Sidebar />
          
          {/* Main Feed */}
          <main className="flex-1 ml-64 mr-80 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-4 py-6">
              {/* Feed Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Home Feed</h1>
                <div className="flex gap-1 border-b border-gray-200">
                  <button className="pb-3 px-4 font-semibold text-sm text-primary border-b-2 border-primary">
                    Popular
                  </button>
                  <button className="pb-3 px-4 font-semibold text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-t">
                    Recent
                  </button>
                  <button className="pb-3 px-4 font-semibold text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-t">
                    Following
                  </button>
                </div>
              </div>

              {/* Posts Feed */}
              <div className="space-y-3">
                {samplePosts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>

              {/* Load More */}
              <div className="mt-6 text-center pb-8">
                <button className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors">
                  Load More Posts
                </button>
              </div>
            </div>
          </main>
          
          {/* Right Sidebar */}
          <TrendingSidebar />
        </div>
      </div>
    </div>
  )
}
