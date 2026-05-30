import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-gray-950 text-white z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] py-1">
      <div className="container mx-auto px-1 flex flex-wrap py-2 gap-2 sm:gap-3"> 
    
        <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
          تماشا تلویزیون
        </a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
          اپلیکیشن‌ها
        </a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
          تماس و پشتیبانی
        </a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
          فروشگاه
        </a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
          سایر لینک‌ها
        </a>
      </div>
    </footer>
  );
}
