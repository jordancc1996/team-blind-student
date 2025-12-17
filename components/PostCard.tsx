import { MessageSquare, ArrowBigUp, Share2, MoreHorizontal } from "lucide-react"

interface PostCardProps {
  university: string
  universityColor: string
  timeAgo: string
  title: string
  content: string
  upvotes: number
  comments: number
  channel?: string
}

export default function PostCard({
  university,
  universityColor,
  timeAgo,
  title,
  content,
  upvotes,
  comments,
  channel,
}: PostCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar */}
          <div className={`w-10 h-10 ${universityColor} rounded-full flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-bold text-sm">
              {university.substring(0, 1).toUpperCase()}
            </span>
          </div>
          
          {/* User Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-block px-2 py-0.5 ${universityColor} bg-opacity-10 text-xs font-semibold rounded`}>
                {university}
              </span>
              {channel && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">#{channel}</span>
                </>
              )}
              <span className="text-gray-400">•</span>
              <span className="text-xs text-gray-500">{timeAgo}</span>
            </div>
          </div>
          
          {/* Menu */}
          <button className="text-gray-400 hover:text-gray-600 p-1">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group">
            <div className="p-1 rounded group-hover:bg-purple-50">
              <ArrowBigUp className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">{upvotes}</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group">
            <div className="p-1 rounded group-hover:bg-purple-50">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">{comments}</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group ml-auto">
            <div className="p-1 rounded group-hover:bg-purple-50">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </article>
  )
}
