import { Link } from "wouter";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";
import { getGalleryImagesWithPlaceholders } from "../../utils/galleryUtils";

export default function StudyOfficeGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const images = getGalleryImagesWithPlaceholders('study-office');

  return (
    <>
      <section className="bg-cream dark:bg-cream-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal dark:text-charcoal-light">Study & Office Table Designs</h1>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto mb-8">
              Create productive workspaces with our custom study tables and office furniture designed for comfort and efficiency.
            </p>
            <Link href="/" className="text-gold hover:text-charcoal dark:hover:text-charcoal-light font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Study & Office Table Design ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal dark:bg-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Love These Study & Office Table Designs?</h2>
            <p className="text-lg mb-8">
              Get in touch with us to create custom study and office tables that boost productivity and enhance your workspace.
            </p>
            <div className="inline-flex items-center space-x-2 text-gold border-b-2 border-gold pb-1">
              <span className="text-lg font-medium">Contact details below</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          imageSrc={images[selectedImageIndex]}
          imageAlt={`Study & Office Table Design ${selectedImageIndex + 1}`}
          onClose={() => setSelectedImageIndex(null)}
          onPrevious={selectedImageIndex > 0 ? () => setSelectedImageIndex(selectedImageIndex - 1) : undefined}
          onNext={selectedImageIndex < images.length - 1 ? () => setSelectedImageIndex(selectedImageIndex + 1) : undefined}
          hasPrevious={selectedImageIndex > 0}
          hasNext={selectedImageIndex < images.length - 1}
        />
      )}
    </>
  );
}
