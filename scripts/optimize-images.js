const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, quality = 75, width = 1920, height = 1080) {
  try {
    console.log(`Optimizing ${inputPath}...`);
    
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality, effort: 6 })
      .toFile(outputPath);
    
    const originalStats = fs.statSync(inputPath);
    const optimizedStats = fs.statSync(outputPath);
    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(outputPath)}: ${(originalStats.size / 1024).toFixed(0)}KB → ${(optimizedStats.size / 1024).toFixed(0)}KB (${savings}% reduction)`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function main() {
  const inputDir = 'public/assets';
  const outputDir = 'public/assets/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Optimize hero images
  const heroImages = [
    'heroSlider1.webp',
    'HeroSlider2.webp', 
    'heroSlide3.webp'
  ];
  
  console.log('🖼️  Optimizing hero images for better performance...\n');
  
  for (const image of heroImages) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image);
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 75, 1920, 1080);
    } else {
      console.log(`⚠️  ${inputPath} not found, skipping...`);
    }
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update your constants file to use the optimized images');
  console.log('2. Test the images to ensure quality is acceptable');
  console.log('3. Deploy to see improved loading performance');
}

main().catch(console.error);
