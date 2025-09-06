// app/page.js
'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentRole, setCurrentRole] = useState('Full-Stack Developer');
  
  const roles = [
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Product Manager',
    'Data Scientist',
    'UI/UX Designer',
    'UX-Researcher'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = roles.indexOf(currentRole);
      const nextIndex = (currentIndex + 1) % roles.length;
      setCurrentRole(roles[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentRole]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-light mb-4 text-gray-300">Hello, I'm</h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-orange-500">Your Name</h2>
          
          {/* Role that changes every 3 seconds */}
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-400 transition-all duration-1000 ease-in-out">
            {currentRole}
          </h3>
          
          <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed">
            I craft digital experiences that blend{' '}
            <span className="text-orange-500 font-medium">beautiful design</span>{' '}
            with{' '}
            <span className="text-orange-500 font-medium">powerful technology</span>. 
            Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get In Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center">
            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.975.437-.975.975v1.35h2.325v1.5h-2.325v3.825h-1.5v-3.825h-2.325v-1.5h2.325v-1.35c0-.538.437-.975.975-.975h1.35v-1.5z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.13 0 2.064.925 2.064 2.063 0 1.139-.935 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 5.5c0-1.38-1.12-2.5-2.5-2.5H6c-1.38 0-2.5 1.12-2.5 2.5v13c0 1.38 1.12 2.5 2.5 2.5h12c1.38 0 2.5-1.12 2.5-2.5V5.5zM17.5 15.5H6.5V9h11v6.5zM17.5 7.5H6.5V5.5h11v2z"/>
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </main>

     
    </div>
  );
}