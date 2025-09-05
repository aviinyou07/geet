const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Analyzing Next.js bundle...\n');

try {
  // First, run a clean build
  console.log('Building application...');
  execSync('npm run build', { 
    stdio: 'inherit'
  });
  
  console.log('\n✅ Bundle analysis complete!');
  console.log('\nKey areas to check:');
  console.log('1. Look for large dependencies in the vendor bundle');
  console.log('2. Check if code splitting is working effectively'); 
  console.log('3. Verify that unused code is being tree-shaken');
  console.log('4. Monitor the size of your page bundles');
  
  // Check if .next directory exists and show some stats
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    console.log('\n📈 Bundle Information:');
    
    // Get build directory size
    const getBundleSize = (dir) => {
      let size = 0;
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            size += getBundleSize(filePath);
          } else {
            size += stats.size;
          }
        }
      }
      return size;
    };
    
    const staticDir = path.join(nextDir, 'static');
    const bundleSize = getBundleSize(staticDir);
    
    console.log(`Total bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
  }
  
} catch (error) {
  console.error('❌ Bundle analysis failed:', error.message);
  
  console.log('\n💡 Troubleshooting tips:');
  console.log('1. Make sure you have @next/bundle-analyzer installed');
  console.log('2. Check your next.config.js configuration');
  console.log('3. Ensure all dependencies are properly installed');
  
  process.exit(1);
}
