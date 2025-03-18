interface BlogcardProps {
    authorName: string;
    authorDescription: string;
    title: string;
    content: string;
    publishedDate: string;
  }
  
export const Blogcard = ({
    authorName,
    authorDescription,
    title,
    content,
    publishedDate
  }: BlogcardProps) => {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8">
    <div className="p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-3 text-gray-800 hover:text-gray-600 transition-colors duration-200">
            {title}
        </h2>

        {/* Date */}
        <div className="flex items-center mb-4 text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{publishedDate}</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg text-gray-600 mb-6">
            {content}
        </div>

        {/* Author Section */}
        <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                    {authorName.charAt(0)}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{authorName}</h3>
                    <p className="text-gray-500 text-sm">{authorDescription}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  };