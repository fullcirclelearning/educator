import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-4 top-4 z-50 p-3 hover:bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          // X icon when menu is open
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon when menu is closed
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      <nav className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className="p-8 mt-16">
          <ul className="space-y-4">
            <li><a href="/" className="text-xl hover:text-gray-600">Home</a></li>
            <li><a href="/about-us" className="text-xl hover:text-gray-600">About Us</a></li>
            <li><a href="/why-set-up-a-training" className="text-xl hover:text-gray-600">Why Set Up a Training</a></li>
            <li><a href="/what-will-we-learn" className="text-xl hover:text-gray-600">What Will We Learn</a></li>
            <li><a href="/testimonials" className="text-xl hover:text-gray-600">Testimonials</a></li>
            <li><a href="/studies" className="text-xl hover:text-gray-600">Studies</a></li>
            <li><a href="/training-options" className="text-xl hover:text-gray-600">Training Options</a></li>
            <li><a href="/gallery" className="text-xl hover:text-gray-600">Gallery</a></li>
            <li><a href="/contact-us" className="text-xl hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}