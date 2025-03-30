
interface FullBlogProps {
    id : number
    title: string;
    content : string;
    author: {
      name: string;
    };

  }
  

import React from 'react';

export const FullBlog: React.FC<FullBlogProps> = ({ id, title, content, author: { name } }) => {
  return (
    <article className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
          <p className="text-gray-500 mb-4 text-white">Posted on __/__/__</p>
          <div className="prose max-w-none text-white">{content}</div>
        </div>
        <AuthorCard name={name || "anonymous"} />
      </div>
    </article>
  );
};

interface AuthorCardProps {
  name: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name }) => {
  return (
    <div className="ml-8 w-64">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Author</h2>
        <h3 className="text-xl mb-2">{name}</h3>
      </div>
    </div>
  );
};