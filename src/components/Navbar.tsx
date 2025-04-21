'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock user state - in a real app, this would come from an auth context
  const user = {
    id: 'user1',
    username: 'john_doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/feed" className="text-xl font-bold">
              Instagram Clone
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/feed" className="p-1 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </Link>
            
            <Link href="/explore" className="p-1 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </Link>
            
            <Link href="/create" className="p-1 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </Link>
            
            <Link href="/notifications" className="p-1 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={user.image}
                    alt={user.username}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href={`/profile/${user.username}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/saved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Saved
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link href="/auth/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white pt-2 pb-3 space-y-1">
            <Link href="/feed" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/explore" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Explore
            </Link>
            <Link href="/create" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Create
            </Link>
            <Link href="/notifications" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Notifications
            </Link>
            <Link href={`/profile/${user.username}`} className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Profile
            </Link>
            <Link href="/auth/signin" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Sign out
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 