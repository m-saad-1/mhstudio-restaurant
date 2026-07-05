const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'site-content.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Big Chill Bar
content = content.replace('image: "/work/big_chill.avif",', 'image: "/images/big_chill.avif",');

// Replace industry items
const replacements = [
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', local: '/images/restaurant.avif' },
  { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80', local: '/images/salon.avif' },
  { url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80', local: '/images/gym.avif' },
  { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80', local: '/images/dental_clinic.avif' },
  { url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80', local: '/images/barbershop.avif' },
  { url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80', local: '/images/coffee_shop.avif' },
  { url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80', local: '/images/small_business.avif' },
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', local: '/images/consultant.avif' },
  { url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80', local: '/images/real_estate.avif' },
  { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80', local: '/images/medical.avif' },
  { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80', local: '/images/construction.avif' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', local: '/images/education.avif' }
];

replacements.forEach(({ url, local }) => {
  content = content.replace(`"${url}"`, `"${local}"`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated site-content.ts');
