'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Mock data for explore page
const EXPLORE_POSTS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    likesCount: 1240,
    commentsCount: 231,
    user: { username: 'john_doe' },
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1682685797743-3a7b6b8d7121',
    likesCount: 892,
    commentsCount: 120,
    user: { username: 'jane_smith' },
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1682687220923-c5b313e5befe',
    likesCount: 2103,
    commentsCount: 452,
    user: { username: 'food_lover' },
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1680169291998-a592e654d29c',
    likesCount: 763,
    commentsCount: 143,
    user: { username: 'travel_addict' },
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1682686580849-3e7f67df4015',
    likesCount: 1452,
    commentsCount: 315,
    user: { username: 'nature_photographer' },
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c',
    likesCount: 982,
    commentsCount: 87,
    user: { username: 'art_creator' },
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9',
    likesCount: 543,
    commentsCount: 32,
    user: { username: 'city_explorer' },
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1682695797835-8f623cf46460',
    likesCount: 789,
    commentsCount: 95,
    user: { username: 'fashion_stylist' },
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1682685796014-2f342188a655',
    likesCount: 632,
    commentsCount: 47,
    user: { username: 'pet_lover' },
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1682686581484-a2d3e7a6a8ed',
    likesCount: 1122,
    commentsCount: 183,
    user: { username: 'sunset_chaser' },
  },
  {
    id: '11',
    imageUrl: 'https://images.unsplash.com/photo-1682686578923-9340a618990a',
    likesCount: 874,
    commentsCount: 69,
    user: { username: 'coffee_enthusiast' },
  },
  {
    id: '12',
    imageUrl: 'https://images.unsplash.com/photo-1682687218147-9cac49fbd7c9',
    likesCount: 965,
    commentsCount: 112,
    user: { username: 'book_worm' },
  },
];

// Categories for explore page
const CATEGORIES = [
  'All',
  'Travel',
  'Food',
  'Nature',
  'Fitness',
  'Art',
  'Fashion',
  'Technology',
  'Music',
  'Sports',
  'Pets',
];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = EXPLORE_POSTS.filter(post => 
    searchQuery === '' || post.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto pt-20 px-4 py-8">
        <div className="mb-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search posts, users, or tags"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-4">
          {filteredPosts.map((post) => (
            <Link href={`/post/${post.id}`} key={post.id} className="aspect-square relative group">
              <Image
                src={post.imageUrl}
                alt={'Post by ' + post.user.username}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-4 text-white font-semibold">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    {post.likesCount}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
                    </svg>
                    {post.commentsCount}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No results found</h3>
            <p className="text-gray-500">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
} 