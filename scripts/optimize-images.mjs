#!/usr/bin/env node
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function optimizeImages() {
  console.log('🖼️  Optimizing images for production...');
  
  const publicDir = join(projectRoot, 'public');
  
  try {
    // Create WebP versions of PNG files
    console.log('📸 Converting PNG files to WebP...');
    const pngFiles = await imagemin([join(publicDir, '**/*.png')], {
      destination: publicDir,
      plugins: [
        imageminWebp({
          quality: 85,
          method: 6 // Best compression
        })
      ]
    });
    
    // Create WebP versions of JPEG files
    console.log('📸 Converting JPEG files to WebP...');
    const jpegFiles = await imagemin([join(publicDir, '**/*.{jpg,jpeg}')], {
      destination: publicDir,
      plugins: [
        imageminWebp({
          quality: 85,
          method: 6
        })
      ]
    });

    console.log(`✅ Image optimization completed successfully!`);
    console.log(`📊 Processed ${pngFiles.length + jpegFiles.length} images`);
    console.log('💡 WebP versions created alongside original images');
    
  } catch (error) {
    console.error('❌ Image optimization failed:', error);
    process.exit(1);
  }
}

optimizeImages();
