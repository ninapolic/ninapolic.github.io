import React from 'react';
import { NINA_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-5 flex flex-col space-y-8 order-2 md:order-1 fade-in">
          <div className="space-y-4">
            <p className="text-stone-500 text-xs tracking-[0.3em] uppercase">San Francisco • Private Studio</p>
            <h1 className="text-5xl md:text-7xl text-stone-900 leading-[1.1] font-medium font-serif">
              Strength <br />
              <span className="italic font-light">in</span> Stillness
            </h1>
          </div>
          
          <p className="text-stone-600 font-light leading-relaxed max-w-sm">
            Experience a modern approach to classic Pilates. 
            Tailored movement to sculpt, lengthen, and restore balance to your body 
            in a private, sun-drenched sanctuary on Dolores Street.
          </p>

          <div className="pt-4">
            <a 
                href="#schedule" 
                className="inline-block border border-stone-800 px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-stone-800 hover:text-stone-50"
            >
                View Schedule
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:col-span-7 relative h-[500px] md:h-[700px] order-1 md:order-2">
            <div className="absolute inset-0 bg-stone-200 rounded-sm overflow-hidden fade-in shadow-xl">
                 <img 
                    src={NINA_IMAGE_URL} 
                    alt="Nina Pilates Instructor" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                 />
                 <div className="absolute inset-0 bg-stone-900/5 pointer-events-none"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-stone-300 -z-10 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;