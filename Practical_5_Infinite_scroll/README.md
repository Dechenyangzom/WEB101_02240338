# Practical 5: Infinite Scroll with TanStack Query

## Overview

This practical implements infinite scrolling functionality in a TikTok-like application using TanStack Query (React Query) with cursor-based pagination, providing a smooth and endless scrolling experience.

## Student Information

- **Name:** Dechen Yangzom
- **Student ID:** 02240338
- **Course:** WEB101

---

## Features Implemented

- Cursor-based pagination on the backend
- Infinite scroll on the frontend using `useInfiniteQuery`
- Intersection Observer API to detect scroll position
- Smooth loading states and end-of-feed indicators
- Separate feeds: For You and Following

---

## Technologies Used

**Frontend**
- Next.js 15
- TanStack Query (React Query) — for infinite scroll and data fetching
- Intersection Observer API — for detecting scroll position
- Supabase — for video and thumbnail storage
- Axios — for API requests
- Tailwind CSS — for styling

**Backend**
- Node.js with Express
- Prisma ORM — for database queries
- PostgreSQL — database
- JWT — for authentication
- Supabase Storage — for file storage

---

## Project Structure

```
Practical_5_Infinite_scroll/
├── TikTok_Frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.js          # QueryClientProvider setup
│   │   │   └── upload/
│   │   │       └── page.jsx       # Video upload page
│   │   ├── components/
│   │   │   └── ui/
│   │   │       └── VideoFeed.jsx  # Infinite scroll feed
│   │   ├── hooks/
│   │   │   └── useIntersectionObserver.js  # Custom hook
│   │   └── services/
│   │       ├── videoService.js    # API calls with cursor pagination
│   │       └── uploadService.js   # Supabase upload service
│   └── .env.local
└── TikTok_Server/
    ├── src/
    │   └── controllers/
    │       └── videoController.js  # Cursor-based pagination logic
    └── .env
```

---

## Setup Instructions

### Prerequisites
- Node.js installed
- PostgreSQL installed and running
- Supabase account with storage buckets set up

### Backend Setup

1. Clone the repository and navigate to the server folder:
```bash
cd TikTok_Server
npm install
npx prisma generate
npx prisma db push
```

2. Create a `.env` file in `TikTok_Server/`:
```env
PORT=8000
NODE_ENV=development
DATABASE_URL="postgresql://postgres@localhost:5432/tiktok_db?schema=public"
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
```

3. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd TikTok_Frontend
npm install
```

2. Create a `.env.local` file in `TikTok_Frontend/`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

3. Start the frontend:
```bash
npm run dev
```

4. Open your browser at `http://localhost:3000`

---

## Key Implementation Details

### Cursor-Based Pagination (Backend)

Instead of traditional offset pagination (`page=2&limit=10`), the backend uses cursor-based pagination for better performance and consistency:

```js
const videos = await prisma.video.findMany({
  take: limitNum + 1,  // fetch one extra to check if there's more
  ...(cursor && {
    cursor: { id: parseInt(cursor) },
    skip: 1,
  }),
  orderBy: { createdAt: 'desc' },
});

const hasNextPage = videos.length > limitNum;
const nextCursor = hasNextPage ? results[results.length - 1].id : null;
```

### Intersection Observer Hook (Frontend)

A custom hook detects when the user scrolls to the bottom of the feed:

```js
const useIntersectionObserver = (options = {}) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  return [targetRef, isVisible];
};
```

### Infinite Query (Frontend)

TanStack Query's `useInfiniteQuery` manages pagination state automatically:

```js
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['videos', feedType],
  queryFn: ({ pageParam }) => fetchFn({ cursor: pageParam }),
  initialPageParam: null,
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});
```

---

## Challenges Faced

1. **ES Module vs CommonJS conflict** — The project used ES modules (`import/export`) but some files used `require/exports`. Fixed by converting all files to use consistent ES module syntax.

2. **Prisma client not initialized** — Solved by running `npx prisma generate` after cloning.

3. **Environment variables not loading** — Fixed by ensuring `.env` files were created before starting the server and using `dotenv.config()` at the top of `index.js`.

4. **Supabase RLS policy blocking uploads** — Fixed by adding a public INSERT policy to the storage buckets.

5. **Backend createVideo mismatch** — The backend was expecting file uploads (`req.files`) but the frontend was sending URLs after uploading directly to Supabase. Fixed by updating the backend to accept URLs instead.

---

## References

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [useInfiniteQuery Guide](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Prisma Cursor-Based Pagination](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)