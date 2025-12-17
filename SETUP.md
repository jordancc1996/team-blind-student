# Setup Instructions

## Prerequisites

Make sure you have Node.js installed (version 18.0 or higher recommended).

## Installation Steps

1. **Install Dependencies**

```bash
npm install
```

Or if you prefer yarn or pnpm:

```bash
yarn install
# or
pnpm install
```

2. **Run the Development Server**

```bash
npm run dev
```

Or with yarn/pnpm:

```bash
yarn dev
# or
pnpm dev
```

3. **Open Your Browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
team-blind-clone/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Favicon
├── components/            # React components
│   ├── Navbar.tsx         # Top navigation bar
│   ├── Sidebar.tsx        # Left sidebar navigation
│   ├── RightSidebar.tsx   # Right sidebar (trending topics)
│   ├── PostCard.tsx       # Post card component
│   ├── index.ts           # Component exports
│   └── ui/                # shadcn/ui base components
│       ├── button.tsx
│       └── card.tsx
├── lib/                   # Utility functions
│   └── utils.ts           # cn() helper for class merging
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies

```

## Features Implemented

✅ Next.js 14 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ shadcn/ui component architecture
✅ Responsive navigation bar with purple theme (#5B21B6)
✅ Left sidebar with navigation links
✅ Main content feed with post cards
✅ Right sidebar with trending topics and popular companies
✅ Team Blind-inspired design

## Color Scheme

- Primary Purple: #5B21B6
- Background: #FFFFFF and #F9FAFB
- Text: #111827
- Borders: #E5E7EB

## Next Steps

- Run `npm run dev` to start the development server
- Edit components in the `components/` directory
- Add new pages in the `app/` directory
- Customize styles in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm run start
```

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Clear Next.js cache: `rm -rf .next`
3. Check that you're using Node.js 18+ : `node --version`
