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
  tagline: "Premium websites for growing local businesses.",
  description:
    "MhStudio designs and develops premium, conversion-focused websites for local businesses that want to look modern and win more customers.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "mhsaad23305@gmail.com",
  whatsappHref: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/+923429842565",
  calendarHref: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "https://calendly.com/muhammadsaad23305/30min",
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
  "Restaurants",
  "Salons",
  "Gyms",
  "Dental Clinics",
  "Barbers",
  "Coffee Shops",
  "Small Businesses",
];

export const industries = [
  "Restaurant",
  "Gym",
  "Dental",
  "Salon",
  "Barber",
  "Law Firm",
  "Consultant",
  "Real Estate",
  "Medical",
  "Construction",
  "Education",
  "Small Business",
];

export type IndustryShowcaseItem = {
  label: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const industryShowcaseItems: IndustryShowcaseItem[] = [
  {
    label: "Restaurant",
    image: "/images/restaurant.avif",
    alt: "Elegant restaurant table with plated dishes and warm ambient lighting.",
    objectPosition: "center center",
  },
  {
    label: "Salon",
    image: "/images/salon.avif",
    alt: "Stylist preparing a haircut in a premium salon setting.",
    objectPosition: "center center",
  },
  {
    label: "Gym",
    image: "/images/gym.avif",
    alt: "Modern gym interior with strength training equipment and dramatic lighting.",
    objectPosition: "center center",
  },
  {
    label: "Dental Clinic",
    image: "/images/dental_clinic.avif",
    alt: "Dental professional workspace with clean clinical equipment.",
    objectPosition: "center center",
  },
  {
    label: "Barbershop",
    image: "/images/barbershop.avif",
    alt: "Barbershop scene with a clean haircut in progress and premium grooming details.",
    objectPosition: "center center",
  },
  {
    label: "Coffee Shop",
    image: "/images/coffee_shop.avif",
    alt: "Coffee shop barista with espresso equipment and moody lighting.",
    objectPosition: "center center",
  },
  {
    label: "Small Business",
    image: "/images/small_business.avif",
    alt: "Small business team collaborating in a modern workspace.",
    objectPosition: "center center",
  },
  {
    label: "Consultant",
    image: "/images/consultant.avif",
    alt: "Consulting team reviewing ideas around a conference table.",
    objectPosition: "center center",
  },
  {
    label: "Real Estate",
    image: "/images/real_estate.avif",
    alt: "Modern home exterior with clean architectural lines.",
    objectPosition: "center center",
  },
  {
    label: "Medical",
    image: "/images/medical.avif",
    alt: "Medical professional in a calm clinical environment.",
    objectPosition: "center center",
  },
  {
    label: "Construction",
    image: "/images/construction.avif",
    alt: "Construction worker on site with an active build in the background.",
    objectPosition: "center center",
  },
  {
    label: "Education",
    image: "/images/education.avif",
    alt: "Classroom environment with students collaborating around a table.",
    objectPosition: "center center",
  },
];

export const stats: Metric[] = [
  {
    label: "Projects Completed",
    value: 6,
    suffix: "+",
    description: "Launch-ready concept builds tailored to local service businesses.",
  },
  {
    label: "Years Experience",
    value: 4,
    suffix: "+",
    description: "Hands-on website design and development experience across modern stacks.",
  },
  {
    label: "Satisfied Clients",
    value: 6,
    suffix: "+",
    description: "A focused portfolio built around clarity, speed, and business conversion.",
  },
  {
    label: "Industries Served",
    value: 12,
    suffix: "+",
    description: "From restaurants and salons to clinics, consultants, and local brands.",
  },
  {
    label: "Technologies Used",
    value: 14,
    suffix: "+",
    description: "A modern toolkit selected for speed, maintainability, and growth.",
  },
];

export const whyChooseItems = [
  {
    title: "Fast Loading",
    problem: "Your visitors will not wait for a slow website to catch up.",
    solution: "MhStudio ships lean pages, optimized media, and fast interactions that respect performance from day one.",
  },
  {
    title: "Mobile First",
    problem: "Most local-business visitors will meet you on their phone first.",
    solution: "Every layout, CTA, and form is designed to convert on smaller screens before scaling up to desktop.",
  },
  {
    title: "SEO Ready",
    problem: "A beautiful website still fails if customers cannot find it.",
    solution: "Clean structure, metadata, content hierarchy, and technical fundamentals are built into the implementation.",
  },
  {
    title: "Easy to Manage",
    problem: "You should not need a developer for every text or image update.",
    solution: "The content architecture is organized so updates can stay structured and predictable as the site grows.",
  },
  {
    title: "Secure",
    problem: "Trust breaks quickly when a site feels broken, exposed, or outdated.",
    solution: "Best-practice foundations, clear contact flows, and dependable hosting readiness are part of the build.",
  },
  {
    title: "Modern Design",
    problem: "Dated design makes a strong business look less credible.",
    solution: "The visual system stays premium, minimal, and polished without sacrificing readability or speed.",
  },
];

export const serviceCards = [
  {
    title: "Website Development",
    description: "Mobile-optimized frontend development that feels smooth, fast, and polished on every screen.",
    features: ["Performance-first build", "Responsive breakpoints", "Accessible interaction patterns"],
    icon: "monitor-smartphone",
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored machine learning models and intelligent tools designed for your specific business needs.",
    features: ["Data Processing", "Computer Vision", "Predictive Modeling"],
    icon: "brain",
  },
  {
    title: "E-commerce Development",
    description: "High-performance online stores optimized for fast checkouts and high conversion rates.",
    features: ["Custom Storefronts", "Secure Checkouts", "Inventory Management"],
    icon: "shopping-cart",
  },
  {
    title: "AI Chatbot Development",
    description: "Custom AI assistants built to handle customer support, lead generation, and inquiries 24/7.",
    features: ["Natural Language", "Contextual Memory", "CRM Integration"],
    icon: "bot",
  },
  {
    title: "AI-Powered Web Applications",
    description: "Next-generation web apps with built-in artificial intelligence for dynamic, personalized user experiences.",
    features: ["Dynamic Generation", "Personalized UI", "Intelligent Workflows"],
    icon: "sparkles",
  },
  {
    title: "Business Websites",
    description: "Multi-page websites for local brands that need trust, clarity, and a stronger digital presence.",
    features: ["Page architecture", "Service storytelling", "Location-ready sections"],
    icon: "briefcase-business",
  },
  {
    title: "AI Integration",
    description: "Seamlessly embed AI capabilities into your existing systems to enhance decision making.",
    features: ["OpenAI & LLMs", "Predictive Analytics", "Smart Search"],
    icon: "cpu",
  },
  {
    title: "Business Process Automation",
    description: "Reduce manual work by automating repetitive tasks, connecting apps, and streamlining operations.",
    features: ["Zapier & Make", "Custom Webhooks", "Data Syncing"],
    icon: "workflow",
  },
  {
    title: "Workflow Automation",
    description: "Connect disparate systems and automate complex multi-step workflows to save time and reduce errors.",
    features: ["System Integrations", "Error Reduction", "Time Savings"],
    icon: "git-merge",
  },
  {
    title: "Desktop Application",
    description: "Cross-platform desktop applications built with web technologies for Windows, macOS, and Linux.",
    features: ["Electron & Tauri", "Offline Support", "Native Features"],
    icon: "monitor",
  },
  {
    title: "API Integration",
    description: "Connect third-party services and payment gateways to expand your platform's capabilities.",
    features: ["RESTful APIs", "Payment Gateways", "Third-party Services"],
    icon: "plug",
  },
  {
    title: "Landing Pages",
    description: "Focused campaign pages designed to turn traffic into calls, bookings, and qualified leads.",
    features: ["Single-goal structure", "Lead capture forms", "High-intent CTAs"],
    icon: "goal",
  },
  {
    title: "Website Design",
    description: "Custom interface design built to position your business as credible, modern, and easy to trust.",
    features: ["Custom UI direction", "Premium page layouts", "Conversion-first content flow"],
    icon: "palette",
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO foundations that help local businesses show up clearly and rank more confidently.",
    features: ["Metadata setup", "Semantic structure", "Performance support"],
    icon: "search",
  },
  {
    title: "Performance Optimization",
    description: "Speed-focused improvements that keep the experience smooth and Core Web Vitals-aware.",
    features: ["Core Web Vitals", "Image handling", "Interaction polish"],
    icon: "gauge",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support to keep your website secure, current, and aligned with your business updates.",
    features: ["Content updates", "Backup guidance", "Health checks"],
    icon: "shield-check",
  },
  {
    title: "Hosting & Deployment",
    description: "Deployment guidance and launch readiness for reliable modern hosting environments.",
    features: ["Vercel", "Netlify", "Cloudflare"],
    icon: "cloud",
  },
  {
    title: "Technical Consulting",
    description: "Strategic technical guidance to help you choose the right stack and architecture for your goals.",
    features: ["Architecture Design", "Stack Selection", "Code Reviews"],
    icon: "lightbulb",
  },
];

export const serviceSections = [
  {
    title: "Website Development",
    description: "Modern frontend development that turns approved designs into responsive, production-ready pages.",
    points: ["Modern stack", "Responsive implementation", "Accessible markup"],
    icon: "code-xml",
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored machine learning models and intelligent tools designed for your specific business needs.",
    points: ["Data Processing", "Computer Vision", "Predictive Modeling"],
    icon: "brain",
  },
  {
    title: "E-commerce Development",
    description: "High-performance online stores optimized for fast checkouts and high conversion rates.",
    points: ["Custom Storefronts", "Secure Checkouts", "Inventory Management"],
    icon: "shopping-cart",
  },
  {
    title: "AI Chatbot Development",
    description: "Custom AI assistants built to handle customer support, lead generation, and inquiries 24/7.",
    points: ["Natural Language", "Contextual Memory", "CRM Integration"],
    icon: "bot",
  },
  {
    title: "AI-Powered Web Applications",
    description: "Next-generation web apps with built-in artificial intelligence for dynamic, personalized user experiences.",
    points: ["Dynamic Generation", "Personalized UI", "Intelligent Workflows"],
    icon: "sparkles",
  },
  {
    title: "Business Websites",
    description: "Complete websites that give service businesses a strong digital home with a clear conversion path.",
    points: ["Complete websites", "Trust-building sections", "Service clarity"],
    icon: "briefcase-business",
  },
  {
    title: "AI Integration",
    description: "Seamlessly embed AI capabilities into your existing systems to enhance decision making.",
    points: ["OpenAI & LLMs", "Predictive Analytics", "Smart Search"],
    icon: "cpu",
  },
  {
    title: "Business Process Automation",
    description: "Reduce manual work by automating repetitive tasks, connecting apps, and streamlining operations.",
    points: ["Zapier & Make", "Custom Webhooks", "Data Syncing"],
    icon: "workflow",
  },
  {
    title: "Workflow Automation",
    description: "Connect disparate systems and automate complex multi-step workflows to save time and reduce errors.",
    points: ["System Integrations", "Error Reduction", "Time Savings"],
    icon: "git-merge",
  },
  {
    title: "Desktop Application",
    description: "Cross-platform desktop applications built with web technologies for Windows, macOS, and Linux.",
    points: ["Electron & Tauri", "Offline Support", "Native Features"],
    icon: "monitor",
  },
  {
    title: "API Integration",
    description: "Connect third-party services and payment gateways to expand your platform's capabilities.",
    points: ["RESTful APIs", "Payment Gateways", "Third-party Services"],
    icon: "plug",
  },
  {
    title: "Landing Pages",
    description: "High-intent page structures built for promotions, launches, consultations, and lead generation.",
    points: ["Lead generation", "Offer positioning", "Single-page funnels"],
    icon: "goal",
  },
  {
    title: "Website Design",
    description: "Design systems, page layouts, and visual direction that make a local business feel premium and trustworthy.",
    points: ["Custom UI", "Conversion copy structure", "Visual hierarchy"],
    icon: "palette",
  },
  {
    title: "SEO Optimization",
    description: "Practical technical SEO foundations to help businesses perform better in local discovery and search.",
    points: ["Technical SEO", "Metadata", "Semantic structure"],
    icon: "search",
  },
  {
    title: "Performance Optimization",
    description: "Speed-focused improvements that keep the experience smooth and Core Web Vitals-aware.",
    points: ["Core Web Vitals", "Image handling", "Interaction polish"],
    icon: "gauge",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support for updates, backups, and content confidence after launch.",
    points: ["Updates", "Backups", "Security"],
    icon: "shield-check",
  },
  {
    title: "Hosting & Deployment",
    description: "Deployment guidance and launch readiness for reliable modern hosting environments.",
    points: ["Vercel", "Netlify", "Cloudflare"],
    icon: "cloud",
  },
  {
    title: "Technical Consulting",
    description: "Strategic technical guidance to help you choose the right stack and architecture for your goals.",
    points: ["Architecture Design", "Stack Selection", "Code Reviews"],
    icon: "lightbulb",
  },
];

export const websiteFeatures = [
  { title: "Responsive Design", description: "Layouts that feel intentional from 320px mobile screens through large desktops.", icon: "smartphone" },
  { title: "Lightning Fast Performance", description: "A fast site keeps attention, improves trust, and supports conversion.", icon: "zap" },
  { title: "Google Maps", description: "Location visibility for businesses that depend on local discovery and foot traffic.", icon: "map-pinned" },
  { title: "Booking Forms", description: "Inquiry and booking flows designed to turn attention into action.", icon: "calendar" },
  { title: "Online Contact Forms", description: "Clear, structured forms that make it easier for prospects to reach out.", icon: "mail" },
  { title: "WhatsApp Integration", description: "A direct path for fast conversations when clients prefer messaging.", icon: "message-circle-more" },
  { title: "Social Media Links", description: "Connected brand touchpoints that reinforce trust and activity.", icon: "share-2" },
  { title: "Image Galleries", description: "Structured galleries for menus, before-and-after work, spaces, or teams.", icon: "images" },
  { title: "Menu Showcase", description: "Clean content blocks for restaurants, cafes, and service packages.", icon: "utensils-crossed" },
  { title: "Pricing Tables", description: "Simple packages and service comparisons built for quick decision-making.", icon: "badge-dollar-sign" },
  { title: "Testimonials", description: "A future-ready proof section when verified client stories are available.", icon: "message-square-quote" },
  { title: "Blog", description: "An optional content system for SEO, updates, and thought leadership.", icon: "newspaper" },
  { title: "SEO", description: "Technical structure and content hierarchy ready to support discoverability.", icon: "search-check" },
  { title: "Analytics", description: "Measurement-ready implementation for campaign and conversion tracking.", icon: "chart-no-axes-column" },
  { title: "Call-to-Action Sections", description: "Clear decision points that move visitors toward contact or booking.", icon: "megaphone" },
  { title: "Email Integration", description: "A structured lead path designed to work cleanly with inbox workflows.", icon: "mail-check" },
  { title: "Google Reviews", description: "Social proof placement for local businesses that win on reputation.", icon: "star" },
  { title: "Location Pages", description: "A scalable content pattern for multi-area service businesses.", icon: "map" },
  { title: "Secure Hosting Support", description: "Launch guidance that keeps delivery polished and dependable.", icon: "server-cog" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn your business goals, audience, offer, and what success should look like online.",
    bullets: ["Business goals", "Audience review", "Offer clarity"],
  },
  {
    step: "02",
    title: "Planning",
    description: "We map the information architecture, wireframes, content direction, and CTA flow.",
    bullets: ["Wireframes", "Content planning", "Conversion strategy"],
  },
  {
    step: "03",
    title: "Design",
    description: "We create a modern UI system that feels premium, fast, and aligned with your brand.",
    bullets: ["Design system", "Page composition", "Mobile-first review"],
  },
  {
    step: "04",
    title: "Development",
    description: "The approved design is built into responsive, production-ready pages with clean structure.",
    bullets: ["Responsive frontend", "Performance focus", "SEO-ready structure"],
  },
  {
    step: "05",
    title: "Testing",
    description: "We review responsiveness, accessibility, polish, and consistency before launch.",
    bullets: ["Performance review", "Accessibility checks", "Cross-device QA"],
  },
  {
    step: "06",
    title: "Launch",
    description: "Your site goes live with support for analytics, handoff, and next-step improvements.",
    bullets: ["Deployment", "Analytics readiness", "Post-launch support"],
  },
];

export const technologyGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs", "JWT Authentication", "Google OAuth"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase", "Prisma ORM"] },
  { title: "AI & Automation", items: ["Python", "AI Integration", "AI Chatbots", "Automation", "AI-Powered", "Machine Learning", "Data Processing"] },
  { title: "Tools & DevOps", items: ["Git", "GitHub", "AWS", "CI/CD Pipeline", "Cloudflare", "Vercel", "Netlify", "Cloudinary", "Postman", "Electron", "Tauri"] },
];

export const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most marketing sites move from planning to launch in a few focused phases, depending on content readiness and the number of pages.",
  },
  {
    question: "Do you redesign websites?",
    answer:
      "Yes. MhStudio can modernize outdated websites by improving the visual system, structure, and conversion flow.",
  },
  {
    question: "Can you maintain my website?",
    answer:
      "Yes. Ongoing support can cover updates, content changes, and keeping the site polished after launch.",
  },
  {
    question: "Can I edit the website later?",
    answer:
      "The structure is planned to stay maintainable so future edits and expansions are easier to manage cleanly.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Hosting support and deployment guidance are included in the service model, with modern platforms recommended where appropriate.",
  },
  {
    question: "Do you help with SEO?",
    answer:
      "Technical SEO is built into the foundation through metadata, semantic structure, speed, and content hierarchy.",
  },
  {
    question: "Can you build booking systems?",
    answer:
      "Yes. MhStudio can structure booking-driven pages and integrate booking flows based on the business needs.",
  },
];

export const pricingPackages = [
  {
    name: "Launch",
    price: "From $499",
    summary: "Perfect for startups, local businesses, restaurants, salons, gyms, clinics, barbershops, and professionals who need a modern online presence.",
    includes: [
      "Up to 6 Pages",
      "Fully Responsive Design",
      "Contact Forms",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "Google Maps Integration",
      "Social Media Integration",
      "Hosting & Deployment Support",
      "30 Days Support"
    ],
    ctaText: "View Details",
    timeline: "1-2 weeks",
    modalDetails: [
      {
        category: "Website Design",
        features: ["Custom modern UI", "Premium responsive layout", "Mobile-first design", "Professional typography", "Smooth animations"]
      },
      {
        category: "Pages",
        features: ["Home", "About", "Services", "Portfolio/Gallery", "Contact", "Custom Page"]
      },
      {
        category: "Integrations",
        features: ["Contact Form", "WhatsApp Chat", "Google Maps", "Social Media Links", "Click-to-Call", "Click-to-Email"]
      },
      {
        category: "Performance",
        features: ["Fast Loading", "Responsive on all devices", "Image Optimization", "Basic Performance Optimization"]
      },
      {
        category: "SEO",
        features: ["Technical SEO", "Meta Tags", "Open Graph", "Sitemap", "Robots.txt", "Google Index Ready"]
      },
      {
        category: "Deployment",
        features: ["Domain Connection", "SSL Configuration", "Hosting Assistance"]
      },
      {
        category: "Support",
        features: ["30 Days Free Support", "Minor Content Updates", "Bug Fixes"]
      }
    ]
  },
  {
    name: "Growth",
    price: "From $1,199",
    summary: "Ideal for businesses that want more than a website—designed to generate leads, automate communication, and improve customer engagement.",
    includes: [
      "Everything in Launch",
      "AI Chatbot",
      "CRM Integrations",
      "Analytics Dashboard",
      "Booking System",
      "Advanced SEO",
      "API Integrations",
      "45 Days Support"
    ],
    featured: true,
    ctaText: "View Details",
    timeline: "2-5 weeks",
    modalDetails: [
      {
        category: "Advanced Website",
        features: ["Up to 12 Pages", "Advanced UI/UX", "Custom Animations", "Premium Sections", "Interactive Components"]
      },
      {
        category: "AI Features",
        features: ["AI Chatbot", "FAQ Assistant", "Smart Contact Assistant", "AI Lead Qualification", "AI Content Assistance"]
      },
      {
        category: "Integrations",
        features: ["CRM Integration", "Calendar Booking", "Email Marketing Integration", "Newsletter Setup", "Third-party API Integration", "Payment Gateway (if required)"]
      },
      {
        category: "Marketing",
        features: ["Google Analytics", "Google Search Console", "Conversion Tracking", "Event Tracking", "Enhanced SEO"]
      },
      {
        category: "Automation",
        features: ["Automated Contact Responses", "Lead Notifications", "Email Routing", "Form Automation", "Workflow Triggers"]
      },
      {
        category: "Performance",
        features: ["Advanced Optimization", "Core Web Vitals Optimization", "Lazy Loading", "CDN Configuration"]
      },
      {
        category: "Support",
        features: ["45 Days Premium Support", "Priority Bug Fixes", "Website Health Check"]
      }
    ]
  },
  {
    name: "Scale AI",
    price: "From $2,499",
    summary: "Built for businesses that want AI-driven automation, intelligent workflows, and scalable digital solutions.",
    includes: [
      "Everything in Growth",
      "AI Automation",
      "Custom AI Solutions",
      "Workflow Automation",
      "AI Agents",
      "Machine Learning Integration",
      "60 Days Support"
    ],
    ctaText: "View Details",
    timeline: "4-8 weeks",
    modalDetails: [
      {
        category: "Premium Website",
        features: ["Unlimited Pages", "Fully Custom UI/UX", "Advanced Animations", "Custom Dashboards", "Premium Design System"]
      },
      {
        category: "Advanced AI",
        features: ["AI Agents", "Multi-step AI Workflows", "Custom AI Assistants", "AI Content Generation", "AI Customer Support", "AI Knowledge Base", "AI Search"]
      },
      {
        category: "Automation",
        features: ["Business Workflow Automation", "Email Automation", "CRM Automation", "Appointment Automation", "Lead Management Automation", "Internal Process Automation"]
      },
      {
        category: "AI Integrations",
        features: ["OpenAI Integration", "Claude Integration", "Gemini Integration (if required)", "Custom AI APIs"]
      },
      {
        category: "Machine Learning",
        features: ["Machine Learning Model Integration", "Intelligent Recommendations", "Data Analysis Features", "Prediction Systems (where applicable)"]
      },
      {
        category: "Business Intelligence",
        features: ["Admin Dashboard", "Analytics Dashboard", "Reporting System", "User Management"]
      },
      {
        category: "Infrastructure",
        features: ["Advanced Security", "Cloud Storage Integration", "Backup Strategy", "Performance Monitoring"]
      },
      {
        category: "Support",
        features: ["60 Days Premium Support", "Priority Assistance", "Performance Reviews", "Optimization Recommendations"]
      }
    ]
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    summary: "Tailored solutions for organizations, multi-location businesses, SaaS platforms, startups, and companies with complex operational requirements.",
    includes: [
      "Custom Scope",
      "Dedicated Consultation",
      "Enterprise Architecture",
      "Advanced AI Systems",
      "Team Collaboration",
      "Ongoing Partnership"
    ],
    ctaText: "Contact Us",
    timeline: "Custom timeline",
    modalDetails: [
      {
        category: "Enterprise Development",
        features: ["Large-scale Websites", "Web Applications", "SaaS Platforms", "Client Portals", "Admin Systems", "Multi-location Websites", "Enterprise Dashboards"]
      },
      {
        category: "AI & Automation",
        features: ["Custom AI Solutions", "Enterprise AI Assistants", "AI Agents", "Business Automation", "Internal AI Tools", "Knowledge Management Systems", "Document Intelligence", "AI Workflow Orchestration"]
      },
      {
        category: "Integrations",
        features: ["ERP Integration", "CRM Integration", "Payment Systems", "Third-party APIs", "Cloud Services", "Authentication Systems", "Internal Software Integration"]
      },
      {
        category: "Infrastructure",
        features: ["Scalable Architecture", "Cloud Deployment", "CI/CD Pipelines", "Monitoring", "Security Hardening", "Backup & Disaster Recovery"]
      },
      {
        category: "Collaboration",
        features: ["Discovery Workshops", "Project Planning", "Dedicated Project Management", "Team Training", "Long-term Maintenance", "SLA-based Support"]
      }
    ]
  }
];

export const contactFaqs = [
  {
    question: "What should I prepare before booking a consultation?",
    answer:
      "Bring your goals, current website details if you have one, examples you like, and any rough idea of timeline or budget.",
  },
  {
    question: "Can MhStudio help if I only need one landing page?",
    answer:
      "Yes. Single-goal landing pages are part of the service offering when the objective is clear.",
  },
  {
    question: "What happens after I send the contact form?",
    answer:
      "The next step is a consultation to align on scope, timeline, and the best structure for your business goals.",
  },
];

export const aboutValues = [
  "Outcome-focused work over decoration for decoration's sake.",
  "Clear, confident communication that respects business owners' time.",
  "Fast, modern execution with attention to trust, usability, and performance.",
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
];

export const portfolioFilters = [
  "All",
  "Restaurant",
  "Hotels",
  "Bar",
] as const;
