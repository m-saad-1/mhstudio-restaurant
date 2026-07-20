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
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
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
];

export const serviceSections = [
  {
    title: "Modern Restaurant Websites",
    description: "Custom, responsive website builds that showcase your brand, dining experience, and locations.",
    points: ["Brand story layout", "Multi-location ready", "Fluid responsive design"],
    icon: "monitor-smartphone",
  },
  {
    title: "Interactive Online Menus",
    description: "Fast, mobile-optimized digital menus that make browsing dishes and pricing effortless for guests.",
    points: ["Category navigation", "Dietary filters (e.g., Vegan, GF)", "Dynamic price updates"],
    icon: "utensils-crossed",
  },
  {
    title: "Online Reservation Systems",
    description: "Easy connection to OpenTable, Resy, or custom reservation flows to keep tables booked.",
    points: ["Direct platform widgets", "Custom booking inquiry forms", "Reservation FAQs"],
    icon: "calendar",
  },
  {
    title: "AI Restaurant Assistants",
    description: "Intelligent chat and WhatsApp AI assistants to answer ingredient FAQs, automate customer replies, and assist with bookings 24/7.",
    points: ["WhatsApp AI integration", "Automated booking support", "Menu FAQ responses"],
    icon: "bot",
  },
  {
    title: "WhatsApp AI Assistant",
    description: "Connect a custom AI assistant directly to your WhatsApp to handle reservation assistance, menu lookups, and customer queries.",
    points: ["WhatsApp API integration", "Automated customer replies", "Menu & ingredient support"],
    icon: "message-circle-more",
  },
  {
    title: "Gallery & Food Showcases",
    description: "Stunning food photography and interior gallery layouts designed to captivate guests.",
    points: ["High-speed image loading", "Lightbox gallery overlays", "Ambiance highlight reels"],
    icon: "images",
  },
  {
    title: "Events & Announcements",
    description: "Promote holiday menus, wine tastings, private dining options, and local events.",
    points: ["Announcement banners", "Special menu builders", "Private event booking flows"],
    icon: "megaphone",
  },
  {
    title: "Local SEO & Map Rankings",
    description: "Technical search optimization so your restaurant shows up first when customers search nearby.",
    points: ["Google Business optimization", "Schema markup for menus/hours", "Local keyword targeting"],
    icon: "map-pinned",
  },
  {
    title: "Performance Optimization",
    description: "Speed-focused improvements ensuring your pages load instantly even on cellular data.",
    points: ["95+ Core Web Vitals score", "Advanced image compression", "Instant page transitions"],
    icon: "zap",
  },
  {
    title: "Hosting & Deployment",
    description: "Complete hosting setup, custom domain routing, SSL certificate configuration, production launch, and dedicated post-launch support.",
    points: ["Hosting setup", "Domain connection", "Deployment", "SSL configuration", "Production launch", "Post-launch support"],
    icon: "server-cog",
  },
  {
    title: "Website Maintenance & Support",
    description: "Ongoing support to update your menus, pricing, hours, and announcements without delay.",
    points: ["Same-day content updates", "Regular backups & health checks", "Security monitoring"],
    icon: "wrench",
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
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your brand, menu specialties, location, and guest booking goals.",
    bullets: ["Restaurant goals", "Guest profile", "Brand identity"],
  },
  {
    step: "02",
    title: "Planning",
    description: "We structure the online menu, reservation paths, and map out location pages.",
    bullets: ["Menu architecture", "Booking flows", "CTA placements"],
  },
  {
    step: "03",
    title: "Design",
    description: "We create a premium visual system that highlights your dishes and captures your dining room ambiance.",
    bullets: ["Visual branding", "Food photography prep", "Mobile menu layout"],
  },
  {
    step: "04",
    title: "Development",
    description: "We build your custom responsive pages, optimize images, and integrate booking systems.",
    bullets: ["Fast-loading menus", "Third-party bookings", "Local SEO structure"],
  },
  {
    step: "05",
    title: "Testing",
    description: "We test menu interactions, booking flows, page performance, and mobile layout.",
    bullets: ["Menu usability test", "Booking checks", "Performance optimization"],
  },
  {
    step: "06",
    title: "Launch",
    description: "Your site goes live with Google Maps sync, analytics, and self-managed menu support.",
    bullets: ["Domain connection", "Analytics setup", "Dashboard handover"],
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
    question: "How long does a restaurant website take?",
    answer:
      "A standard restaurant website takes 2-4 weeks, while larger groups requiring multi-location support or advanced AI reservation features take 4-6 weeks.",
  },
  {
    question: "Can you redesign our existing restaurant website?",
    answer:
      "Yes. We can update outdated designs, optimize your menu for mobile viewing, and migrate you to a faster, modern stack to improve reservation conversion rates.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Absolutely. We offer ongoing maintenance packages to handle regular menu changes, holiday hours, price updates, and technical performance checks.",
  },
  {
    question: "Will I be able to manage the platform after launch?",
    answer:
      "Yes. We provide a simple, intuitive custom dashboard so you or your staff can update menu items, prices, photos, and announce special events in minutes.",
  },
  {
    question: "Do you handle hosting and cloud deployment?",
    answer:
      "Yes. We set up fast, secure, and production-ready hosting environments on modern networks like Vercel and Cloudflare, complete with SSL certificates.",
  },
  {
    question: "How do you ensure the product performs well?",
    answer:
      "Performance is critical for mobile visitors. We optimize every image of your dishes, write lean code, and ensure near-perfect page speeds so customers stay engaged.",
  },
  {
    question: "Can you integrate our existing reservation and booking systems?",
    answer:
      "Yes. We can seamlessly embed widgets or connect APIs for OpenTable, Resy, SevenRooms, or standard calendar booking tools directly into your layout.",
  },
];

export const leftFaqs = [
  {
    question: "Can you design a website that handles multiple locations?",
    answer:
      "Yes. We build centralized systems that showcase all of your restaurant locations, featuring location-specific menus, localized reservation links, and Google Map details for each branch.",
  },
  {
    question: "How does the AI Reservation Assistant work?",
    answer:
      "Our AI assistants can be integrated into your website or WhatsApp. They answer customer queries about hours, parking, or menu ingredients and help them secure table bookings instantly.",
  },
  {
    question: "Will our online menu load fast on slow cellular networks?",
    answer:
      "Yes. We use aggressive image optimization and modern static generation techniques, meaning your digital menus load in milliseconds, even on slow mobile connections.",
  },
];

export const pricingPackages = [
  {
    name: "Launch",
    price: "$199",
    originalPrice: "$299",
    summary: "Perfect for small businesses, cafes, bistros, or startups that need a modern, high-performance web presence with a digital menu.",
    includes: [
      "Up to 5 Pages",
      "Interactive Digital Menu / Showcase",
      "Mobile-First Responsive Layout",
      "Contact & Inquiry Forms",
      "Domain & Hosting Guidance",
      "Deployment & SSL Configuration",
      "Basic Technical SEO & Schema",
      "Google Maps Integration",
      "Performance Optimization",
      "30 Days Support"
    ],
    ctaText: "View Details",
    timeline: "1-2 weeks",
    modalDetails: [
      {
        category: "Design & Pages",
        features: ["Custom modern UI", "Mobile-first digital menu", "Home, Menu/Services, About, Gallery, Contact pages"]
      },
      {
        category: "Deployment & Setup",
        features: ["Domain connection & hosting guidance", "SSL security setup & deployment", "Google Maps & contact forms", "Click-to-Call / Click-to-Email"]
      },
      {
        category: "SEO & Speed",
        features: ["Basic technical SEO setup", "Local schema markup", "Image compression for fast loading"]
      },
      {
        category: "Support",
        features: ["30 Days Free Support", "Minor content & pricing updates"]
      }
    ]
  },
  {
    name: "Growth",
    price: "$399",
    originalPrice: "$499",
    summary: "Ideal for growing restaurants and modern brands looking to automate reservations, capture reviews, and integrate AI customer support.",
    includes: [
      "Everything in Launch",
      "Interactive Reservation System",
      "AI Menu & FAQ Assistant",
      "WhatsApp Integration",
      "Analytics Setup & Tracking",
      "Google Reviews Display",
      "Security Best Practices Setup",
      "Advanced Local SEO",
      "45 Days Support"
    ],
    featured: true,
    ctaText: "View Details",
    timeline: "2-4 weeks",
    modalDetails: [
      {
        category: "Enhanced Platform",
        features: ["Up to 10 Pages", "Advanced UI/UX with smooth animations", "Private events & inquiry system", "Featured specials highlight"]
      },
      {
        category: "AI & Integrations",
        features: ["AI Chat Assistant for booking & FAQ support", "WhatsApp integration for instant guest communication", "Embedded booking widgets", "Google Reviews live sync", "Analytics setup & conversion tracking"]
      },
      {
        category: "SEO, Security & Performance",
        features: ["Advanced local SEO optimization", "Security best practices setup", "Core Web Vitals compliance", "CDN media hosting"]
      },
      {
        category: "Support",
        features: ["45 Days Premium Support", "Priority menu and pricing updates"]
      }
    ]
  },
  {
    name: "Scale AI",
    price: "$999",
    originalPrice: "$1999",
    summary: "Designed for premium businesses and brands seeking fully custom AI receptionists, automated booking workflows, and advanced ordering integrations.",
    includes: [
      "Everything in Growth",
      "Custom AI Receptionist Assistant",
      "Automated Reservation Workflows",
      "Online Ordering / POS Integration",
      "Multi-Language Support",
      "High-Speed Performance Optimization (98+ Vitals)",
      "Admin Analytics Dashboard",
      "Website Maintenance Package",
      "60 Days Support"
    ],
    ctaText: "View Details",
    timeline: "4-6 weeks",
    modalDetails: [
      {
        category: "Premium Features",
        features: ["Unlimited Pages", "Custom motion transitions", "Interactive showcases", "Multi-language menu support"]
      },
      {
        category: "Advanced Custom AI",
        features: ["Custom AI Receptionist (trained on your brand & data)", "Automated booking & lead verification", "SMS & email alerts"]
      },
      {
        category: "Integrations & Ordering",
        features: ["Online Ordering & POS Integration (Toast, Square, etc.)", "Customer CRM setup", "Admin Analytics Dashboard"]
      },
      {
        category: "Performance & Support",
        features: ["Dedicated performance tuning (98+ Core Web Vitals)", "Website Maintenance & Support", "60 Days Priority Support", "Same-day menu edits"]
      }
    ]
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    summary: "Tailored digital solutions for multi-location groups, franchise networks, upscale hotel dining, and complex enterprise platforms.",
    includes: [
      "Custom Multi-Location Scope",
      "Corporate Platform Design",
      "POS-Connected Online Ordering",
      "Centralized Franchise Admin",
      "Dedicated Account Manager",
      "24/7 Priority SLA & Partnership"
    ],
    ctaText: "Contact Us",
    timeline: "Custom timeline",
    modalDetails: [
      {
        category: "Group Platform",
        features: ["Multi-location routing", "Franchise microsites", "Centralized content manager", "Upscale enterprise sections"]
      },
      {
        category: "POS & Ordering",
        features: ["Full POS-connected ordering flow", "Delivery platform integrations", "Catering & events pipeline"]
      },
      {
        category: "AI & Custom Workflows",
        features: ["Multi-location AI dispatch system", "Voice AI booking support", "Custom enterprise analytics"]
      },
      {
        category: "Support",
        features: ["Dedicated Account Manager", "24/7 Priority SLA support", "Monthly performance & security reviews"]
      }
    ]
  }
];

export const contactFaqs = [
  {
    question: "What should I prepare before booking a consultation?",
    answer:
      "Bring your restaurant's story, menu concept, food photography if available, links to websites you admire, and your target opening or launch timeline.",
  },
  {
    question: "Do you build websites for single-location restaurants or food trucks?",
    answer:
      "Yes. We design and build sites of all sizes—whether you're a single neighborhood bistro, a local food truck, or an expansive multi-location hospitality group.",
  },
  {
    question: "What happens after I send the contact form?",
    answer:
      "We will schedule a quick discovery call to discuss your menu style, reservation requirements, design preferences, and set a clear timeline for your launch.",
  },
];

export const aboutValues = [
  "Culinary storytelling that translates your physical atmosphere to the screen.",
  "Mobile performance that ensures guests can view your menu instantly anywhere.",
  "Seamless automated systems that keep your tables filled without distracting your team.",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "momofuku",
    title: "Momofuku",
    category: "Restaurant",
    clientType: "Restaurant & Food Group",
    shortDescription: "A modern restaurant group website highlighting culinary offerings, chef's counters, nationwide shipping, and brand storytelling.",
    overview:
      "Momofuku needed a robust digital platform that could handle multiple locations, nationwide shipping integration, and convey their distinct brand identity.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "Analytics"],
    features: ["Multi-location routing", "Nationwide shipping integration", "Immersive brand storytelling", "Mobile-first reservations"],
    image: "/images/momofuku.avif",
    imageAlt: "Momofuku restaurant website preview showing modern design, culinary photography, and navigation.",
    liveHref: "https://www.momofuku.com/",
    performance: "98/100 Core Web Vitals score",
    results: ["Increased online shipping sales", "Higher reservation conversion rates", "Streamlined multi-location management"],
    challenge: "Consolidating a complex array of restaurants, products, and brand stories into a single, cohesive user experience without clutter.",
    goals: ["Unify the brand presence", "Boost nationwide shipping revenue", "Simplify the reservation process"],
    design: "Bold typography, high-contrast imagery, and an editorial layout that reflects the brand's culinary authority.",
    development:
      "A headless architecture approach was used to decouple the frontend for speed while integrating complex backend systems for reservations and e-commerce.",
  },
  {
    slug: "the-cheesecake-factory",
    title: "The Cheesecake Factory",
    category: "Restaurant",
    clientType: "Casual Dining Chain",
    shortDescription: "A casual dining restaurant website emphasizing online ordering, expansive food menus, signature desserts, and gift cards.",
    overview:
      "The Cheesecake Factory required an expansive yet easily navigable digital experience to showcase their massive menu and drive online orders.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "API Integration", "SEO"],
    features: ["Dynamic massive menu", "Online ordering flow", "Gift card purchasing", "Location finder"],
    image: "/images/thecheesecakefactory.avif",
    imageAlt: "The Cheesecake Factory website preview showing signature desserts, menu highlights, and online ordering prompts.",
    liveHref: "https://www.thecheesecakefactory.com/",
    performance: "95/100 Core Web Vitals score",
    results: ["Improved menu loading speed", "Increased gift card sales", "Frictionless online ordering"],
    challenge: "Structuring an incredibly large and diverse menu in a way that remains fast and readable on mobile devices.",
    goals: ["Optimize menu readability", "Drive online pickup orders", "Enhance local search visibility"],
    design: "Warm, inviting colors paired with clear categorical navigation to prevent choice paralysis while browsing the extensive offerings.",
    development:
      "Focus placed on optimizing image delivery for hundreds of menu items and building a seamless API connection to their ordering platform.",
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
    slug: "sparrow-italia",
    title: "Sparrow Italia",
    category: "Restaurant",
    clientType: "Fine Dining",
    shortDescription: "An elegant fine dining website showcasing Italian-inspired cuisine, premium cocktails, press features, and an upscale dining atmosphere.",
    overview:
      "Sparrow Italia sought an online presence that mirrored their sophisticated ambiance, focusing on visual allure and seamless reservations.",
    industry: "Restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Animations", "SEO"],
    features: ["Immersive scroll animations", "Elegant menu presentation", "VIP booking inquiries", "Press & accolade showcase"],
    image: "/images/sparrowitlia.avif",
    imageAlt: "Sparrow Italia fine dining website preview showing elegant aesthetics, Italian cuisine, and reservation options.",
    liveHref: "https://sparrowitalia.com/",
    performance: "96/100 Core Web Vitals score",
    results: ["Higher VIP booking inquiries", "Increased average table value", "Stronger brand positioning in the fine dining sector"],
    challenge: "Creating an atmosphere of exclusivity and elegance digitally without relying on heavy, slow-loading assets.",
    goals: ["Capture the upscale dining atmosphere", "Drive premium reservations", "Showcase culinary artistry"],
    design: "Dark, moody aesthetics with subtle gold accents and smooth, deliberate transitions that evoke a sense of luxury.",
    development:
      "Leveraged CSS-driven micro-animations and lazy-loaded visual assets to maintain performance while delivering a rich experience.",
  },
  {
    slug: "big-chill-bar",
    title: "Big Chill Bar",
    category: "Bar",
    clientType: "Nightlife & Entertainment",
    shortDescription: "A vibrant bar and nightlife website promoting live sports watch parties, private venue hire, food pop-ups, and special events.",
    overview:
      "Big Chill Bar needed a high-energy platform to communicate their dynamic schedule of events, facilitate group bookings, and highlight pop-up kitchens.",
    industry: "Bar",
    technologies: ["Next.js", "Tailwind CSS", "Event Management", "Forms"],
    features: ["Dynamic event calendar", "Private hire booking flow", "Live sports schedules", "Pop-up kitchen rotation"],
    image: "/images/big_chill.avif",
    imageAlt: "Big Chill Bar website preview showing vibrant nightlife, event schedules, and venue hire information.",
    liveHref: "https://www.bigchillbar.com/",
    performance: "97/100 Core Web Vitals score",
    results: ["Significant increase in private hire bookings", "Higher event attendance", "Easier management of pop-up schedules"],
    challenge: "Organizing constantly changing event data, sports schedules, and food pop-ups into an easily digestible format.",
    goals: ["Boost private venue hires", "Clarify the weekly event schedule", "Create a vibrant digital atmosphere"],
    design: "Bright, energetic typography, bold color blocks, and dynamic layouts that capture the lively atmosphere of the venue.",
    development:
      "Built a flexible content management architecture allowing the client to easily update daily sports events and rotating food vendors.",
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
  },
];

export const portfolioFilters = [
  "All",
  "Restaurant",
  "Hotels",
  "Bar",
] as const;
