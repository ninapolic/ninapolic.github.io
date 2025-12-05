import React from 'react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, STUDIO_EMAIL } from '../constants';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0">
        
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-2xl font-serif text-stone-50 uppercase tracking-widest">Nina Pilates</h3>
          <p className="text-xs tracking-wider text-stone-500 uppercase">San Francisco, CA</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-white transition-colors">
                    <Mail size={20} strokeWidth={1.5} />
                </a>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-stone-500 text-xs font-light hover:text-white transition-colors">
                {INSTAGRAM_HANDLE}
            </a>
            <p className="text-stone-600 text-[10px] tracking-widest uppercase mt-8">
                © {new Date().getFullYear()} Nina Pilates. All Rights Reserved.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;