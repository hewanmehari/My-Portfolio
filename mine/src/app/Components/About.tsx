'use client';
import { useState, useEffect } from 'react';

export default function About() {
  // Simulate loading state for better UX
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Skills data
  const skills = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Design Thinking",
      description: "Creating user-centered designs that solve real problems"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Team Leadership",
      description: "Leading cross-functional teams to deliver exceptional products"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1 12H8v-2h4v2zm0-4H8V9h4v4z"/>
        </svg>
      ),
      title: "Innovation",
      description: "Staying ahead of the curve with cutting-edge technologies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center bg-gray-800 border-b border-orange-800">
        <div className="text-orange-500 font-mono text-lg">
          {/* <YourName /> */}
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Home</a>
          <a href="/about" className="text-orange-500 border-b-2 border-orange-500 font-medium">About</a>
          <a href="/skills" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Skills</a>
          <a href="/projects" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Projects</a>
          <a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">About Me</h1>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate technologist who thrives at the intersection of 
                <span className="text-orange-500 font-semibold"> engineering excellence</span>, 
                <span className="text-orange-500 font-semibold"> design innovation</span>, and 
                <span className="text-orange-500 font-semibold"> product strategy</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                With over <span className="text-orange-500 font-semibold">5+ years</span> of experience building digital products, I've had the privilege of working with startups and established companies to transform ideas into impactful solutions.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or designing, you'll find me exploring new technologies, contributing to open source, or mentoring the next generation of developers.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm text-gray-400">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-orange-100">{skill.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                "Great products are born from the perfect harmony of 
                <span className="text-orange-500 font-semibold"> technical excellence</span>, 
                <span className="text-orange-500 font-semibold"> thoughtful design</span>, and 
                <span className="text-orange-500 font-semibold"> user empathy</span>."
              </p>
              <p className="text-sm text-gray-500 italic">— My Design Philosophy</p>
            </blockquote>
          </div>
        </div>
      </main>

     
    </div>
  );
}