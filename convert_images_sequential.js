const sharp = require('sharp');
const fs = require('fs');

async function convertImages() {
  const images = [
    'Table-management-tab.png'
  ];

  for (const img of images) {
    const inputPath = `public/images/${img}`;
    const nameWithoutExt = img.substring(0, img.lastIndexOf('.'));
    const outputPath = `public/images/${nameWithoutExt}.avif`;
    
    console.log(`Converting ${img}...`);
    try {
      await sharp(inputPath).avif({ quality: 80 }).toFile(outputPath);
      console.log(`Successfully converted ${img} to ${outputPath}`);
    } catch (err) {
      console.error(`Error converting ${img}:`, err);
    }
  }
}

convertImages();
