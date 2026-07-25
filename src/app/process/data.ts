import { type LucideIcon } from "lucide-react";

export const corePhases = [
  {
    step: "01",
    title: "Discovery & Strategy",
    tagline: "Understand your brand.",
    description: "We begin by learning about your restaurant's brand, culinary concept, location, and guest booking goals. This stage ensures every technical decision aligns with your business objectives.",
    activities: ["Concept consultation", "Guest profile mapping", "Competitor menu research", "Third-party platform check", "Project roadmap", "Launch estimation"],
    icon: "search"
  },
  {
    step: "02",
    title: "Planning & Architecture",
    tagline: "Structure the guest path.",
    description: "Before writing code, we structure your digital menu, define the reservation path, and map out location pages to optimize user conversion.",
    activities: ["Menu architecture", "Reservation user flows", "Location page layouts", "SEO keyword strategy", "Feature prioritization", "Content gathering"],
    icon: "layers"
  },
  {
    step: "03",
    title: "Design",
    tagline: "Capture the atmosphere.",
    description: "We create a premium visual system that highlights your culinary artistry, showcases your dining room space, and makes booking intuitive.",
    activities: ["Visual identity design", "Mobile menu prototypes", "Food gallery styling", "Typography selection", "Client review & feedback"],
    icon: "palette"
  },
  {
    step: "04",
    title: "Development",
    tagline: "Build with speed.",
    description: "We translate the designs into responsive, fast-loading pages and integrate reservation widgets, digital menus, and custom restaurant AI tools.",
    activities: ["Fast-loading frontend", "Digital menu coding", "Booking system integration", "Restaurant AI setup", "Analytics configuration"],
    icon: "code-xml"
  },
  {
    step: "05",
    title: "Testing & Optimization",
    tagline: "Flawless checkouts.",
    description: "We thoroughly test menu navigation, booking forms, page performance, and mobile layout before going live.",
    activities: ["Menu usability testing", "Reservation flow validation", "Mobile responsiveness check", "Image loading optimization", "Local SEO health check"],
    icon: "shield-check"
  },
  {
    step: "06",
    title: "Launch & Growth",
    tagline: "Welcome guests online.",
    description: "Your site goes live with Google Maps sync, and we hand over simple tools so you can update your menu, prices, and announcements in real-time.",
    activities: ["Vercel deployment", "Domain & SSL config", "Google Maps sync", "Dashboard walkthrough", "Ongoing menu support"],
    icon: "rocket"
  }
];

export const developmentPaths = [
  {
    title: "Single-Location Restaurant",
    description: "Ideal for independent bistros, neighborhood eateries, cafes, and food trucks looking for a premium online home.",
    timeline: "2–3 weeks",
    steps: ["Discovery", "Menu Design", "Development", "Booking Integration", "Launch"],
  },
  {
    title: "Multi-Location & Group Site",
    description: "Tailored for restaurant groups, franchises, and hospitality brands managing multiple locations and menus.",
    timeline: "4–6 weeks",
    steps: ["Discovery", "Group Strategy", "Location Routing", "Shared Assets System", "Centralized CMS", "Launch"],
  },
  {
    title: "AI-Enhanced Digital Experience",
    description: "For forward-thinking restaurants looking to integrate AI receptionists, SMS booking alerts, and interactive menus.",
    timeline: "3–5 weeks",
    steps: ["Brand Strategy", "AI Personality Training", "Interactive Menu Setup", "Booking Automation", "Integration", "Launch"],
  },
  {
    title: "Catering & Events Platform",
    description: "Built for venues, upscale caterers, and private dining rooms needing custom inquiry and proposal management.",
    timeline: "3–4 weeks",
    steps: ["Inquiry Mapping", "Package Showcase Design", "Booking Pipeline Setup", "Client Dashboard", "Testing", "Launch"],
  }
];

export const clientInvolvement = [
  {
    title: "Regular Menu & Layout Updates",
    description: "We share staging links so you can watch your menus and layouts come together.",
    icon: "calendar",
  },
  {
    title: "Tasting & Review Milestones",
    description: "Review key design drafts and menu organization before we begin coding.",
    icon: "message-square-quote",
  },
  {
    title: "Clear Project Deliverables",
    description: "No hidden development or unexpected reservation setup surprises.",
    icon: "refresh-cw",
  },
  {
    title: "Menu & Detail Tweaks",
    description: "We accommodate minor pricing or ingredient updates throughout the process.",
    icon: "git-merge",
  }
];

export const qualityAssurance = [
  { title: "Menu Usability", icon: "utensils-crossed" },
  { title: "Responsive Testing", icon: "monitor-smartphone" },
  { title: "Image Loading Speed", icon: "zap" },
  { title: "Local SEO Validation", icon: "search" },
  { title: "Cross-Device Checks", icon: "smartphone" },
  { title: "SSL & Security", icon: "shield-check" },
  { title: "Schema Markup", icon: "search-check" },
  { title: "Booking Verification", icon: "calendar" }
];

export const processFaqs = [
  {
    question: "How long does a restaurant project take?",
    answer: "A single-location site typically takes 2-4 weeks, while larger groups with multi-location routing or advanced AI reservation features take 4-6 weeks."
  },
  {
    question: "Can you work with our existing reservation platform?",
    answer: "Yes. We seamlessly integrate with all major booking platforms including OpenTable, Resy, SevenRooms, Tock, and standard contact forms."
  },
  {
    question: "Will we be able to update menu prices and items ourselves?",
    answer: "Absolutely. We build your site with a custom, user-friendly CMS so your staff can update dishes, edit prices, and post holiday hours in real-time."
  },
  {
    question: "Do you help with food photography and image optimization?",
    answer: "While we don't shoot the photos directly, we guide you on what assets are needed and perform advanced compression to ensure your high-res food shots load instantly on mobile."
  },
  {
    question: "What is restaurant schema markup and do we need it?",
    answer: "Yes, it is structured code that helps search engines understand your menu items, opening hours, and location. We include it in every build so you rank higher in local search results."
  },
  {
    question: "How do AI receptionist features benefit our restaurant?",
    answer: "They handle repetitive guest inquiries about dietary restrictions, reservation slots, or parking locations 24/7, reducing phone traffic for your busy front-of-house staff."
  },
  {
    question: "Do you provide training on how to use the dashboard?",
    answer: "Yes, we provide a video walkthrough and guide showing you exactly how to update menus, manage booking links, and post announcements."
  }
];

export const techTimeline = [
  { stage: "Planning", tech: "Figma, Notion, Brand Assets", icon: "palette" },
  { stage: "Frontend", tech: "React, Next.js, Tailwind CSS", icon: "monitor" },
  { stage: "Integration", tech: "OpenTable, Resy, Toast APIs", icon: "plug" },
  { stage: "Database & CMS", tech: "Supabase, Sanity CMS, Payload", icon: "database" },
  { stage: "AI Features", tech: "Gemini AI, OpenAI API, Chatbots", icon: "bot" },
  { stage: "Deployment", tech: "Vercel, Cloudflare, SSL", icon: "cloud" }
];
