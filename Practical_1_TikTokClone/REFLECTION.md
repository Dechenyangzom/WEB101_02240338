# Introduction

This project involved building a front-end clone of the TikTok web interface, leveraging the latest capabilities of Next.js and React. The primary objective was to engineer a dynamic, multi-page user experience that feels intuitive and responsive. Key features include a simulated video feed, user authentication flows (login/signup), a profile page, and a content upload form. By utilizing Tailwind CSS for styling and modern React patterns for state and form management, the project successfully demonstrates a clean, component-driven architecture. Though it operates without a backend, the application effectively mimics real-world interactions and prioritizes user experience (UX) best practices, aligning perfectly with the specifications of Practical 1.

# Main Concepts Applied
--Next.js App Router & Routing Architecture

The project utilizes the nested routing structure of the app directory (e.g., app/signup/page.jsx, app/feed/page.jsx).
A root layout (app/layout.js) was implemented to provide a consistent base for all pages, including metadata and global styles.

--Utility-First Styling with Tailwind CSS

Rapid UI development was achieved using Tailwind's utility classes for all styling needs, from complex flexbox grids for the video feed to simple padding and margin adjustments.
Custom configurations were avoided in favor of Tailwind's default theme to maintain speed and consistency, relying on classes like grid-cols-2 and justify-between.

--Reusable Component Architecture

The interface was broken down into small, focused components like VideoCard, ProfileHeader, CommentSection, and UploadForm.
A RootLayout component, defined in the app directory, ensured that global elements like the navigation bar were present on every page without code duplication.

--Advanced Form Management with React Hook Form

react-hook-form was the library of choice for handling complex form states in the login, signup, and upload pages.
It was used to implement robust validation rules, including custom regex for password strength, email format verification, and real-time field matching for password confirmation.

--Simulated State & User Feedback Loops

Client-side state (useState) was employed to manage dynamic UI elements, such as the like count on a video or the open/close state of a comment drawer.
Simulated loading states (isSubmitting, isUploading) were added to forms to provide immediate visual feedback, enhancing the perceived performance and responsiveness.

--Iconography and Visual Communication

The react-icons library was integrated to provide a familiar and scalable set of icons for actions (play, pause, share, profile, etc.).
Icons were used not just for decoration but as primary affordances for user interaction, following common design patterns found in social media applications.

# What I Learned
This practical deepened my understanding of several key frontend development concepts:

-The power and simplicity of the Next.js App Router for creating complex, nested layouts without prop-drilling.
-How to effectively decouple the UI into a component library, making the codebase more maintainable and scalable.
-The nuances of form validation in React, specifically how to use react-hook-form's resolver to integrate custom validation logic cleanly.
-The importance of micro-interactions, such as disabling a submit button and showing a spinner, to manage user expectations during async operations.
-How to build a responsive design system from scratch using Tailwind's mobile-first breakpoints, ensuring usability across all device sizes.

# Challenges Faced and How I Overcame Them
--Dynamic Form Validation Rules

Issue: Implementing a "confirm password" validation that dynamically checks against the "password" field's current value was tricky with standard react-hook-form usage.

Solution: Used the watch function from react-hook-form to monitor the password field's value and passed it into the validation schema for the confirm field, ensuring real-time, accurate validation.

--Responsive Video Feed Layout

Issue: On the main feed page, the grid of video cards would break or look cluttered on very small mobile screens.

Solution: Applied more granular Tailwind breakpoints. I used grid-cols-1 for xs screens, grid-cols-2 for sm screens, and grid-cols-3 for md screens, combined with setting a max-width on the card container to prevent them from becoming too large on desktop.

--Handling Nested Layouts with the App Router

Issue: Initially, I struggled with how to create a layout for the authentication pages (login/signup) that was different from the main app layout (with the navbar).

Solution: I created a dedicated (auth) route group folder. Inside it, I placed a separate layout.js file that provided a simple, centered container for the login and signup forms, completely isolating them from the main application's navigation.

--Simulating a Realistic Upload Flow

Issue: Without a backend, I needed a way to simulate the file upload process to test the UX.

Solution: I used a useState hook to manage an uploadProgress value. When the form was submitted, a setTimeout function would increment this value from 0 to 100 over a few seconds, updating a progress bar to give the user a realistic sense of an upload happening.

## Conclusion
This project was a valuable exercise in modern frontend engineering with Next.js. It successfully translated a complex, feature-rich application like TikTok into a functional and visually coherent static prototype. The combination of the App Router for structure, Tailwind CSS for design, and react-hook-form for interaction created a powerful and efficient development workflow.

The resulting application is not just a collection of pages but a cohesive, navigable experience with thoughtful details. This foundation is robust and scalable, making it an ideal starting point for future iterations that could include backend integration for real user authentication, database storage for videos, and live comment functionality.