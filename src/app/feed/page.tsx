'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';

// Mock data for posts
const MOCK_POSTS = [
  {
    id: '1',
    user: {
      id: 'user1',
      username: 'john_doe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    caption: 'Beautiful sunset at the beach 🌅 #beach #sunset #vacation',
    likesCount: 124,
    commentsCount: 23,
    createdAt: '2023-04-20T15:32:00.000Z',
  },
  {
    id: '2',
    user: {
      id: 'user2',
      username: 'jane_smith',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    imageUrl: 'https://images.unsplash.com/photo-1682685797743-3a7b6b8d7121',
    caption: 'Exploring the mountains today! The view is breathtaking. #hiking #mountains #adventure',
    likesCount: 89,
    commentsCount: 12,
    createdAt: '2023-04-19T10:15:00.000Z',
  },
  {
    id: '3',
    user: {
      id: 'user3',
      username: 'food_lover',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    imageUrl: 'https://images.unsplash.com/photo-1682687220923-c5b313e5befe',
    caption: 'Homemade pasta for dinner tonight! Recipe in bio. #food #homemade #cooking #pasta',
    likesCount: 210,
    commentsCount: 45,
    createdAt: '2023-04-18T18:45:00.000Z',
  }
];

export default function Feed() {
  const [posts, setPosts] = useState(MOCK_POSTS);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-screen-md mx-auto py-8 px-4">
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-900">No posts yet</h3>
              <p className="text-gray-500">Follow some users to see their posts in your feed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 