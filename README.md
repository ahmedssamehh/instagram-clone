# Instagram Clone

A modern Instagram clone built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## 📸 Screenshots

<div align="center">
  <h3>Sign In Page</h3>
  <img src="https://i.imgur.com/JsFiRVL.png" alt="Sign In Page" width="700px" />

  <h3>Sign Up Page</h3>
  <img src="https://i.imgur.com/YRt8LnJ.png" alt="Sign Up Page" width="700px" />

  <h3>Feed Page</h3>
  <img src="https://i.imgur.com/OXpMDsL.png" alt="Feed Page" width="700px" />

  <h3>Post Interactions</h3>
  <img src="https://i.imgur.com/LqE5wdE.png" alt="Post Comments" width="700px" />
</div>

## Features

- 📱 Responsive design for mobile and desktop
- 🔐 User authentication (signup, signin) with NextAuth
- 📷 Create and share posts with images
- ❤️ Like and comment on posts
- 👥 Follow other users
- 🔍 Explore page to discover content
- 👤 User profiles with posts grid
- 💾 Save posts to your collection

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **State Management**: React Hooks and Context

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ahmedssamehh/instagram-clone.git
cd instagram-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up the environment variables:

Create a `.env` file in the root directory with the following content:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:

```bash
# Generate Prisma client
npm run prisma:generate

# Push the database schema to your SQLite database
npm run prisma:push
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Database Schema

The application uses the following data models:

- **User**: User accounts and profile information
- **Post**: Images with captions shared by users
- **Comment**: Comments on posts
- **Like**: Record of which posts are liked by which users
- **Follows**: Record of which users follow which other users

You can view and edit the database using Prisma Studio:

```bash
npm run prisma:studio
```

## Project Structure

```
instagram-clone/
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app router pages and API routes
│   │   ├── api/           # API endpoints using Next.js API routes
│   │   ├── auth/          # Authentication pages (signin, signup)
│   │   ├── profile/       # User profile pages
│   │   ├── feed/          # Main feed page
│   │   ├── create/        # Create post page
│   │   └── explore/       # Explore page for discovering content
│   ├── components/        # Reusable UI components
│   ├── lib/               # Utility functions and shared code
│   └── generated/         # Generated Prisma client
└── next.config.js         # Next.js configuration
```

## Key Features Implementation

- **Authentication**: NextAuth.js with credentials provider
- **Image Hosting**: Using Unsplash for demo images
- **Real-time Interactions**: Like and comment functionality with optimistic UI updates
- **Responsive Design**: Tailwind CSS for mobile-first approach

## Future Improvements

- Direct messaging between users
- Stories feature
- Notifications
- Enhanced image editing
- Video support
- Hashtags and search functionality
- Performance optimization
- Mobile app with React Native

## License

This project is open source and available under the [MIT License](LICENSE).
