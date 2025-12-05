import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-stone-100/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Label */}
          <div className="md:col-span-4">
            <p className="text-stone-500 text-xs tracking-[0.3em] uppercase">About the Studio</p>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-snug">
              A small, private reformer Pilates studio in the heart of San Francisco
            </h2>
            
            <div className="space-y-4 text-stone-600 font-light leading-relaxed">
              <p>
                This isn't a big-box gym or a crowded group class. It's an intimate, 
                one-on-one reformer Pilates experience designed around <em>you</em>—your body, 
                your goals, your pace.
              </p>
              
              <p>
                With just a single reformer in a sun-filled private studio on Dolores Street, 
                every session is fully personalized. No distractions, no comparisons, 
                no rushing through movements. Just focused, intentional work that meets 
                you exactly where you are.
              </p>

              <p>
                Whether you're recovering from injury, building strength, improving posture, 
                or simply seeking a mindful movement practice—this space was created for 
                dedicated, transformative work.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-xs tracking-widest uppercase text-stone-500">
              <span className="border border-stone-300 px-4 py-2">Private Sessions Only</span>
              <span className="border border-stone-300 px-4 py-2">Single Reformer Studio</span>
              <span className="border border-stone-300 px-4 py-2">Personalized Approach</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

