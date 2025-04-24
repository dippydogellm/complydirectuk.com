const fs = require('fs');
const path = require('path');

// Simple flame icon SVG
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
  <path fill="#FF0000" d="M12 2C9.5 4.5 8 7 8 10c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3-1.5-5.5-4-8-1.5 1.5-2.5 2.5-4 4-1.5-1.5-2.5-2.5-4-4z"/>
</svg>
`;

// Convert SVG to PNG using sharp
const sharp = require('sharp');

async function generateIcons() {
  const publicDir = path.join(__dirname, '../public');
  
  // Generate favicon.ico (multi-size)
  await sharp(Buffer.from(svgIcon))
    .resize(32, 32)
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  
  await sharp(Buffer.from(svgIcon))
    .resize(16, 16)
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // Generate apple-touch-icon.png
  await sharp(Buffer.from(svgIcon))
    .resize(180, 180)
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate android-chrome icons
  await sharp(Buffer.from(svgIcon))
    .resize(192, 192)
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  
  await sharp(Buffer.from(svgIcon))
    .resize(512, 512)
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

  // Generate manifest.json
  const manifest = {
    name: 'Comply Direct UK',
    short_name: 'Comply Direct',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#FF0000',
    background_color: '#ffffff',
    display: 'standalone'
  };

  fs.writeFileSync(
    path.join(publicDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('Icons and manifest generated successfully!');
}

generateIcons().catch(console.error); 