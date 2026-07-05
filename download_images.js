const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  { name: 'restaurant', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80' },
  { name: 'salon', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80' },
  { name: 'gym', url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80' },
  { name: 'dental_clinic', url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80' },
  { name: 'barbershop', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80' },
  { name: 'coffee_shop', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80' },
  { name: 'small_business', url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80' },
  { name: 'consultant', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80' },
  { name: 'real_estate', url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80' },
  { name: 'medical', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80' },
  { name: 'construction', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80' },
  { name: 'education', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80' },
];

const downloadAndConvert = (image) => {
  return new Promise((resolve, reject) => {
    https.get(image.url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${image.url}' (${response.statusCode})`));
        return;
      }
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        try {
          const outputPath = path.join(__dirname, 'public', 'images', `${image.name}.avif`);
          await sharp(buffer)
            .avif({ quality: 65, effort: 4 })
            .toFile(outputPath);
          console.log(`Successfully processed ${image.name}.avif`);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
};

async function processAll() {
  for (const img of images) {
    try {
      await downloadAndConvert(img);
    } catch (e) {
      console.error(`Error processing ${img.name}:`, e);
    }
  }
}

processAll();
