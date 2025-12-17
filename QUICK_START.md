# 🚀 Quick Start Guide

## Installation (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

---

## 📂 Project Layout

```
┌─────────────────────────────────────────────────────────┐
│  Navbar (Purple - #5B21B6)                              │
│  [Logo] [Search Bar ............] [🔔 💬 👤]           │
├─────────────┬────────────────────────────┬──────────────┤
│   Sidebar   │   Main Content Feed        │ Right Panel  │
│   (256px)   │   (Fluid Width)            │   (320px)    │
│             │                            │              │
│ [+ Create]  │ Your Feed                  │ 🔥 Trending  │
│             │ Popular|Recent|Following   │ #layoffs     │
│ 🏠 Home     │ ┌────────────────────────┐│ #salary...   │
│ 📈 Trending │ │ 👤 Google - Sr SWE     ││              │
│ 📝 My Posts │ │ Should I accept...     ││ 💼 Companies │
│ 💼 Companies│ │ Content text here...   ││ Google       │
│ 👥 Community│ │ #tags #career          ││ Meta         │
│             │ │ 👍 142 💬 38 🔗 📌     ││              │
│ ⚙️ Settings │ └────────────────────────┘│              │
│ ❓ Help     │ ┌────────────────────────┐│ ℹ️ About     │
│             │ │ Next Post...           ││              │
│             │ └────────────────────────┘│              │
└─────────────┴────────────────────────────┴──────────────┘
```

---

## 📝 Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage with feed |
| `components/Navbar.tsx` | Top purple navigation |
| `components/Sidebar.tsx` | Left menu |
| `components/RightSidebar.tsx` | Trending topics |
| `components/PostCard.tsx` | Post display |
| `tailwind.config.ts` | Colors & theme |
| `app/globals.css` | Global styles |

---

## 🎨 Color Codes

```
Primary Purple:  #5B21B6  ████████
White:           #FFFFFF  ████████
Light Gray BG:   #F9FAFB  ████████
Text Dark:       #111827  ████████
Text Gray:       #6B7280  ████████
Border:          #E5E7EB  ████████
```

---

## 🛠️ Common Commands

```bash
# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Clear Next.js cache
rm -rf .next
```

---

## 📦 What's Included

✅ **Framework**: Next.js 14 (App Router)
✅ **Language**: TypeScript
✅ **Styling**: Tailwind CSS
✅ **Icons**: Lucide React
✅ **Components**: shadcn/ui architecture
✅ **Features**: Navbar, Sidebars, Post Feed, Trending Topics

---

## 🔧 Customization Guide

### Change Primary Color
Edit `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "#YOUR_COLOR_HERE",
  // ...
}
```

### Add New Page
Create file in `app/` directory:
```typescript
// app/companies/page.tsx
export default function Companies() {
  return <div>Companies Page</div>
}
```

### Create New Component
Add file in `components/` directory:
```typescript
// components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Component</div>
}
```

### Update Navigation
Edit `components/Sidebar.tsx`:
```typescript
const navigationItems = [
  { icon: Home, label: "New Item", active: false },
  // ...
]
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Command not found: npm | Install Node.js from nodejs.org |
| Port 3000 already in use | Use `npm run dev -- -p 3001` |
| Module not found | Run `npm install` |
| Styles not updating | Clear cache: `rm -rf .next` |
| TypeScript errors | Check `tsconfig.json` paths |

---

## 📚 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Lucide Icons**: https://lucide.dev
- **shadcn/ui**: https://ui.shadcn.com

---

## 🎯 Next Steps

1. ✅ Install and run the project
2. 📖 Read through the components
3. 🎨 Customize the colors
4. 🚀 Add your own features
5. 💡 Build something amazing!

---

**Need Help?** Check out the detailed docs:
- `README.md` - Project overview
- `SETUP.md` - Full setup instructions
- `COMPONENTS.md` - Component documentation
- `PROJECT_SUMMARY.md` - Complete project breakdown

**Happy Coding! 🎉**
