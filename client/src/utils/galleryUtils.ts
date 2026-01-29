// ========================================
// GALLERY IMAGES CONFIGURATION (6 GALLERIES)
// ========================================
// TO ADD IMAGES: 
// 1. Upload images to src/assets/gallery/[gallery-name]/ with format: [gallery-name]-1.jpg, [gallery-name]-2.jpg, etc.
// 2. Update the number arrays below to match your uploaded images
// Example: If you upload tv-unit-1.jpg, tv-unit-2.jpg, tv-unit-3.jpg, set 'tv-unit': [1, 2, 3]

const GALLERY_IMAGES: { [key: string]: number[] } = {
  // ===== YOUR 6 GALLERIES =====
  'tv-unit': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ],        // Upload: tv-unit-1.jpg, tv-unit-2.jpg, etc. to /tv-unit/ folder
  'kitchen': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],     // Upload: kitchen-1.jpg, kitchen-2.jpg, etc. to /kitchen/ folder
  'bedroom-wardrobe': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ],        // Upload: bedroom-wardrobe-1.jpg, bedroom-wardrobe-2.jpg, etc. to /bedroom-wardrobe/ folder
  'pooja-room': [1, 2, 3, 4, 5, 6,],                       // Upload: pooja-room-1.jpg, pooja-room-2.jpg, etc. to /pooja-room/ folder
  'crockery-unit': [1, 2, 3, 4, 5, 6,],                     // Upload: crockery-unit-1.jpg, crockery-unit-2.jpg, etc. to /crockery-unit/ folder
  'study-office': []                       // Upload: study-office-1.jpg, study-office-2.jpg, etc. to /study-office/ folder
};

// Utility function to get gallery images
export function getGalleryImages(galleryName: string): string[] {
  const imageNumbers = GALLERY_IMAGES[galleryName] || [];
  return imageNumbers.map(num => `/assets/gallery/${galleryName}/${galleryName}-${num}.jpg`);
}

// Alternative approach: Use placeholder images for galleries without real images
export function getGalleryImagesWithPlaceholders(galleryName: string): string[] {
  const realImages = getGalleryImages(galleryName);
  
  if (realImages.length > 0) {
    return realImages;
  }

  // Return placeholder images if no real images exist
  return [
    `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`
  ];
}