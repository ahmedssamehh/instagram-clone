import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-2xl font-bold">Instagram Clone</h1>
        <div className="flex items-center gap-4">
          <Link href="/auth/signin" className="btn btn-secondary">
            Sign In
          </Link>
          <Link href="/auth/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Share your moments with friends</h2>
            <p className="text-gray-600 mb-6">
              Join millions of users and share your photos, follow friends and discover new content
              every day.
            </p>
            <div>
              <Link href="/auth/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-medium">username</p>
                    <p className="text-xs text-gray-500">Original poster</p>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo preview
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-4 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                  </svg>
                </div>
                <p className="mb-2"><span className="font-medium">username</span> This is a caption for the post...</p>
                <p className="text-gray-500 text-sm">View all 13 comments</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why choose our platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Photos</h3>
              <p className="text-gray-600">Upload and share your favorite moments with friends and followers.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with Friends</h3>
              <p className="text-gray-600">Follow friends, family, and interesting accounts from around the world.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Engage with Content</h3>
              <p className="text-gray-600">Like, comment, and save posts that inspire you or bring you joy.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Instagram Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}
