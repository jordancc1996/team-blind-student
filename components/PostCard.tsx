import { MessageCircle, Heart, Eye, Share2, MoreHorizontal } from "lucide-react"

interface PostCardProps {
  topic: string
  company: string
  timeAgo: string
  title: string
  content: string
  likes: number
  comments: number
  views: number
  isPoll?: boolean
  pollParticipants?: number
  avatarColor?: string
}

export default function PostCard({
  topic,
  company,
  timeAgo,
  title,
  content,
  likes,
  comments,
  views,
  isPoll,
  pollParticipants,
  avatarColor = "bg-gray-400",
}: PostCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-all mb-3">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar */}
          <div className={`w-12 h-12 ${avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-bold text-lg">
              {company.substring(0, 1).toUpperCase()}
            </span>
          </div>
          
          {/* User Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm text-gray-900">{topic}</span>
              <span className="text-gray-400">·</span>
              <span className="text-sm text-gray-500">{timeAgo}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{company}</span>
              <span className="text-gray-400">·</span>
              <span className="text-sm text-gray-500">🔥 houkaa</span>
            </div>
          </div>
          
          {/* Menu */}
          <button className="text-gray-400 hover:text-gray-600 p-1">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-3 ml-15">
          <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
        </div>

        {/* Poll Badge */}
        {isPoll && pollParticipants && (
          <div className="ml-15 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded text-xs">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-primary">Poll</span>
              <span className="text-primary">{pollParticipants} Participants</span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-6 pt-3 border-t border-gray-100 ml-15">
          <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">{likes}</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{comments}</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Eye className="w-5 h-5" />
            <span className="text-sm font-medium">{views.toLocaleString()}</span>
          </button>

          <button className="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>

          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  )
}
