# Component Documentation

## Layout Components

### Navbar (`components/Navbar.tsx`)

The top navigation bar with a purple theme (#5B21B6).

**Features:**
- Logo with icon
- Search bar for posts, companies, and topics
- Notification bell icon
- Messages icon
- User profile button

**Styling:**
- Fixed position at top
- Purple background with white text
- Height: 64px (h-16)

### Sidebar (`components/Sidebar.tsx`)

Left sidebar navigation with main menu items.

**Navigation Items:**
- Home (active by default)
- Trending
- My Posts
- Companies
- Communities
- Settings
- Help

**Features:**
- Create Post button at the top
- Active state highlighting in purple
- Fixed position on the left
- Width: 256px (w-64)

### RightSidebar (`components/RightSidebar.tsx`)

Right sidebar displaying trending topics and popular companies.

**Sections:**
1. **Trending Topics**
   - Shows top 5 trending hashtags
   - Displays post count for each topic
   - Numbered list format

2. **Popular Companies**
   - Lists top companies
   - Shows member count
   - Clickable company links

3. **About Section**
   - Brief description
   - Footer links (Privacy, Terms, Help)

**Styling:**
- Fixed position on the right
- Width: 320px (w-80)
- Gray background (#F9FAFB)

## Content Components

### PostCard (`components/PostCard.tsx`)

Individual post card displaying user content.

**Props:**
- `company`: Company name
- `role`: User's role/position
- `timeAgo`: Time since post was created
- `title`: Post title
- `content`: Post content text
- `likes`: Number of likes
- `comments`: Number of comments
- `tags`: Array of tag strings

**Features:**
- Company avatar with initials
- Post metadata (company, role, timestamp)
- Like, comment, share, and bookmark actions
- Tag chips with purple styling
- Hover effects for better UX

**Styling:**
- White background with border
- Shadow on hover
- Rounded corners
- Responsive padding

## UI Components (shadcn/ui)

### Button (`components/ui/button.tsx`)

Reusable button component with variants.

**Variants:**
- `default`: Purple background
- `outline`: Border with transparent background
- `ghost`: No border or background

### Card (`components/ui/card.tsx`)

Base card component with sub-components:
- `Card`: Main container
- `CardHeader`: Header section
- `CardTitle`: Title text
- `CardDescription`: Description text
- `CardContent`: Main content area
- `CardFooter`: Footer section

## Utilities

### `lib/utils.ts`

Contains the `cn()` function for merging Tailwind CSS classes:

```typescript
import { cn } from "@/lib/utils"

// Usage
<div className={cn("base-class", condition && "conditional-class")} />
```

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                      Navbar (Purple)                     │
├───────────┬──────────────────────────────┬──────────────┤
│           │                              │              │
│  Sidebar  │      Main Content Area       │ Right Sidebar│
│           │                              │              │
│  - Home   │  Feed Header                 │ Trending     │
│  - Trend  │  ┌──────────────────────┐   │ Topics       │
│  - Posts  │  │   Post Card 1        │   │              │
│  - Comps  │  └──────────────────────┘   │ Popular      │
│  - Comms  │  ┌──────────────────────┐   │ Companies    │
│           │  │   Post Card 2        │   │              │
│  - Settings│ └──────────────────────┘   │ About        │
│  - Help   │  ┌──────────────────────┐   │              │
│           │  │   Post Card 3        │   │              │
│           │  └──────────────────────┘   │              │
│           │                              │              │
└───────────┴──────────────────────────────┴──────────────┘
```

## Responsive Design

The current implementation is optimized for desktop viewing. For mobile responsiveness, consider:

1. Hiding sidebars on smaller screens
2. Adding a hamburger menu for navigation
3. Making the search bar collapsible
4. Stacking content vertically

## Color Palette

```css
Primary Purple:   #5B21B6
White Background: #FFFFFF
Gray Background:  #F9FAFB
Text Dark:        #111827
Text Gray:        #6B7280
Border Gray:      #E5E7EB
```

## Icons

All icons are from `lucide-react`:
- Search, Bell, MessageSquare, User
- Home, TrendingUp, Briefcase, Users, Settings, HelpCircle
- ThumbsUp, Share2, Bookmark, MoreHorizontal
- Hash

## Future Enhancements

- Add authentication
- Implement actual API endpoints
- Add comment threads
- Create company pages
- Add user profiles
- Implement search functionality
- Add infinite scroll
- Dark mode support
