import React from 'react';
import { MapPin } from 'lucide-react';
import { STUDIO_ADDRESS } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Map Visual (Stylized) */}
        <div className="relative h-[400px] bg-stone-100 rounded-sm overflow-hidden">
             {/* We use an iframe for the map, styled to look monochromatic */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.0496736611326!2d-122.42845628867496!3d37.76547007187126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e224e78119b%3A0xf6508933486326e3!2s555%20Dolores%20St%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1714494191005!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
            ></iframe>
        </div>

        <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800">The Studio</h2>
            
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-stone-400 mt-1" />
                    <div>
                        <p className="text-lg font-medium text-stone-800 mb-2">Dolores Park</p>
                        <p className="text-stone-600 font-light">{STUDIO_ADDRESS}</p>
                        <p className="text-stone-500 text-sm mt-2 font-light">
                            Located just steps from Mission Dolores Park. 
                            Look for the sage green door.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
                <p className="text-stone-800 italic font-serif text-lg">
                    "A space designed for you to disconnect from the city and reconnect with yourself."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Location;