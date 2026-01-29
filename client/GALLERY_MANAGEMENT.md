# 📸 Gallery Image Management Guide

## 🚀 How to Add New Images (Super Easy!)

When you add new images to any gallery, you only need to:

### 1. Upload Your Image
- Place your image in the correct folder: `/public/assets/gallery/[gallery-name]/`
- Name it following the pattern: `[gallery-name]-[number].jpg`
- Example: `bedroom-4.jpg`, `tv-unit-8.jpg`, `kitchen-1.jpg`

### 2. Update One File
- Open: `src/utils/galleryUtils.ts`
- Find the `GALLERY_IMAGES` object
- Add your new image number to the array

**Example:**
```typescript
const GALLERY_IMAGES = {
  'bedroom': [1, 2, 3, 4],  // ← Just add the new number!
  'tv-unit': [1, 2, 3, 4, 5, 6, 7, 8],  // ← Add 8 for tv-unit-8.jpg
  // etc...
}
```

### 3. That's It! 🎉
Your new image will automatically appear on the website!

---

## 📁 Current Gallery Status

### ✅ **Galleries With Your Images:**
- **TV Unit**: 7 images (tv-unit-1.jpg through tv-unit-7.jpg)
- **Bedroom**: 3 images (bedroom-1.jpg, bedroom-2.jpg, bedroom-3.jpg)
- **Pooja Room**: 1 image (pooja-room-1.jpg)

### 📷 **Galleries Ready for Your Images:**
- **Kitchen**: Ready - just upload kitchen-1.jpg, kitchen-2.jpg, etc.
- **Living Room**: Ready - just upload living-room-1.jpg, living-room-2.jpg, etc.
- **Study & Office**: Ready - just upload study-office-1.jpg, study-office-2.jpg, etc.
- **Wardrobe**: Ready - just upload wardrobe-1.jpg, wardrobe-2.jpg, etc.
- **Dining Room**: Ready - just upload dining-room-1.jpg, dining-room-2.jpg, etc.

---

## 🎯 Image Naming Convention

**Pattern:** `[gallery-name]-[number].jpg`

**Examples:**
```
✅ bedroom-1.jpg, bedroom-2.jpg, bedroom-3.jpg
✅ tv-unit-1.jpg, tv-unit-2.jpg, tv-unit-3.jpg
✅ kitchen-1.jpg, kitchen-2.jpg
✅ wardrobe-1.jpg, wardrobe-2.jpg
```

**Folder Structure:**
```
public/assets/gallery/
├── bedroom/
│   ├── bedroom-1.jpg
│   ├── bedroom-2.jpg
│   └── bedroom-3.jpg
├── tv-unit/
│   ├── tv-unit-1.jpg
│   ├── tv-unit-2.jpg
│   └── tv-unit-7.jpg
└── kitchen/
    ├── kitchen-1.jpg
    └── kitchen-2.jpg
```

---

## 📝 Quick Reference

**To add bedroom-4.jpg:**
1. Save image as `bedroom-4.jpg` in `/public/assets/gallery/bedroom/`
2. Edit `src/utils/galleryUtils.ts`
3. Change `'bedroom': [1, 2, 3]` to `'bedroom': [1, 2, 3, 4]`
4. Done! ✅

**To add your first kitchen image:**
1. Save image as `kitchen-1.jpg` in `/public/assets/gallery/kitchen/`
2. Edit `src/utils/galleryUtils.ts` 
3. Change `'kitchen': []` to `'kitchen': [1]`
4. Done! ✅

---

## 🖼️ Image Recommendations

- **Aspect Ratio**: 4:3 landscape (1600x1200, 2400x1800, etc.)
- **Format**: JPG
- **Size**: 1-3MB per image
- **Quality**: High quality, well-lit interior photos
- **Orientation**: Wide/landscape shots work best

---

## 🆘 Need Help?

If you add an image and it doesn't show up:
1. Check the image name matches the pattern exactly
2. Check you updated the number in `galleryUtils.ts`
3. Refresh the website
4. Check browser console for any errors