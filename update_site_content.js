const fs = require('fs');

const path = './src/data/site-content.ts';
let content = fs.readFileSync(path, 'utf8');

// Replace the existing serviceSections with the new mainServices array
const mainServicesCode = `
export const mainServices = [
  {
    title: "Restaurant Websites & Mobile Applications",
    description: "Custom, high-performance websites and branded customer apps designed to showcase your restaurant and drive direct orders.",
    points: ["Restaurant websites", "Customer ordering apps", "Branded digital presence", "Website + App ecosystem"],
    icon: "monitor-smartphone"
  },
  {
    title: "Restaurant Management Systems (RMS)",
    description: "A centralized dashboard to control every aspect of your restaurant operations across one or multiple locations.",
    points: ["Centralized restaurant dashboard", "Orders & Branches", "Customers & Staff", "Operations & Analytics"],
    icon: "building-2"
  },
  {
    title: "Point of Sale (POS) Systems",
    description: "Modern point-of-sale solutions for seamless billing, order processing, and table management.",
    points: ["Dine-in, Takeaway & Delivery", "Billing & payments", "Tables & KOT", "Customer/order management"],
    icon: "calculator"
  },
  {
    title: "Kitchen Display Systems (KDS)",
    description: "Digital screens that replace paper tickets, organizing your kitchen workflow and preparation queue in real time.",
    points: ["Digital kitchen tickets", "Order queue & Status management", "Preparation workflow", "KOT replacement/digitalization"],
    icon: "chef-hat"
  },
  {
    title: "Online Ordering Systems",
    description: "Commission-free ordering experiences for pickup and delivery, directly integrated with your website and POS.",
    points: ["Direct website & mobile ordering", "Pickup & Delivery", "Menu/customization", "Checkout, payments & order management"],
    icon: "shopping-bag"
  },
  {
    title: "Delivery & Fleet Management",
    description: "Tools to manage your own delivery riders, track orders live, and streamline your dispatch operations.",
    points: ["Own rider management", "Live delivery tracking & Dispatch", "Delivery zones & Delivery partners", "Rider assignment & performance"],
    icon: "bike"
  },
  {
    title: "Dine-In & Table Management",
    description: "Visual table management to optimize seating, handle open checks, and improve the dine-in guest experience.",
    points: ["Digital floor plan", "Table status & Table orders", "Open checks & Billing", "QR ordering"],
    icon: "armchair"
  },
  {
    title: "QR Menu & Self-Ordering",
    description: "Contactless dining experiences allowing guests to view menus and place orders directly from their tables.",
    points: ["Table-specific QR", "Digital menu", "Customer self-ordering", "Dine-in order integration"],
    icon: "qr-code"
  }
];

export const supportingServicesCategories = [
  {
    title: "Customer & Marketing",
    items: [
      "Customer CRM",
      "Loyalty & Rewards",
      "Promotions & Marketing",
      "Reviews",
      "AI Restaurant Assistant",
      "WhatsApp AI Assistant",
      "WhatsApp Ordering & Automation"
    ]
  },
  {
    title: "Business & Operations",
    items: [
      "Inventory & Supply Management",
      "Reservations",
      "Analytics & Business Intelligence",
      "Multi-Branch Management",
      "Reports",
      "Staff & HR"
    ]
  },
  {
    title: "Digital Growth",
    items: [
      "Local SEO & Google Visibility",
      "Performance Optimization",
      "Gallery & Food Showcases",
      "Events & Announcements"
    ]
  },
  {
    title: "Technical & Infrastructure",
    items: [
      "Integrations & Custom Automation",
      "Hosting & Deployment",
      "Website Maintenance & Support"
    ]
  }
];
`;

// Replace export const serviceSections = [...] with the new mainServices
const serviceSectionsRegex = /export const serviceSections = \[[\s\S]*?\n\];/;
content = content.replace(serviceSectionsRegex, mainServicesCode);

fs.writeFileSync(path, content);

