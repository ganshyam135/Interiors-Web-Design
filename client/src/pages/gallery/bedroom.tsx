import { Link } from "wouter";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";
import { getGalleryImages } from "../../utils/galleryUtils";

export default function BedroomWardrobeGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const images = getGalleryImages('bedroom-wardrobe');

  return (
    <>
      <section className="bg-cream dark:bg-cream-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal dark:text-charcoal-light">Bedroom & Wardrobe Designs</h1>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto mb-8">
              Transform your private space with our integrated bedroom and wardrobe designs. Featuring custom storage solutions, premium fabrics, sophisticated lighting, and elegant finishes for the ultimate sanctuary.
            </p>
            <Link href="/" className="text-gold hover:text-charcoal dark:hover:text-charcoal-light font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((imageSrc, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={`Bedroom & Wardrobe Design ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Click indicator */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                    <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-charcoal dark:bg-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Love These Bedroom & Wardrobe Designs?</h2>
            <p className="text-lg mb-8">
              Experience the perfect blend of elegance, comfort, and organization. Contact us to create integrated bedroom and wardrobe solutions with premium materials, sophisticated finishes, and thoughtful storage design.
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

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          imageSrc={images[selectedImageIndex]}
          imageAlt={`Bedroom & Wardrobe Design ${selectedImageIndex + 1}`}
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
