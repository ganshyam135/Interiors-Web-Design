# 📸 Gallery Image Upload Guide

## 🎯 **Quick Overview**
Your website now has 6 dynamic galleries that automatically display images you upload. Just add images to folders and update one configuration file!

---

## 📁 **Folder Structure Created**
```
src/assets/gallery/
├── tv-unit/                 (Gallery 1)
├── kitchen/                 (Gallery 2)
├── bedroom-wardrobe/        (Gallery 3)
├── pooja-room/              (Gallery 4)
├── crockery-unit/           (Gallery 5)
└── study-office/            (Gallery 6)
```

---

## 🚀 **How to Upload Images (2 Easy Steps)**

### **Step 1: Add Images to Folders**
Place your images in the appropriate gallery folder with this naming format:
- `[gallery-name]-1.jpg`
- `[gallery-name]-2.jpg` 
- `[gallery-name]-3.jpg`
- etc.

#### **Examples:**
- **TV Unit images:** `tv-unit-1.jpg`, `tv-unit-2.jpg`, `tv-unit-3.jpg`
- **Kitchen images:** `kitchen-1.jpg`, `kitchen-2.jpg`, `kitchen-3.jpg`
- **Bedroom & Wardrobe:** `bedroom-wardrobe-1.jpg`, `bedroom-wardrobe-2.jpg`
- **Pooja Room:** `pooja-room-1.jpg`, `pooja-room-2.jpg`
- **Crockery Unit:** `crockery-unit-1.jpg`, `crockery-unit-2.jpg`
- **Study Office:** `study-office-1.jpg`, `study-office-2.jpg`

### **Step 2: Update Configuration**
Open `src/utils/galleryUtils.ts` and update the number arrays:

```javascript
const GALLERY_IMAGES: { [key: string]: number[] } = {
  'tv-unit': [1, 2, 3, 4, 5],              // Add numbers for each image you uploaded
  'kitchen': [1, 2, 3],                    // Add numbers for each image you uploaded
  'bedroom-wardrobe': [1, 2, 3, 4],        // Add numbers for each image you uploaded
  'pooja-room': [1, 2],                    // Add numbers for each image you uploaded
  'crockery-unit': [1, 2, 3, 4, 5, 6],     // Add numbers for each image you uploaded
  'study-office': [1, 2, 3]               // Add numbers for each image you uploaded
};
```

---

## ✅ **Example: Adding TV Unit Images**

1. **Upload Files:**
   ```
   src/assets/gallery/tv-unit/
   ├── tv-unit-1.jpg
   ├── tv-unit-2.jpg
   ├── tv-unit-3.jpg
   ├── tv-unit-4.jpg
   └── tv-unit-5.jpg
   ```

2. **Update Configuration:**
   ```javascript
   'tv-unit': [1, 2, 3, 4, 5],
   ```

3. **Result:** Your TV Unit gallery will now show 5 images automatically! ✨

---

## 📏 **Image Specifications**

### **Recommended:**
- **Aspect Ratio:** 4:3 (landscape) for best display
- **Resolution:** 1200x900px or higher
- **Format:** `.jpg` or `.jpeg` (preferred)
- **Size:** Under 2MB per image for fast loading

### **Supported Formats:**
- `.jpg` / `.jpeg` ✅
- `.png` ✅
- `.webp` ✅

---

## 🎨 **Gallery Layout**
- **Mobile:** 1 column
- **Tablet:** 2-3 columns  
- **Desktop:** 4 columns
- **All images maintain 4:3 aspect ratio automatically**

---

## 🔄 **Dynamic Features**
- ✅ **Auto-scaling:** Images resize perfectly on all devices
- ✅ **Modal viewer:** Click any image for fullscreen view
- ✅ **Navigation:** Arrow keys and buttons to browse images
- ✅ **Hover effects:** Professional click indicators
- ✅ **Dark mode:** Images look great in both light and dark themes

---

## 📝 **Current Configuration Status**
```javascript
// Current setup (in galleryUtils.ts):
const GALLERY_IMAGES: { [key: string]: number[] } = {
  'tv-unit': [1, 2, 3, 4, 5, 6, 7],        // Has 7 images ready
  'bedroom-wardrobe': [1, 2, 3, 4],        // Has 4 images ready  
  'pooja-room': [1],                       // Has 1 image ready
  'kitchen': [1, 2, 3, 4, 5, 6, 7, 8],     // Has 8 images ready
  'crockery-unit': [],                     // NEEDS YOUR IMAGES! 
  'study-office': []                       // NEEDS YOUR IMAGES!
};
```

---

## 🎯 **Quick Actions Needed**

### **Galleries Ready for Your Images:**
1. **Crockery Unit** - Add `crockery-unit-1.jpg`, `crockery-unit-2.jpg`, etc.
2. **Study Office** - Add `study-office-1.jpg`, `study-office-2.jpg`, etc.

### **Galleries That May Need More Images:**
3. **Pooja Room** - Currently has 1 image, you can add more
4. **Kitchen, TV Unit, Bedroom** - Already configured, just replace/add if needed

---

## 🚨 **Important Notes**
- **File Names:** Must be exact! `tv-unit-1.jpg` not `TV-Unit-1.JPG`
- **No Spaces:** Use hyphens, not spaces in filenames
- **Sequential:** Numbers should be sequential (1, 2, 3, 4...)
- **Update Config:** Always update `galleryUtils.ts` after adding images

---

## 🆘 **Troubleshooting**
- **Images not showing?** Check file names match exactly
- **Only placeholders?** Update the numbers in `galleryUtils.ts`
- **Wrong aspect ratio?** Images will auto-crop to 4:3, ensure important content is centered

---

## 🎉 **That's It!**
Your galleries are now fully dynamic and ready for your beautiful interior design images! Just follow the 2-step process whenever you want to add new images.