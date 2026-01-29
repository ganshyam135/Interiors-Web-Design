import HeroSection from "@/components/home/hero-section";
import IntroSection from "@/components/home/intro-section";
import { Link } from "wouter";

export default function Home() {

  return (
    <>
      <HeroSection />
      
      <IntroSection />
      
      {/* Interior Design Gallery */}
      <section id="interior-gallery" className="py-20 md:py-28 bg-cream dark:bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal dark:text-charcoal-light">Our Interior Design Work</h2>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto">
              Explore our diverse collection of interior design projects featuring TV units, kitchens, bedroom & wardrobe combinations, pooja rooms, crockery units, and study tables.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* 1. TV Unit */}
            <Link href="/gallery/tv-unit" className="group relative overflow-hidden bg-white dark:bg-lightgray-dark shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-square bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-charcoal dark:text-charcoal-light">TV Unit</h3>
                  <p className="text-sm text-darkgray dark:text-darkgray-light mt-1">Modern entertainment centers</p>
                </div>
              </div>
            </Link>

            {/* 2. Kitchen */}
            <Link href="/gallery/kitchen" className="group relative overflow-hidden bg-white dark:bg-lightgray-dark shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-square bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-charcoal dark:text-charcoal-light">Kitchen</h3>
                  <p className="text-sm text-darkgray dark:text-darkgray-light mt-1">Functional & beautiful kitchens</p>
                </div>
              </div>
            </Link>

            {/* 3. Bedroom & Wardrobe */}
            <Link href="/gallery/bedroom-wardrobe" className="group relative overflow-hidden bg-white dark:bg-lightgray-dark shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-square bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-charcoal dark:text-charcoal-light">Bedroom & Wardrobe</h3>
                  <p className="text-sm text-darkgray dark:text-darkgray-light mt-1">Complete bedroom solutions</p>
                </div>
              </div>
            </Link>

            {/* 4. Pooja Room */}
            <Link href="/gallery/pooja-room" className="group relative overflow-hidden bg-white dark:bg-lightgray-dark shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-square bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-charcoal dark:text-charcoal-light">Pooja Room</h3>
                  <p className="text-sm text-darkgray dark:text-darkgray-light mt-1">Sacred spiritual spaces</p>
                </div>
              </div>
            </Link>


            {/* 6. Crockery Unit */}
            <Link href="/gallery/crockery-unit" className="group relative overflow-hidden bg-white dark:bg-lightgray-dark shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-square bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-charcoal dark:text-charcoal-light">Crockery Unit</h3>
                  <p className="text-sm text-darkgray dark:text-darkgray-light mt-1">Elegant display & storage</p>
                </div>
              </div>
            </Link>

            {/* 7. Study & Office Tables */}
            <Link href="/gallery/study-office" className="group relative overflow-hidden bg-white dark:bg-lightgray-dark shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all cursor-pointer">
              <div className="aspect-square bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-charcoal dark:text-charcoal-light">Study & Office Tables</h3>
                  <p className="text-sm text-darkgray dark:text-darkgray-light mt-1">Productive workspaces & tables</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      
      {/* Client Satisfaction Stats */}
      <section id="client-satisfaction" className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal dark:text-charcoal-light">Client Satisfaction</h2>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto">
              At R.R Interiors, we measure our success by the satisfaction of our clients. Here's how we're performing:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-cream dark:bg-cream-dark p-10 shadow-lg dark:shadow-2xl">
              <div className="text-gold text-5xl font-bold mb-4">100%</div>
              <h3 className="text-xl font-serif mb-2 text-charcoal dark:text-charcoal-light">Client Satisfaction</h3>
              <p className="text-darkgray dark:text-darkgray-light">Our clients consistently rate their experience with us as excellent.</p>
            </div>
            
            <div className="bg-cream dark:bg-cream-dark p-10 shadow-lg dark:shadow-2xl">
              <div className="text-gold text-5xl font-bold mb-4">85%</div>
              <h3 className="text-xl font-serif mb-2 text-charcoal dark:text-charcoal-light">Repeat Clients</h3>
              <p className="text-darkgray dark:text-darkgray-light">Many of our clients return to us for multiple projects over the years.</p>
            </div>
            
            <div className="bg-cream dark:bg-cream-dark p-10 shadow-lg dark:shadow-2xl">
              <div className="text-gold text-5xl font-bold mb-4">90%</div>
              <h3 className="text-xl font-serif mb-2 text-charcoal dark:text-charcoal-light">Referrals</h3>
              <p className="text-darkgray dark:text-darkgray-light">A significant portion of our new clients come from referrals by satisfied customers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-charcoal dark:bg-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Transform Your Space Today</h2>
            <p className="text-lg mb-8">
              Ready to bring your vision to life? Contact us today for a consultation and let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
