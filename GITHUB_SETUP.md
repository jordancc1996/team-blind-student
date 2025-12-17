# GitHub Setup Guide

Your Team Blind clone is ready to push to GitHub! Follow these steps:

## ✅ Already Done
- ✅ Git repository initialized
- ✅ All files committed (26 files, 1948 insertions)

## 📤 Push to GitHub - Option 1: Using GitHub Website (Easiest)

### Step 1: Create a New Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `team-blind-clone`
3. Description: "Team Blind clone built with Next.js 14, TypeScript, and Tailwind CSS"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Push Your Code
After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd C:\Users\jorda\team-blind-clone

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/team-blind-clone.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 📤 Push to GitHub - Option 2: Using GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. Go to File → Add Local Repository
4. Browse to: `C:\Users\jorda\team-blind-clone`
5. Click "Publish repository"
6. Choose name and visibility (public/private)
7. Click "Publish Repository"

## 🔐 Authentication

If prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your password)
  - Create token at: https://github.com/settings/tokens
  - Select scopes: `repo` (full control of private repositories)

## 📝 Your Commit Details

```
Commit: 7372a11
Message: Initial commit: Team Blind clone with Next.js 14
Files: 26 files changed, 1948 insertions(+)
```

## 🎯 What's Included

- ✅ Full Next.js 14 project with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS with purple theme
- ✅ All components (Navbar, Sidebar, PostCard, TrendingSidebar)
- ✅ Sample data with 6 posts
- ✅ Documentation (README, SETUP, QUICK_START, etc.)
- ✅ .gitignore (excludes node_modules, .next, etc.)

## 🚀 After Pushing

Your repository will be live at:
```
https://github.com/YOUR_USERNAME/team-blind-clone
```

You can then:
1. Share the link with others
2. Deploy to Vercel (https://vercel.com) - click "Import Project"
3. Enable GitHub Pages for documentation
4. Add collaborators
5. Set up GitHub Actions for CI/CD

## 🌐 Quick Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your `team-blind-clone` repository
5. Click "Deploy" (Vercel auto-detects Next.js)
6. Your app will be live in ~2 minutes!

## 🆘 Troubleshooting

**Error: remote origin already exists**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/team-blind-clone.git
```

**Error: failed to push some refs**
```bash
git pull origin main --rebase
git push -u origin main
```

**Authentication failed**
- Use Personal Access Token instead of password
- Or use GitHub Desktop for easier authentication

---

**Your project is ready to share with the world! 🎉**
