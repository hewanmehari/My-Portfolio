// components/Navbar.js
'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-800 border-b border-orange-800 shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="text-orange-500 font-mono text-lg">
        {/* <YourName /> */}
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-300 hover:text-orange-500 focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu}></div>
      )}
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-700 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-orange-500 font-mono text-lg">
              {/* <YourName /> */}
            </div>
            <button 
              className="text-gray-300 hover:text-orange-500 focus:outline-none"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg font-medium py-2 border-b border-gray-800 hover:border-orange-500"
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Optional: Add social icons or contact info in mobile menu */}
          <div className="mt-auto pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Your Name</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;