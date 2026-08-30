export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Restaurant" | "Hotels" | "Bar";
  clientType: string;
  shortDescription: string;
  overview: string;
  industry: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  liveHref: string;
  performance: string;
  results: string[];
  challenge: string;
  goals: string[];
  design: string;
  development: string;
};

export const siteConfig = {
  name: "MhStudio",
  tagline: "Premium custom websites and AI solutions for modern businesses.",
  description:
    "MhStudio designs and develops high-performance, conversion-focused websites featuring digital showcases, smart integrations, and custom AI assistants.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "saad@mhstudios.online",
  whatsappHref: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/+923429842565",
  calendarHref: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "https://calendly.com/mhstudio/30min",
  phoneLabel: "WhatsApp consultation",
};

export const navigationItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "Instagram", href: "/contact#contact-methods" },
  { label: "LinkedIn", href: "/contact#contact-methods" },
  { label: "Behance", href: "/contact#contact-methods" },
];

export const trustedIndustries = [
  "Fine Dining",
  "Casual Dining",
  "Cafes & Bistros",
  "Bars & Pubs",
  "Pizzerias",
  "Steakhouses",
  "Sushi Bars",
];

export const industries = [
  "Fine Dining",
  "Casual Dining",
  "Cafe",
  "Bar & Grill",
  "Pizzeria",
  "Steakhouse",
  "Sushi Bar",
  "Fast Casual",
  "Bakery",
  "Bistro",
  "Food Truck",
  "Catering",
];

export type IndustryShowcaseItem = {
  label: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const industryShowcaseItems: IndustryShowcaseItem[] = [
  {
    label: "Restaurants & Bistros",
    image: "/images/restaurant.avif",
    alt: "Cozy bistro dining space and plated culinary dishes.",
    objectPosition: "center center",
  },
  {
    label: "Fine Dining",
    image: "/images/fine_dining.avif",
    alt: "Elegant restaurant table with plated dishes and warm ambient lighting.",
    objectPosition: "center center",
  },
  {
    label: "Casual Dining",
    image: "/images/casual_dining.avif",
    alt: "Expansive casual dining restaurant seating and food display.",
    objectPosition: "center center",
  },
  {
    label: "Cafes & Coffee Shops",
    image: "/images/coffee_shop.avif",
    alt: "Coffee shop barista preparing specialty drinks.",
    objectPosition: "center center",
  },
  {
    label: "Bars & Nightlife",
    image: "/images/bar_nightlife.avif",
    alt: "Vibrant bar scene with cocktails and warm lighting.",
    objectPosition: "center center",
  },
  {
    label: "Restaurant Groups",
    image: "/images/restaurant_group.avif",
    alt: "Premium multi-location restaurant brand presentation.",
    objectPosition: "center center",
  },
];

export const stats: Metric[] = [
  {
    label: "Projects Completed",
    value: 6,
    suffix: "+",
    description: "Premium websites designed and launched for restaurants and food brands.",
  },
  {
    label: "Years Experience",
    value: 4,
    suffix: "+",
    description: "Creating high-performance digital dining experiences.",
  },
  {
    label: "Satisfied Owners",
    value: 6,
    suffix: "+",
    description: "Restaurant owners enjoying seamless reservations and increased orders.",
  },
  {
    label: "Establishment Types",
    value: 8,
    suffix: "+",
    description: "From fine dining and casual eateries to bars, cafes, and bakeries.",
  },
  {
    label: "Technologies Used",
    value: 12,
    suffix: "+",
    description: "Modern tools chosen for speed, online menus, and booking integrations.",
  },
];

export const whyChooseItems = [
  {
    title: "Speed & Performance",
    problem: "Guests won't wait for a slow menu to load.",
    solution: "MhStudio builds ultra-fast, lightweight pages so customers can view your menu and book tables instantly, even on poor mobile connections.",
  },
  {
    title: "Mobile-First Menus",
    problem: "Most guests search for your restaurant on their phone.",
    solution: "Our digital menus and reservation flows are designed specifically for fingers on screens, ensuring a seamless booking experience on the go.",
  },
  {
    title: "Local SEO & Maps",
    problem: "A beautiful site is useless if hungry customers can't find you.",
    solution: "We implement advanced local schema markup and Google Maps integrations to ensure you rank high when people search for food near them.",
  },
  {
    title: "Self-Managed Menus",
    problem: "You shouldn't need a developer to change a price or add a special.",
    solution: "We design simple, intuitive admin panels allowing you to update dishes, prices, and announcements in real-time with zero technical skills.",
  },
  {
    title: "AI-Powered Assistants",
    problem: "Missing reservation inquiries during busy hours costs revenue.",
    solution: "We integrate smart AI receptionists that handle booking assistance, answer FAQ questions about dietary options, and log inquiries 24/7.",
  },
  {
    title: "Stunning Food Showcases",
    problem: "Low-quality or poorly displayed photos make your food look unappetizing.",
    solution: "We build premium visual galleries and showcases that highlight your culinary artistry, interior ambiance, and brand story.",
  },
];

export const serviceCards = [
  {
    title: "Modern Restaurant Websites",
    description: "Custom, responsive website builds that showcase your brand, dining experience, and locations.",
    features: ["Brand story layout", "Multi-location ready", "Fluid responsive design"],
    icon: "monitor-smartphone",
  },
  {
    title: "Interactive Online Menus",
    description: "Fast, mobile-optimized digital menus that make browsing dishes and pricing effortless for guests.",
    features: ["Category navigation", "Dietary filters (e.g., Vegan, GF)", "Dynamic price updates"],
    icon: "utensils-crossed",
  },
  {
    title: "Online Reservation Systems",
    description: "Easy connection to OpenTable, Resy, or custom reservation flows to keep tables booked.",
    features: ["Direct platform widgets", "Custom booking inquiry forms", "Reservation FAQs"],
    icon: "calendar",
  },
  {
    title: "AI Restaurant Assistants",
    description: "Intelligent chat and WhatsApp AI assistants to answer ingredient FAQs, automate customer replies, and assist with bookings 24/7.",
    features: ["WhatsApp AI integration", "Automated booking support", "Menu FAQ responses"],
    icon: "bot",
  },
  {
    title: "Gallery & Food Showcases",
    description: "Stunning food photography and interior gallery layouts designed to captivate guests.",
    features: ["High-speed image loading", "Lightbox gallery overlays", "Ambiance highlight reels"],
    icon: "images",
  },
  {
    title: "Events & Announcements",
    description: "Promote holiday menus, wine tastings, private dining options, and local events.",
    features: ["Announcement banners", "Special menu builders", "Private event booking flows"],
    icon: "megaphone",
  },
  {
    title: "Local SEO & Map Rankings",
    description: "Technical search optimization so your restaurant shows up first when customers search nearby.",
    features: ["Google Business optimization", "Schema markup for menus/hours", "Local keyword targeting"],
    icon: "map-pinned",
  },
  {
    title: "Performance Optimization",
    description: "Speed-focused improvements ensuring your pages load instantly even on cellular data.",
    features: ["95+ Core Web Vitals score", "Advanced image compression", "Instant page transitions"],
    icon: "zap",
  },
  {
    title: "Hosting & Deployment",
    description: "End-to-end cloud hosting setup, custom domain connection, SSL security configuration, and smooth production launch.",
    features: ["Hosting setup & domain connection", "Deployment & SSL configuration", "Production launch & post-support"],
    icon: "server-cog",
  },
  {
    title: "Website Maintenance & Support",
    description: "Ongoing support to update your menus, pricing, hours, and announcements without delay.",
    features: ["Same-day content updates", "Regular backups & health checks", "Security monitoring"],
    icon: "wrench",
  },
  {
    title: "Online Ordering & Delivery",
    description: "Complete order management from checkout to customer door with POS sync.",
    features: ["Cart & checkout flows", "POS/API Integration", "Rider tracking application"],
    icon: "shopping-bag",
  },
  {
    title: "Restaurant Management Systems",
    description: "Advanced operational tools for established brands and multi-branch restaurants.",
    features: ["Supplier & warehouse management", "Multi-branch support", "Centralized admin dashboard"],
    icon: "building-2",
  },
  {
    title: "Analytics & Automation",
    description: "Data-driven insights and automated workflows to streamline operations.",
    features: ["Advanced analytics dashboard", "Customer management profiles", "Automated WhatsApp workflows"],
    icon: "bar-chart-3",
  },
];

export const serviceSections = [
  {
    title: "Restaurant Management Systems",
    description: "Complete centralized platforms that give restaurants control over orders, operations, customers, branches, staff, and business performance from one place.",
    points: ["Centralized restaurant dashboard", "Multi-branch management", "Orders, operations & business control"],
    icon: "building-2",
  },
  {
    title: "Point of Sale (POS) Systems",
    description: "Modern POS systems built to manage dine-in, takeaway, and delivery orders while keeping front-of-house operations fast and organized.",
    points: ["Dine-in, takeaway & delivery orders", "Table & customer management", "Payments, billing & order processing"],
    icon: "calculator",
  },
  {
    title: "Kitchen Display Systems (KDS)",
    description: "Digital kitchen workflows that send orders directly to the kitchen, organize preparation, reduce mistakes, and keep staff aligned in real time.",
    points: ["Real-time kitchen orders", "Preparation & status tracking", "KOT & kitchen workflow management"],
    icon: "chef-hat",
  },
  {
    title: "Online Ordering Systems",
    description: "Branded online ordering experiences that let customers browse menus, customize items, choose delivery or pickup, and place orders directly with your restaurant.",
    points: ["Cart & checkout flows", "Delivery & takeaway ordering", "Direct restaurant ordering"],
    icon: "shopping-bag",
  },
  {
    title: "Delivery Management",
    description: "Complete delivery workflows for managing delivery orders, zones, riders, assignments, statuses, and fulfillment from one platform.",
    points: ["Delivery zones & fees", "Rider assignment & tracking", "Order fulfillment management"],
    icon: "bike",
  },
  {
    title: "Dine-In & Table Management",
    description: "Digital tools for managing restaurant tables, dine-in orders, guests, open checks, reservations, and table status throughout the service.",
    points: ["Visual table management", "Open orders & table assignment", "Split bills & dine-in workflows"],
    icon: "armchair",
  },
  {
    title: "QR Menu & Self-Ordering",
    description: "Mobile-first QR menus that let guests instantly access your menu, order from their table, and enjoy a faster dine-in experience.",
    points: ["Table-specific QR menus", "Customer self-ordering", "Digital menu management"],
    icon: "qr-code",
  },
  {
    title: "Reservation Systems",
    description: "Custom reservation experiences that make it easy for guests to book tables while giving restaurants better visibility into reservations and table availability.",
    points: ["Online table bookings", "Reservation management", "Private dining & event inquiries"],
    icon: "calendar",
  },
  {
    title: "Interactive Online Menus",
    description: "Fast, mobile-optimized digital menus designed to make browsing dishes, pricing, categories, modifiers, and availability effortless for guests.",
    points: ["Category & menu navigation", "Modifiers & add-ons", "Dynamic pricing & availability"],
    icon: "utensils-crossed",
  },
  {
    title: "Customer Management & CRM",
    description: "Centralized customer profiles that help restaurants understand order history, preferences, spending behavior, and customer activity.",
    points: ["Customer profiles & order history", "Customer segmentation", "Repeat customer insights"],
    icon: "users",
  },
  {
    title: "Loyalty & Rewards",
    description: "Customer loyalty systems designed to increase repeat orders, reward your best customers, and build long-term relationships.",
    points: ["Points & rewards", "VIP & loyalty tiers", "Referral & retention programs"],
    icon: "award",
  },
  {
    title: "Promotions & Marketing",
    description: "Tools to create, manage, and measure restaurant promotions, campaigns, discount codes, special offers, and customer re-engagement.",
    points: ["Coupons & discount campaigns", "Targeted customer promotions", "Campaign performance tracking"],
    icon: "ticket",
  },
  {
    title: "Analytics & Business Intelligence",
    description: "Clear, actionable analytics that help restaurant owners understand revenue, orders, customers, products, branches, and operational performance.",
    points: ["Sales & revenue analytics", "Product & branch performance", "Customer & order insights"],
    icon: "bar-chart-3",
  },
  {
    title: "Inventory & Supply Management",
    description: "Operational tools for tracking ingredients, stock levels, suppliers, purchasing, recipes, wastage, and inventory across one or multiple branches.",
    points: ["Real-time inventory tracking", "Supplier & purchasing management", "Recipe, cost & wastage tracking"],
    icon: "boxes",
  },
  {
    title: "Multi-Branch Management",
    description: "Centralized management systems for restaurant groups that need unified control over multiple branches, menus, staff, inventory, orders, and performance.",
    points: ["Centralized branch dashboard", "Branch-level analytics", "Shared menus & operations"],
    icon: "network",
  },
  {
    title: "AI Restaurant Assistants",
    description: "Intelligent AI assistants that help restaurants answer customer questions, provide menu information, assist with reservations, and automate repetitive customer interactions.",
    points: ["24/7 customer assistance", "Menu & ingredient questions", "Reservation & ordering assistance"],
    icon: "bot",
  },
  {
    title: "WhatsApp AI Assistant",
    description: "Connect an AI-powered assistant to WhatsApp to handle restaurant enquiries, menu lookups, reservation assistance, order-related questions, and customer communication.",
    points: ["WhatsApp AI integration", "Automated customer replies", "Menu, ordering & reservation support"],
    icon: "message-circle-more",
  },
  {
    title: "WhatsApp Ordering & Automation",
    description: "Connect your restaurant's ordering journey with WhatsApp so customers can send detailed orders while your team can streamline communication and order handling.",
    points: ["Detailed WhatsApp orders", "Order notifications & updates", "Automated customer workflows"],
    icon: "message-square-dashed",
  },
  {
    title: "Modern Restaurant Websites",
    description: "Custom, responsive restaurant websites that showcase your brand, menu, locations, offers, and dining experience while connecting directly with your digital ordering ecosystem.",
    points: ["Custom restaurant branding", "Multi-location ready", "Responsive & conversion-focused design"],
    icon: "monitor-smartphone",
  },
  {
    title: "Gallery & Food Showcases",
    description: "High-impact visual experiences designed to showcase your food, interior, atmosphere, events, and overall restaurant identity.",
    points: ["High-speed image loading", "Lightbox gallery experiences", "Food & ambience showcases"],
    icon: "images",
  },
  {
    title: "Events & Announcements",
    description: "Digital experiences for promoting seasonal menus, special offers, private dining, events, launches, and restaurant announcements.",
    points: ["Announcement banners", "Special menu experiences", "Private event booking flows"],
    icon: "megaphone",
  },
  {
    title: "Local SEO & Google Visibility",
    description: "Technical and local search optimization designed to help restaurants appear when nearby customers search for food, restaurants, menus, and services.",
    points: ["Google Business optimization", "Local SEO & keywords", "Restaurant schema markup"],
    icon: "map-pinned",
  },
  {
    title: "Performance Optimization",
    description: "Speed-focused improvements designed to keep your websites and digital platforms fast, responsive, and reliable across devices and network conditions.",
    points: ["Advanced image optimization", "Core Web Vitals optimization", "Fast page & asset delivery"],
    icon: "zap",
  },
  {
    title: "Hosting & Deployment",
    description: "Complete technical setup covering hosting, deployment, custom domain connection, SSL configuration, production launch, and platform infrastructure.",
    points: ["Hosting setup", "Domain connection", "SSL configuration", "Production deployment", "Infrastructure management"],
    icon: "server-cog",
  },
  {
    title: "Website Maintenance & Support",
    description: "Ongoing technical and content support to keep your restaurant website and digital systems updated, secure, and running smoothly.",
    points: ["Menu, pricing & content updates", "Backups & health checks", "Security & technical support"],
    icon: "wrench",
  },
  {
    title: "Integrations & Custom Automation",
    description: "Connect your restaurant platform with external tools and build custom workflows that reduce manual work and improve operational efficiency.",
    points: ["Payment & third-party integrations", "Custom API integrations", "Automated business workflows"],
    icon: "workflow",
  },
];

export const websiteFeatures = [
  { title: "Interactive Menu Builder", description: "Easily structured content sections for food, drinks, and daily specials.", icon: "utensils-crossed" },
  { title: "Online Reservations", description: "Seamless integration with OpenTable, Resy, or custom calendar systems.", icon: "calendar" },
  { title: "AI Restaurant Assistant", description: "Smart chat receptionists to answer ingredients questions and assist with bookings 24/7.", icon: "bot" },
  { title: "Mobile-First Experience", description: "Perfect readability and navigation on smartphones, where 80%+ of guests find you.", icon: "smartphone" },
  { title: "Local SEO Schema", description: "Pre-configured Schema.json markup for menu items, opening hours, and location.", icon: "search-check" },
  { title: "Google Maps Integration", description: "Embedded, responsive maps to guide guests straight to your front door.", icon: "map-pinned" },
  { title: "Social Proof & Reviews", description: "Displays for Google Reviews, Yelp stars, and diner testimonials.", icon: "star" },
  { title: "Fast Performance", description: "Blazing-fast load times ensuring guests don't abandon your site before seeing the menu.", icon: "zap" },
  { title: "Food & Ambiance Gallery", description: "Beautiful lightbox grids to showcase your plating, interior design, and staff.", icon: "images" },
  { title: "Events & Announcements", description: "Banners and cards for wine nights, brunch specials, and holiday hours.", icon: "megaphone" },
  { title: "Secure Hosting & SSL", description: "Robust deployment on modern cloud networks keeping your site safe and online.", icon: "server-cog" },
  { title: "Self-Managed CMS", description: "Simple dashboard to change pricing, hours, or dishes in under two minutes.", icon: "layout-dashboard" },
  { title: "Newsletter Signups", description: "Integrated forms to grow your email list for marketing and announcements.", icon: "mail" },
  { title: "POS Integration", description: "Sync online orders and menu items directly with your supported POS system.", icon: "calculator" },
  { title: "Delivery & Rider Tracking", description: "Manage deliveries efficiently with a dedicated application for rider tracking.", icon: "bike" },
  { title: "Warehouse & Supply Management", description: "Keep track of inventory, suppliers, and procurement for your restaurant branches.", icon: "boxes" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Plan Selection",
    description: "We review your operational needs—from reservations to delivery—and select the best package for your restaurant.",
    bullets: ["Workflow assessment", "Package selection", "Feature mapping"],
  },
  {
    step: "02",
    title: "Onboarding & Dashboard Setup",
    description: "We set up your centralized dashboard and begin migrating your menu, pricing, and restaurant details.",
    bullets: ["Dashboard creation", "Menu migration", "Branch setup"],
  },
  {
    step: "03",
    title: "Design & Customization",
    description: "We apply a premium visual system tailored to your brand, ensuring it perfectly captures your dining atmosphere.",
    bullets: ["Visual branding", "Mobile optimization", "Layout customization"],
  },
  {
    step: "04",
    title: "AI & System Integration",
    description: "We connect the core components: online ordering, AI Receptionist, table management, and analytics.",
    bullets: ["Ordering flow", "AI Assistant setup", "Analytics tracking"],
  },
  {
    step: "05",
    title: "Testing & Handover",
    description: "We rigorously test ordering and booking flows and provide a quick walkthrough of your new centralized dashboard.",
    bullets: ["Usability testing", "Order flow checks", "Dashboard training"],
  },
  {
    step: "06",
    title: "Launch & Ongoing Support",
    description: "Your platform goes live in as little as 2 days, backed by our continuous hosting and technical support.",
    bullets: ["Domain connection", "Go-live", "Continuous support"],
  },
];

export const technologyGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend & CMS", items: ["Node.js", "Express.js", "REST APIs", "Sanity CMS", "Payload CMS", "Strapi", "WordPress API"] },
  { title: "Databases & Storage", items: ["MongoDB", "PostgreSQL", "Supabase", "Prisma ORM", "Redis"] },
  { title: "AI & Automation", items: ["Gemini AI", "OpenAI API", "AI Chat Assistants", "Automated Booking", "Dietary Analysis", "Customer Reply Bots"] },
  { title: "Tools & Integrations", items: ["Git", "GitHub", "Vercel", "Cloudflare", "Cloudinary", "OpenTable API", "Resy API", "Google Business Profile"] },
];

export const faqs = [
  {
    question: "How long does it take to launch my restaurant platform?",
    answer: "With our streamlined setup, we can launch your digital platform and website in as little as 2 to 7 days depending on your selected tier. Custom enterprise solutions typically take 1 to 2+ weeks.",
  },
  {
    question: "What is the difference between Managed Plans and One-Time Ownership?",
    answer: "Managed Plans (Monthly/Yearly) include zero upfront fees, cloud hosting, and ongoing technical support for as long as you are subscribed. One-Time Ownership means you pay a single fee to own the system outright, with self-managed hosting.",
  },
  {
    question: "Do you provide a dashboard to manage my restaurant?",
    answer: "Yes. Every package includes access to a centralized dashboard where you can manage your menus, track online and dine-in orders, control inventory, and monitor analytics all from one screen.",
  },
  {
    question: "Does your system handle online delivery and takeaway orders?",
    answer: "Absolutely. The platform features native cart functionality, product modifiers, and a direct ordering flow. You receive delivery and takeaway requests straight into your dashboard or via WhatsApp.",
  },
  {
    question: "Can I get a custom mobile app for my restaurant?",
    answer: "Yes, we offer fully branded, cross-platform iOS and Android customer apps. These apps sync directly with your restaurant's core management system to offer push notifications and loyalty features.",
  },
];

export const leftFaqs = [
  {
    question: "Can your system handle multiple restaurant branches?",
    answer: "Yes. Our Growth, Scale AI, and Custom packages support multi-branch management. You can control branch-specific menus, process orders per location, and view centralized analytics.",
  },
  {
    question: "What does the AI Restaurant Assistant do?",
    answer: "The AI assistant acts as a 24/7 receptionist. It answers guest queries regarding business hours, location, and menu ingredients, while intelligently guiding them to book tables or place orders.",
  },
  {
    question: "Are there any hidden costs or setup fees?",
    answer: "No. If you choose our Managed Monthly or Yearly plans, there are zero upfront setup fees. You simply pay the subscription rate to keep your platform active, hosted, and fully supported.",
  },
];

export const pricingPackages = [
  {
    name: "Launch",
    timeline: "2–4 Days",
    platforms: {
      website: {
        price: "PKR 3,999",
        priceSuffix: "/mo",
        originalPrice: "PKR 5,000",
        pricingOptions: {
          monthly: { price: "PKR 3,999", suffix: "/mo", originalPrice: "PKR 5,000", lockedForLife: true },
          yearly: { price: "PKR 43,200", suffix: "/year", originalPrice: "PKR 60,000", monthlyEquivalent: "≈ PKR 3,600/month", note: "SAVE PKR 4,788/YEAR", lockedForLife: true },
          onetime: { price: "PKR 120,000", suffix: "", oneTimeOwnership: true }
        },
        summary: "Get your restaurant online with a professional website, digital menu, direct ordering, reservations, and essential customer features.",
        includes: [
          "Restaurant Website",
          "Interactive Menu",
          "Online Ordering",
          "Reservation System",
          "WhatsApp Integration",
          "Google Maps & Reviews",
          "Basic Admin Panel",
          "Single Branch",
          "Local SEO Setup",
          "Performance Optimization",
          "Hosting & Deployment",
          "30 Days Post-Launch Support"
        ],
        modalDetails: [
          {
            category: "Website",
            features: ["Custom restaurant website", "Home", "Menu", "Offers", "About", "Gallery", "Reservation", "Contact", "Cart & Order pages"]
          },
          {
            category: "Menu",
            features: ["Categories", "Food images", "Prices", "Descriptions", "Basic availability"]
          },
          {
            category: "Ordering",
            features: ["Online ordering", "Cart", "Checkout", "Delivery or takeaway selection"]
          },
          {
            category: "Reservations",
            features: ["Reservation form", "Guest information", "Date & time selection"]
          },
          {
            category: "Admin",
            features: ["Menu management", "Price updates", "Offers", "Basic order viewing", "Website content updates"]
          },
          {
            category: "Integrations",
            features: ["WhatsApp", "Google Maps", "Google Reviews"]
          },
          {
            category: "SEO & Performance",
            features: ["Mobile-first design", "Image optimization", "Technical SEO setup", "Restaurant structured data", "Performance optimization"]
          },
          {
            category: "Deployment",
            features: ["Hosting setup", "SSL", "Domain connection", "Production deployment", "Single-branch configuration"]
          },
          {
            category: "Support",
            features: ["30 days post-launch support on one-time plans", "Ongoing support while subscribed on managed plans"]
          }
        ]
      },
      website_app: {
        price: "PKR 7,999",
        priceSuffix: "/mo",
        originalPrice: "PKR 10,000",
        pricingOptions: {
          monthly: { price: "PKR 7,999", suffix: "/mo", originalPrice: "PKR 10,000", lockedForLife: true },
          yearly: { price: "PKR 86,400", suffix: "/year", originalPrice: "PKR 120,000", monthlyEquivalent: "≈ PKR 7,200/month", note: "SAVE PKR 9,588/YEAR", lockedForLife: true },
          onetime: { price: "PKR 240,000", suffix: "", oneTimeOwnership: true }
        },
        summary: "Get your restaurant online with a professional website, digital menu, direct ordering, reservations, and essential customer features.",
        includes: [
          "Restaurant Website",
          "Interactive Menu",
          "Online Ordering",
          "Reservation System",
          "WhatsApp Integration",
          "Google Maps & Reviews",
          "Basic Admin Panel",
          "Single Branch",
          "Local SEO Setup",
          "Performance Optimization",
          "Hosting & Deployment",
          "Branded Customer App",
          "Customer Account",
          "Mobile Ordering",
          "Order History",
          "Order Status",
          "Push Notifications",
          "App Deployment Support",
          "30 Days Post-Launch Support"
        ],
        modalDetails: [
          {
            category: "Website",
            features: ["Custom restaurant website", "Home", "Menu", "Offers", "About", "Gallery", "Reservation", "Contact", "Cart & Order pages"]
          },
          {
            category: "Menu",
            features: ["Categories", "Food images", "Prices", "Descriptions", "Basic availability"]
          },
          {
            category: "Ordering",
            features: ["Online ordering", "Cart", "Checkout", "Delivery or takeaway selection"]
          },
          {
            category: "Reservations",
            features: ["Reservation form", "Guest information", "Date & time selection"]
          },
          {
            category: "Admin",
            features: ["Menu management", "Price updates", "Offers", "Basic order viewing", "Website content updates"]
          },
          {
            category: "Integrations",
            features: ["WhatsApp", "Google Maps", "Google Reviews"]
          },
          {
            category: "Mobile App — Website + App",
            features: ["Branded customer app", "Menu", "Online ordering", "Customer account", "Order history", "Order status", "Push notifications", "API connection to restaurant platform", "Deployment assistance"]
          },
          {
            category: "SEO & Performance",
            features: ["Mobile-first design", "Image optimization", "Technical SEO setup", "Restaurant structured data", "Performance optimization"]
          },
          {
            category: "Deployment",
            features: ["Hosting setup", "SSL", "Domain connection", "Production deployment", "Single-branch configuration"]
          },
          {
            category: "Support",
            features: ["30 days post-launch support on one-time plans", "Ongoing support while subscribed on managed plans"]
          }
        ]
      }
    }
  },
  {
    name: "Growth",
    featured: true,
    timeline: "4–7 Days",
    platforms: {
      website: {
        price: "PKR 7,999",
        priceSuffix: "/mo",
        originalPrice: "PKR 10,000",
        pricingOptions: {
          monthly: { price: "PKR 7,999", suffix: "/mo", originalPrice: "PKR 10,000", lockedForLife: true },
          yearly: { price: "PKR 86,400", suffix: "/year", originalPrice: "PKR 120,000", monthlyEquivalent: "≈ PKR 7,200/month", note: "SAVE PKR 9,588/YEAR", lockedForLife: true },
          onetime: { price: "PKR 240,000", suffix: "", oneTimeOwnership: true }
        },
        summary: "Turn your digital presence into a connected restaurant platform for ordering, POS, kitchen operations, customer management, delivery, and growth.",
        includes: [
          "Everything in Launch, plus:",
          "Restaurant Management Dashboard",
          "POS",
          "Kitchen Display System",
          "Dine-In & Table Management",
          "Takeaway Management",
          "Delivery Management",
          "QR Table Ordering",
          "AI Restaurant Chatbot",
          "WhatsApp Ordering",
          "Customer CRM",
          "Analytics & Tracking",
          "Promotions & Offers",
          "Up to 5 Branches",
          "Advanced Local SEO",
          "Hosting & Deployment",
          "Ongoing Support on Managed Plans"
        ],
        modalDetails: [
          {
            category: "Restaurant Operations",
            features: ["Centralized restaurant dashboard", "POS", "Dine-in orders", "Takeaway orders", "Delivery orders", "Table management", "Kitchen Display System", "Order status management"]
          },
          {
            category: "Online Ordering",
            features: ["Delivery ordering", "Takeaway ordering", "Cart & checkout", "Product modifiers", "Order tracking", "WhatsApp ordering"]
          },
          {
            category: "Dine-In",
            features: ["Table management", "Table-specific QR ordering", "Open table orders", "Guest management", "Basic bill management"]
          },
          {
            category: "AI Assistant",
            features: ["Restaurant chatbot", "Menu questions", "Ingredient questions", "Opening hours", "Location assistance", "Reservation assistance", "Basic ordering guidance"]
          },
          {
            category: "Customer Management",
            features: ["Customer profiles", "Order history", "Customer activity", "Repeat customer tracking", "Basic segmentation"]
          },
          {
            category: "Analytics",
            features: ["Revenue", "Orders", "Average order value", "Product performance", "Order sources", "Branch performance", "Customer insights"]
          },
          {
            category: "Marketing",
            features: ["Promotions", "Discount codes", "Offers", "Customer re-engagement"]
          },
          {
            category: "Branches",
            features: ["Up to 5 branches", "Branch-level menus", "Branch orders", "Branch analytics", "Branch information"]
          },
          {
            category: "SEO & Performance",
            features: ["Advanced local SEO", "Restaurant schema", "Google visibility setup", "Image/code optimization", "Performance optimization"]
          },
          {
            category: "Deployment & Support",
            features: ["Hosting", "SSL", "Deployment", "Monitoring", "Technical maintenance", "Ongoing support while subscribed"]
          }
        ]
      },
      website_app: {
        price: "PKR 14,999",
        priceSuffix: "/mo",
        originalPrice: "PKR 18,000",
        pricingOptions: {
          monthly: { price: "PKR 14,999", suffix: "/mo", originalPrice: "PKR 18,000", lockedForLife: true },
          yearly: { price: "PKR 161,988", suffix: "/year", originalPrice: "PKR 180,000", monthlyEquivalent: "≈ PKR 13,499/month", note: "SAVE PKR 18,000/YEAR", lockedForLife: true },
          onetime: { price: "Starting from PKR 450,000", suffix: "", oneTimeOwnership: true }
        },
        summary: "Turn your digital presence into a connected restaurant platform for ordering, POS, kitchen operations, customer management, delivery, and growth.",
        includes: [
          "Everything in Launch, plus:",
          "Restaurant Management Dashboard",
          "POS",
          "Kitchen Display System",
          "Dine-In & Table Management",
          "Takeaway Management",
          "Delivery Management",
          "QR Table Ordering",
          "AI Restaurant Chatbot",
          "WhatsApp Ordering",
          "Customer CRM",
          "Analytics & Tracking",
          "Promotions & Offers",
          "Up to 5 Branches",
          "Advanced Local SEO",
          "Hosting & Deployment",
          "Branded Customer App",
          "Customer Login",
          "Online Ordering",
          "Order History",
          "Order Status",
          "Push Notifications",
          "Reservation Access",
          "Loyalty Features where applicable",
          "App-to-platform integration",
          "App deployment support",
          "Ongoing Support on Managed Plans"
        ],
        modalDetails: [
          {
            category: "Restaurant Operations",
            features: ["Centralized restaurant dashboard", "POS", "Dine-in orders", "Takeaway orders", "Delivery orders", "Table management", "Kitchen Display System", "Order status management"]
          },
          {
            category: "Online Ordering",
            features: ["Delivery ordering", "Takeaway ordering", "Cart & checkout", "Product modifiers", "Order tracking", "WhatsApp ordering"]
          },
          {
            category: "Dine-In",
            features: ["Table management", "Table-specific QR ordering", "Open table orders", "Guest management", "Basic bill management"]
          },
          {
            category: "AI Assistant",
            features: ["Restaurant chatbot", "Menu questions", "Ingredient questions", "Opening hours", "Location assistance", "Reservation assistance", "Basic ordering guidance"]
          },
          {
            category: "Customer Management",
            features: ["Customer profiles", "Order history", "Customer activity", "Repeat customer tracking", "Basic segmentation"]
          },
          {
            category: "Analytics",
            features: ["Revenue", "Orders", "Average order value", "Product performance", "Order sources", "Branch performance", "Customer insights"]
          },
          {
            category: "Marketing",
            features: ["Promotions", "Discount codes", "Offers", "Customer re-engagement"]
          },
          {
            category: "Branches",
            features: ["Up to 5 branches", "Branch-level menus", "Branch orders", "Branch analytics", "Branch information"]
          },
          {
            category: "Mobile App — Website + App",
            features: ["Branded iOS & Android customer app", "Customer accounts", "Online ordering", "Order history", "Order status", "Push notifications", "Reservation access", "Loyalty access where applicable", "API integration", "Deployment assistance"]
          },
          {
            category: "SEO & Performance",
            features: ["Advanced local SEO", "Restaurant schema", "Google visibility setup", "Image/code optimization", "Performance optimization"]
          },
          {
            category: "Deployment & Support",
            features: ["Hosting", "SSL", "Deployment", "Monitoring", "Technical maintenance", "Ongoing support while subscribed"]
          }
        ]
      }
    }
  },
  {
    name: "Custom",
    timeline: "1–2+ Weeks",
    platforms: {
      website: {
        price: "Custom Quote",
        priceSuffix: "",
        pricingOptions: null,
        summary: "Build a complete restaurant operating platform around your exact workflows, branches, integrations, automation, and business requirements.",
        includes: [
          "Everything in Growth, plus:",
          "Advanced Restaurant Management System",
          "Multi-Branch Management",
          "Advanced POS",
          "Advanced KDS",
          "Advanced Delivery Operations",
          "Inventory & Ingredient Management",
          "Supplier & Purchasing Management",
          "Advanced Customer CRM",
          "Loyalty & Rewards",
          "Advanced Analytics",
          "AI Business Insights",
          "Advanced AI Restaurant Assistant",
          "Custom Automation",
          "Payment Gateway Integration",
          "Deep POS Integrations",
          "Custom API Integrations",
          "Advanced Promotions",
          "Custom Reports",
          "Custom Business Workflows"
        ],
        modalDetails: [
          {
            category: "Advanced Operations",
            features: ["Advanced POS", "Advanced order workflows", "Advanced KDS", "Advanced dine-in operations", "Advanced delivery", "Rider workflows", "Multi-location operations"]
          },
          {
            category: "Multi-Branch",
            features: ["Multiple branches", "Centralized management", "Branch controls", "Centralized menus", "Branch analytics", "Shared operational data"]
          },
          {
            category: "Inventory",
            features: ["Ingredient tracking", "Recipe management", "Stock levels", "Reorder points", "Supplier management", "Purchasing", "Wastage", "Inventory reports"]
          },
          {
            category: "Customer Management",
            features: ["Advanced customer profiles", "Order history", "Customer segmentation", "Loyalty", "Rewards", "Retention workflows", "Customer insights"]
          },
          {
            category: "AI & Automation",
            features: ["Advanced AI assistant", "AI ordering workflows", "AI business insights", "Automated customer workflows", "Custom business automation", "Custom AI logic"]
          },
          {
            category: "Payments & Integrations",
            features: ["JazzCash", "Easypaisa", "Card/payment gateways", "Supported POS integrations", "Custom APIs", "Third-party services"]
          },
          {
            category: "Analytics",
            features: ["Advanced revenue analytics", "Product performance", "Customer analytics", "Branch analytics", "Order-source analytics", "Conversion tracking", "Custom reporting"]
          },
          {
            category: "Promotions",
            features: ["Advanced offers", "Campaigns", "Coupon rules", "Branch-specific promotions", "Customer-targeted promotions"]
          },
          {
            category: "Custom Development",
            features: ["Custom workflows", "Custom dashboards", "Custom modules", "Custom integrations"]
          },
          {
            category: "Performance & Deployment",
            features: ["Advanced performance optimization", "Production infrastructure", "Hosting", "Deployment", "Monitoring", "Security configuration"]
          },
          {
            category: "Support",
            features: ["Custom support arrangement based on scope and managed plan"]
          }
        ]
      },
      website_app: {
        price: "Custom Quote",
        priceSuffix: "",
        pricingOptions: null,
        summary: "Build a complete restaurant operating platform around your exact workflows, branches, integrations, automation, and business requirements.",
        includes: [
          "Everything in Growth, plus:",
          "Advanced Restaurant Management System",
          "Multi-Branch Management",
          "Advanced POS",
          "Advanced KDS",
          "Advanced Delivery Operations",
          "Inventory & Ingredient Management",
          "Supplier & Purchasing Management",
          "Advanced Customer CRM",
          "Loyalty & Rewards",
          "Advanced Analytics",
          "AI Business Insights",
          "Advanced AI Restaurant Assistant",
          "Custom Automation",
          "Payment Gateway Integration",
          "Deep POS Integrations",
          "Custom API Integrations",
          "Advanced Promotions",
          "Custom Reports",
          "Custom Business Workflows",
          "Fully branded customer app",
          "Advanced ordering",
          "Customer accounts",
          "Push notifications",
          "Loyalty",
          "Reservations",
          "Delivery tracking where applicable",
          "Payment integration",
          "Custom app workflows",
          "Advanced API integration",
          "App Store & Google Play deployment",
          "App-specific analytics"
        ],
        modalDetails: [
          {
            category: "Advanced Operations",
            features: ["Advanced POS", "Advanced order workflows", "Advanced KDS", "Advanced dine-in operations", "Advanced delivery", "Rider workflows", "Multi-location operations"]
          },
          {
            category: "Multi-Branch",
            features: ["Multiple branches", "Centralized management", "Branch controls", "Centralized menus", "Branch analytics", "Shared operational data"]
          },
          {
            category: "Inventory",
            features: ["Ingredient tracking", "Recipe management", "Stock levels", "Reorder points", "Supplier management", "Purchasing", "Wastage", "Inventory reports"]
          },
          {
            category: "Customer Management",
            features: ["Advanced customer profiles", "Order history", "Customer segmentation", "Loyalty", "Rewards", "Retention workflows", "Customer insights"]
          },
          {
            category: "AI & Automation",
            features: ["Advanced AI assistant", "AI ordering workflows", "AI business insights", "Automated customer workflows", "Custom business automation", "Custom AI logic"]
          },
          {
            category: "Payments & Integrations",
            features: ["JazzCash", "Easypaisa", "Card/payment gateways", "Supported POS integrations", "Custom APIs", "Third-party services"]
          },
          {
            category: "Analytics",
            features: ["Advanced revenue analytics", "Product performance", "Customer analytics", "Branch analytics", "Order-source analytics", "Conversion tracking", "Custom reporting"]
          },
          {
            category: "Promotions",
            features: ["Advanced offers", "Campaigns", "Coupon rules", "Branch-specific promotions", "Customer-targeted promotions"]
          },
          {
            category: "Mobile App",
            features: ["Custom iOS & Android application", "Advanced ordering", "Customer accounts", "Loyalty", "Push notifications", "Reservations", "Delivery features", "Payments", "Custom workflows", "Advanced API integration"]
          },
          {
            category: "Custom Development",
            features: ["Custom workflows", "Custom dashboards", "Custom modules", "Custom integrations", "Custom app functionality"]
          },
          {
            category: "Performance & Deployment",
            features: ["Advanced performance optimization", "Production infrastructure", "Hosting", "Deployment", "Monitoring", "Security configuration"]
          },
          {
            category: "Support",
            features: ["Custom support arrangement based on scope and managed plan"]
          }
        ]
      }
    }
  }
];
export const contactFaqs = [
  {
    question: "What happens after I request a demo or consultation?",
    answer: "We will review your requirements and schedule a brief discovery call to demonstrate how our restaurant platform, AI tools, and dashboard can streamline your operations and drive online sales.",
  },
  {
    question: "Can you migrate our existing menu and data?",
    answer: "Yes. Our onboarding team can help migrate your existing menu items, prices, and high-quality photography directly into the new dashboard so you can launch effortlessly.",
  },
  {
    question: "Do you build platforms for single-location restaurants or food trucks?",
    answer: "Yes. We design and build systems for operations of all sizes—whether you're a single neighborhood bistro, a local food truck, or an expansive multi-location franchise.",
  },
];

export const aboutValues = [
  "Culinary storytelling that translates your physical atmosphere to the screen.",
  "Mobile performance that ensures guests can view your menu instantly anywhere.",
  "Seamless automated systems that keep your tables filled without distracting your team.",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "hambrg",
    title: "Hambrg",
    category: "Restaurant",
    clientType: "Fast Food",
    shortDescription: "A dynamic fast-food restaurant website emphasizing quick service, signature burgers, and a seamless online ordering experience.",
    overview: "Hambrg needed a high-energy platform to communicate their dynamic menu, facilitate quick orders, and highlight their signature burgers.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Online Ordering", "Performance"],
    features: ["Dynamic menu", "Online ordering flow", "Mobile-optimized experience", "Fast load times"],
    image: "/images/Hambrg-fastfoods.png",
    imageAlt: "Hambrg website preview showing fast food and signature burgers.",
    liveHref: "https://hambrg.vercel.app/",
    performance: "98/100 Core Web Vitals score",
    results: ["Increased online orders", "Improved menu loading speed", "Streamlined mobile experience"],
    challenge: "Structuring a fast-food menu in a way that remains incredibly fast and readable on mobile devices.",
    goals: ["Optimize menu readability", "Drive online pickup orders", "Enhance user experience"],
    design: "Vibrant, energetic design with bold colors and clear navigation for quick ordering.",
    development: "Focus placed on optimizing image delivery for fast performance and building a seamless ordering experience.",
  },
  {
    slug: "cs-fire-burgers",
    title: "CS-Fire Burgers",
    category: "Restaurant",
    clientType: "Fast Food",
    shortDescription: "A vibrant burger joint website showcasing mouth-watering burgers, exclusive deals, and a fiery brand identity.",
    overview: "CS-Fire Burgers required a bold digital presence to match their fiery brand and showcase their premium burger offerings.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Animations", "Performance"],
    features: ["Bold visual galleries", "Online menu", "Special offers", "Mobile-first design"],
    image: "/images/CS-Fire-burgers.png",
    imageAlt: "CS-Fire Burgers website preview highlighting fiery burgers and deals.",
    liveHref: "https://CS-Fire.vercel.app",
    performance: "97/100 Core Web Vitals score",
    results: ["Increased customer engagement", "Higher deal conversions", "Stronger brand identity"],
    challenge: "Translating a bold, fiery physical brand into an engaging digital platform.",
    goals: ["Showcase premium burgers", "Highlight special deals", "Elevate digital brand perception"],
    design: "Bold, fiery aesthetics with dynamic layouts and high-contrast imagery.",
    development: "Implemented fast-loading visual assets to maintain performance while delivering a rich, energetic experience.",
  },
  {
    slug: "bonfire-pizza",
    title: "Bonfire Pizza",
    category: "Restaurant",
    clientType: "Pizzeria",
    shortDescription: "A cozy and engaging pizzeria website featuring wood-fired pizzas, customizable orders, and a warm dining atmosphere.",
    overview: "Bonfire Pizza sought an online presence that mirrored their warm, rustic ambiance, focusing on visual allure and easy ordering.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Ordering System", "SEO"],
    features: ["Customizable pizza menu", "Seamless order flow", "Rustic visual design", "Local SEO optimization"],
    image: "/images/Bonfire-pizza.png",
    imageAlt: "Bonfire Pizza website preview showing wood-fired pizzas and rustic design.",
    liveHref: "https://Bonfire-pizza.vercel.app",
    performance: "96/100 Core Web Vitals score",
    results: ["Higher local search visibility", "Increased online orders", "Stronger brand positioning"],
    challenge: "Creating a warm, rustic atmosphere digitally while maintaining a fast and intuitive ordering process.",
    goals: ["Capture the cozy dining atmosphere", "Drive online orders", "Enhance local SEO"],
    design: "Warm, inviting colors paired with rustic textures and clear categorical navigation.",
    development: "Built a flexible menu architecture allowing customers to easily customize their pizzas online.",
  },
  {
    slug: "savor-fine-dining",
    title: "Savor Fine Dining",
    category: "Restaurant",
    clientType: "Fine Dining",
    shortDescription: "An exquisite fine dining website designed to showcase a premium culinary experience, reservations, and elegant ambiance.",
    overview:
      "Savor Fine Dining required a highly sophisticated online presence that reflects the artistry of their dishes and simplifies the booking process for their exclusive clientele.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Animations", "Reservation API"],
    features: ["Immersive visual galleries", "Streamlined reservation flow", "Seasonal menu showcases", "Mobile-optimized experience"],
    image: "/images/Savorfinedining.avif",
    imageAlt: "Savor Fine Dining website preview showing elegant culinary presentations and reservation features.",
    liveHref: "https://savordining.vercel.app",
    performance: "100/100 Core Web Vitals score",
    results: ["Increased exclusive table bookings", "Enhanced digital brand elegance", "Frictionless mobile reservations"],
    challenge: "Translating a high-end physical dining experience into a fast, visually stunning digital platform.",
    goals: ["Showcase culinary artistry", "Streamline VIP reservations", "Elevate digital brand perception"],
    design: "Elegant, minimalist layout with high-resolution imagery and sophisticated typography to reflect a premium atmosphere.",
    development:
      "Built with a focus on performance and smooth transitions, integrating a seamless booking API while maintaining flawless Core Web Vitals.",
  },
  {
    slug: "the-loch-and-the-tyne",
    title: "The Loch & the Tyne",
    category: "Restaurant",
    clientType: "Gastropub",
    shortDescription: "A quintessentially British gastropub website showcasing seasonal menus, private events, and a refined countryside dining experience.",
    overview:
      "The Loch & the Tyne required a sophisticated digital presence to highlight their sustainable British cuisine, showcase their regularly changing seasonal menus, and facilitate seamless reservations for their quintessential gastropub.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Booking API", "Performance"],
    features: ["Seasonal menu showcases", "Private event booking", "Online shop integration", "Mobile-optimized experience"],
    image: "/images/the_loch_and_tyne.avif",
    imageAlt: "The Loch & the Tyne website preview showing elegant British gastropub cuisine and dining spaces.",
    liveHref: "https://the-loch-the-tyne.vercel.app/",
    performance: "100/100 Core Web Vitals score",
    results: ["Increased private dining bookings", "Streamlined reservation flow", "Elevated digital brand experience"],
    challenge: "Translating a refined, sustainable countryside gastropub experience into a modern, fast digital platform.",
    goals: ["Highlight sustainable British cuisine", "Streamline reservations and private events", "Enhance online shop visibility"],
    design: "Refined, rustic elegance paired with high-quality culinary photography to reflect the gastropub's atmosphere.",
    development:
      "Built with a focus on seamless navigation between menus, events, and their online shop, maintaining high performance and clear typography.",
  },
  {
    slug: "voila-cafe",
    title: "Voila Cafe",
    category: "Restaurant",
    clientType: "Cafe & Coffee Shop",
    shortDescription: "An elegant cafe website highlighting artisanal coffee, fresh pastries, and a relaxing environment.",
    overview: "Voila Cafe needed a digital platform to convey their relaxing environment, showcase their artisanal coffee, and promote their pastries.",
    industry: "Cafe",
    technologies: ["Next.js", "Tailwind CSS", "Animations", "Performance"],
    features: ["Elegant menu presentation", "Cozy ambiance showcase", "Mobile-optimized layout", "Smooth scroll animations"],
    image: "/images/Voila-Cafe.png",
    imageAlt: "Voila Cafe website preview showing artisanal coffee and a relaxing ambiance.",
    liveHref: "https://Voilapeshawar.vercel.app",
    performance: "99/100 Core Web Vitals score",
    results: ["Increased foot traffic", "Higher engagement on social media", "Elevated digital brand experience"],
    challenge: "Translating a relaxing, elegant cafe experience into a fast, visually stunning digital platform.",
    goals: ["Highlight artisanal offerings", "Convey a cozy atmosphere", "Improve mobile accessibility"],
    design: "Minimalist, elegant layout with soft colors and high-resolution imagery to reflect a calming atmosphere.",
    development: "Built with a focus on performance and smooth transitions to create a relaxing browsing experience.",
  },
  {
    slug: "chomp-chomp-restaurant",
    title: "Chomp Chomp",
    category: "Restaurant",
    clientType: "Casual Dining",
    shortDescription: "A vibrant casual dining website offering an extensive menu, exciting promotions, and a family-friendly atmosphere.",
    overview: "Chomp Chomp required a colorful and engaging online presence to showcase their extensive menu and attract families and groups.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Dynamic Menu", "SEO"],
    features: ["Extensive categorized menu", "Promotional banners", "Family-friendly design", "Fast performance"],
    image: "/images/Chomp-Chomp-Restaurant.png",
    imageAlt: "Chomp Chomp Restaurant website preview highlighting a vibrant casual dining experience.",
    liveHref: "https://Chomp-Chomp.vercel.app",
    performance: "95/100 Core Web Vitals score",
    results: ["Increased family bookings", "Higher engagement with promotions", "Improved menu discoverability"],
    challenge: "Organizing a large, diverse menu in a way that is engaging and easy to navigate on all devices.",
    goals: ["Showcase the extensive menu", "Highlight family-friendly appeal", "Promote special offers"],
    design: "Bright, playful aesthetics with clear navigation and dynamic layouts to capture the casual dining vibe.",
    development: "Focused on optimizing a large number of images and ensuring the categorized menu loads instantly.",
  },
  {
    slug: "four-seasons",
    title: "Four Seasons",
    category: "Hotels",
    clientType: "Luxury Hospitality",
    shortDescription: "A luxury hospitality website focusing on high-end hotel reservations, private jet experiences, and exclusive vacation rentals.",
    overview:
      "Four Seasons needed an uncompromisingly premium digital experience that reflects their standard of luxury and facilitates high-value bookings.",
    industry: "Hotels",
    technologies: ["Next.js", "Tailwind CSS", "Booking API", "Performance"],
    features: ["Global property search", "High-value booking flow", "Private jet inquiries", "Immersive video headers"],
    image: "/images/fourseason.avif",
    imageAlt: "Four Seasons luxury hospitality website preview showing exclusive properties, booking interfaces, and premium visuals.",
    liveHref: "https://www.fourseasons.com/",
    performance: "99/100 Core Web Vitals score",
    results: ["Increased direct bookings", "Higher engagement on premium experiences", "Elevated digital brand perception"],
    challenge: "Balancing high-resolution, immersive visual assets with strict performance requirements for global accessibility.",
    goals: ["Increase high-end direct bookings", "Showcase exclusive experiences", "Deliver a flawless mobile booking flow"],
    design: "Minimalist, elegant interface that steps back to let the breathtaking property photography take center stage.",
    development:
      "Implemented advanced edge caching and image optimization to ensure lightning-fast load times regardless of the user's global location.",
  },
  {
    slug: "restaurant-ai-receptionist-chatbot",
    title: "Restaurant AI Assistant",
    category: "Restaurant",
    clientType: "Restaurant AI Integration",
    shortDescription: "An intelligent AI receptionist chatbot designed to automate restaurant reservations, menu inquiries, and guest support.",
    overview:
      "An interactive restaurant assistant demonstration showcasing how custom LLM integrations can answer guest inquiries about ingredients, dietary constraints, parking, and reservation availability 24/7.",
    industry: "AI Receptionist",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Gemini AI", "Tailwind CSS"],
    features: ["Custom reservation flow", "Allergen & menu FAQ search", "SMS/Email notifications", "Interactive chat sandbox"],
    image: "/images/Multi-vertical-Ai-receptionist-chatbot.avif",
    imageAlt: "Restaurant AI Assistant preview showing active chat window answering menu questions.",
    liveHref: "https://multireceptionai.vercel.app/",
    performance: "100/100 Core Web Vitals score",
    results: ["Zero missed reservation inquiries", "Instant responses to guest questions", "Reduced host phone time"],
    challenge: "Providing precise details on menu ingredients and seating availability without human intervention during busy kitchen hours.",
    goals: ["Provide instant guest support", "Qualify reservation inquiries", "Increase table booking efficiency"],
    design: "Clean, dark-mode messaging interface with easy quick-reply buttons for reservations, hours, and menu.",
    development:
      "Developed with a responsive React frontend, Express/Node backend, and direct integration with Gemini AI API for structured menu and booking responses.",
  }
];

export const portfolioFilters = [
  "All",
  "Restaurant",
  "Hotels",
  "Bar",
] as const;
