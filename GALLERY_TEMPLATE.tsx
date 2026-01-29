import { Link } from "wouter";

export default function GalleryTemplate() {
  // Just add image file paths here - simple!
  const images = [
    "/assets/gallery/CATEGORY/image-1.jpg",
    "/assets/gallery/CATEGORY/image-2.jpg", 
    "/assets/gallery/CATEGORY/image-3.jpg",
    "/assets/gallery/CATEGORY/image-4.jpg",
    "/assets/gallery/CATEGORY/image-5.jpg",
    "/assets/gallery/CATEGORY/image-6.jpg",
    // Add as many as you want...
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-cream dark:bg-cream-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal dark:text-charcoal-light">ROOM NAME Designs</h1>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto mb-8">
              Browse our portfolio of custom ROOM NAME designs.
            </p>
            <Link href="/" className="text-gold hover:text-charcoal dark:hover:text-charcoal-light font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - Clean, no descriptions */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((imageSrc, index) => (
              <div key={index} className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Contact CTA */}
      <section className="py-20 md:py-28 bg-charcoal dark:bg-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Interested in Our Work?</h2>
            <p className="text-lg mb-8">
              Contact us to discuss your interior design project.
            </p>
            <div className="inline-flex items-center space-x-2 text-gold border-b-2 border-gold pb-1">
              <span className="text-lg font-medium">Get in touch below</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}