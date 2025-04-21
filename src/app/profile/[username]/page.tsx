'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

// Mock data for testing
const MOCK_USER = {
  id: 'user1',
  username: 'john_doe',
  name: 'John Doe',
  bio: 'Professional photographer and traveler 🌍 📸',
  image: 'https://randomuser.me/api/portraits/men/1.jpg',
  postsCount: 42,
  followersCount: 1024,
  followingCount: 347,
};

const MOCK_POSTS = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    likesCount: 124,
    commentsCount: 23,
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1682685797743-3a7b6b8d7121',
    likesCount: 89,
    commentsCount: 12,
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1682687220923-c5b313e5befe',
    likesCount: 210,
    commentsCount: 45,
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1680169291998-a592e654d29c',
    likesCount: 76,
    commentsCount: 14,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1682686580849-3e7f67df4015',
    likesCount: 145,
    commentsCount: 31,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c',
    likesCount: 98,
    commentsCount: 8,
  }
];

export default function ProfilePage() {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [user, setUser] = useState(MOCK_USER);
  const [posts, setPosts] = useState(MOCK_POSTS);

  useEffect(() => {
    // In a real app, fetch user data and posts based on username
    console.log(`Fetching profile for ${username}`);
  }, [username]);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setUser(prev => ({
      ...prev,
      followersCount: isFollowing ? prev.followersCount - 1 : prev.followersCount + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto pt-20 px-4">
        {/* Profile header */}
        <div className="py-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={user.image}
              alt={user.username}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-2xl font-semibold">{user.username}</h1>
              
              {username === 'john_doe' ? (
                <Link href="/settings" className="btn btn-secondary text-sm px-6">
                  Edit Profile
                </Link>
              ) : (
                <button 
                  onClick={handleFollow}
                  className={`btn text-sm px-6 ${isFollowing ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              )}
            </div>
            
            <div className="flex gap-6 mb-4">
              <div>
                <span className="font-semibold">{user.postsCount}</span> posts
              </div>
              <button className="hover:underline">
                <span className="font-semibold">{user.followersCount}</span> followers
              </button>
              <button className="hover:underline">
                <span className="font-semibold">{user.followingCount}</span> following
              </button>
            </div>
            
            <div>
              <h2 className="font-semibold mb-1">{user.name}</h2>
              <p className="text-sm">{user.bio}</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-t">
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 flex items-center gap-2 ${
                activeTab === 'posts' ? 'border-t border-black font-semibold' : 'text-gray-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
              Posts
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-6 py-3 flex items-center gap-2 ${
                activeTab === 'saved' ? 'border-t border-black font-semibold' : 'text-gray-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
              Saved
            </button>
            <button
              onClick={() => setActiveTab('tagged')}
              className={`px-6 py-3 flex items-center gap-2 ${
                activeTab === 'tagged' ? 'border-t border-black font-semibold' : 'text-gray-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
              Tagged
            </button>
          </div>
        </div>
        
        {/* Post grid */}
        <div className="py-6">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-3 gap-1 md:gap-4">
              {posts.map((post) => (
                <div key={post.id} className="aspect-square relative group">
                  <Image
                    src={post.imageUrl}
                    alt={'Post ' + post.id}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4 text-white font-semibold">
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        {post.likesCount}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
                        </svg>
                        {post.commentsCount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <p className="text-gray-500">Only you can see what you've saved</p>
            </div>
          )}
          
          {activeTab === 'tagged' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No Photos</h3>
              <p className="text-gray-500">No photos where you've been tagged.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 