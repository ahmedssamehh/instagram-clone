# Instagram Clone

A modern Instagram clone built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- 📱 Responsive design for mobile and desktop
- 🔐 User authentication (signup, signin)
- 📷 Create and share posts with images
- ❤️ Like and comment on posts
- 👥 Follow other users
- 🔍 Explore page to discover content
- 👤 User profiles with posts grid
- 💾 Save posts to your collection

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/instagram-clone.git
cd instagram-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up the database:

```bash
# Generate Prisma client
npm run prisma:generate

# Push the database schema to your SQLite database
npm run prisma:push
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

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
│   ├── app/               # Next.js app router pages
│   ├── components/        # Reusable UI components
│   └── styles/            # Global styles
└── next.config.js         # Next.js configuration
```

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
