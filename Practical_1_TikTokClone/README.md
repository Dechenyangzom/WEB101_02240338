# TiKTok Web Interface Clone - Next.js & Tailwind CSS

This project is a simplified font-end clone of TikTok's web interface built with Next.js, Tailwind CSS, and React Hook Form. Including a responisve sidebar, video feed, multiple pages, and login/signup forms with validation.


# Project Structure

tiktok-clone/
├── src/
│   ├── app/
│   │   ├── explore/
│   │   │ └──page.jsx
│   │   ├──following/
│   │   │  └──page.jsx
│   │   ├── live/
│   │   │   └── page.jsx
│   │   ├── login/
│   │   │   └── page.jsx
│   │   ├── profile/
│   │   │   └── page.jsx
│   │   ├── signup/
│   │   │   └── page.jsx
│   │   ├── upload/
│   │   │   └── page.jsx
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── layout/
│   │   │   └── MainLayout.jsx
│   │   └── ui/
│   │       ├── VideoCard.jsx
│   │       └── VideoFeed.jsx
│   ├── lib/
│   └── globals.css
├── .gitignore
├── package.json
└── README.md

# Getting Started

## Step 1: Initialize a Next.js Project

bash
* npx create-next-app@latest

# Configuration selected

* TypeScript: ❌ No  
* ESLint: ✅ Yes  
* Tailwind CSS: ✅ Yes  
* Use `src/` directory: ✅ Yes  
* Use App Router: ✅ Yes  
* Import Alias: ❌ No

## Step 2: Clean Default Setup

* Replaced the content in `src/app/page.js` with a basic component.

* Updated `globals.css` to only include Tailwind directives:

@import "tailwindcss";


## Step 3: Project Folder Structure

Created folders (inside the src directory):

bash 
* mkdir -p src/components/layout
* mkdir -p src/components/ui
* mkdir -p src/lib
* mkdir -p src/app/profile
* mkdir -p src/app/upload


## Step 4: Basic Layout Component with sidebar

Created `MainLayout.jsx` in `src/components/layout/` containing navigation with links like:

  * For You
  * Following
  * Explore
  * Live
  * Profile
  * Upload

* Includes responsive sidebar and header layout with a search bar and buttons (Login, Upload).

## Step 6: Update Root layout in App directory
The global `layout.js` was modified to include MainLayout, ensuring the sidebar appears on all pages.


## Step 7: Basic Navigation Pages Created

* profile/page.jsx  
* upload/page.jsx  
* explore/page.jsx 
* following/page.jsx
* live/page.jsx

* Each page renders a placeholder heading for now (e.g., `Explore Page`).


## Step 8: Starting the Developing Server
Running the project at http://localhost:3000


# Part 2: Creating the Web layout & Main interface

## Step 1: Installing additional dependencies 

bash
* npm install react-icons

## Step 2: Updating the Main layout structure
update 'MainLayout.jsx' in 'src/component/layout' to match TikTok's web version with the sidebar.

* Logo (TikTok)
* Navigation links (For You, Following, Explore, LIVE)
* suggested accounts (dummy list)
* Login prompt & button

## Step 3: Video Feed & Card Implementation

Created:

* 'VideoCard.jsx' (src/component/ui/VideoCard.jsx): 
Individual card showing interaction buttons (like, comment, share)  

* 'VideoFeed.jsx' (src/component/ui/VideoFeed.jsx): 
Maps over 'VideoCard' to simulate a scrolling feed


# Part 3: Creating Login & Registration Forms (React Hook Form)

## Step 1: Installing Required Dependencies 

bash
* npm install react-hook-form

Features:

* Form validation with errors  
* Password confirmation  
* Loading states  
* Navigation link to/from login/signup  

## Step 2: Creating Login Page 

* src/app/login/page.jsx

## Step 8: MainLayout Navigation Updated

* Sidebar login button now links to `/login`  
* Header includes buttons for `/upload`, `/profile`, and `/signup`


## Testing Checklist

| Test Case                             | Status |
| ------------------------------------- | ------ |
| Navigate between all pages            | ✅      |
| Sidebar and header render correctly   | ✅      |
| Video feed layout appears             | ✅      |
| Like/comment/share UI buttons render  | ✅      |
| Login form validation works           | ✅      |
| Signup form password match validation | ✅      |
| Terms checkbox required               | ✅      |
| Loading state on submission           | ✅      |
| Navigation between auth pages works   | ✅      |

---

## 🔗 Resources

* [React.js Documentation](https://legacy.reactjs.org/docs)  
* [Next.js Documentation](https://nextjs.org/docs)  
* [React Hook Form Guide](https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/)  
* [Tailwind CSS + Next.js Setup](https://tailwindcss.com/docs/guides/nextjs)  
* [Regex for Validation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

---

## 🚀 Running Locally

`bash
npm install
npm run dev


Visit: [http://localhost:3000](http://localhost:3000)



## ✅ Deliverables Summary

[✔️] Project setup with Next.js and Tailwind  
[✔️] App Router structure with `src/app`  
[✔️] Sidebar navigation and layout  
[✔️] Placeholder pages for routes  
[✔️] Video feed + interaction buttons  
[✔️] Login and Signup with validation (React Hook Form)  
[✔️] Navigation integrated with MainLayout  
[✔️] All instructions strictly followed

---

