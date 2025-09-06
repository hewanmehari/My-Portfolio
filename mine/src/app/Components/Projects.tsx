// app/projects/page.js
'use client';
import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Sustainability Dashboard',
      category: 'FULL-STACK APPLICATION',
      description: 'A comprehensive platform for tracking environmental impact and sustainability metrics. Features real-time data visualization, goal setting, and team collaboration tools.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        'Built for 10,000+ users',
        'Mobile-responsive design',
        'Real-time analytics',
        'AWS cloud infrastructure'
      ]
    },
    {
      id: 2,
      title: 'DesignSystem Pro',
      category: 'UI/UX DESIGN SYSTEM',
      description: 'A comprehensive design system with 100+ components, extensive documentation, and automated design tokens. Used across multiple products and teams.',
      technologies: ['Figma', 'React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        '100+ reusable components',
        'Automated design tokens',
        'Complete documentation',
        'Multi-brand support'
      ]
    },
    {
      id: 3,
      title: 'TaskFlow - Project Management',
      category: 'PRODUCT MANAGEMENT',
      description: 'Led product strategy and development for a next-generation project management tool. Increased user engagement by 150% and reduced churn by 40%.',
      technologies: ['Product Strategy', 'User Research', 'Analytics', 'A/B Testing'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: [
        '150% increase in engagement',
        '40% reduction in churn',
        'Cross-functional team leadership',
        'Data-driven decisions'
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

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
          <a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">About</a>
          <a href="/skills" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Skills</a>
          <a href="/projects" className="text-orange-500 border-b-2 border-orange-500 font-medium">Projects</a>
          <a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">Featured Projects</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of projects spanning engineering, design, and product management
          </p>
        </div>

        {/* Project Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Project Image */}
              <div className="flex-1 relative">
                <div className="w-full h-80 lg:h-full bg-gradient-to-br from-orange-700/20 to-orange-900/20 rounded-xl flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {project.id}
                    </div>
                  </div>
                  <div className="text-center text-gray-400 text-sm mt-4">Project Preview</div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-sm uppercase tracking-wider text-orange-500 font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                  {project.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Key Highlights:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-orange-500 transition-colors duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.liveUrl}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.githubUrl}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}