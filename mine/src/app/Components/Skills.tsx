'use client';
import { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Settings, 
  Database, 
  Smartphone, 
  Cloud,
  GitBranch,
  Users
} from 'lucide-react';

// Define the type for a skill
interface Skill {
  name: string;
  level: number;
  category: string;
}

// Define the type for a skill category
interface SkillCategory {
  title: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { 
    forwardedRef?: React.Ref<SVGSVGElement> 
  }>;
  color: string;
  skills: Skill[];
}

// Define the type for the skill categories object
type SkillCategories = {
  engineering: SkillCategory;
  design: SkillCategory;
  product: SkillCategory;
  tools: SkillCategory;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<keyof SkillCategories>('engineering');

  const skillCategories: SkillCategories = {
    engineering: {
      title: 'Software Engineering',
      icon: Code2,
      color: 'primary',
      skills: [
        { name: 'TypeScript', level: 95, category: 'Language' },
        { name: 'React/Next.js', level: 92, category: 'Frontend' },
        { name: 'Node.js', level: 88, category: 'Backend' },
        { name: 'Python', level: 85, category: 'Language' },
        { name: 'GraphQL', level: 80, category: 'API' },
        { name: 'PostgreSQL', level: 82, category: 'Database' }
      ]
    },
    design: {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'secondary',
      skills: [
        { name: 'Figma', level: 94, category: 'Tool' },
        { name: 'User Research', level: 88, category: 'Process' },
        { name: 'Prototyping', level: 91, category: 'Process' },
        { name: 'Design Systems', level: 89, category: 'System' },
        { name: 'Adobe Creative', level: 82, category: 'Tool' },
        { name: 'Accessibility', level: 87, category: 'Standard' }
      ]
    },
    product: {
      title: 'Product Management',
      icon: Users,
      color: 'accent',
      skills: [
        { name: 'Product Strategy', level: 90, category: 'Strategy' },
        { name: 'User Analytics', level: 85, category: 'Analysis' },
        { name: 'Agile/Scrum', level: 88, category: 'Process' },
        { name: 'Roadmapping', level: 86, category: 'Planning' },
        { name: 'Stakeholder Mgmt', level: 84, category: 'Communication' },
        { name: 'Market Research', level: 80, category: 'Research' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'accent-warm',
      skills: [
        { name: 'Git/GitHub', level: 93, category: 'Version Control' },
        { name: 'Docker', level: 85, category: 'DevOps' },
        { name: 'AWS/Vercel', level: 82, category: 'Cloud' },
        { name: 'MongoDB', level: 80, category: 'Database' },
        { name: 'Jest/Testing', level: 87, category: 'Testing' },
        { name: 'CI/CD', level: 83, category: 'DevOps' }
      ]
    }
  };

  // Map category to emoji for tab buttons
  const getCategoryEmoji = (category: keyof SkillCategories) => {
    switch(category) {
      case 'engineering': return '💻';
      case 'design': return '🎨';
      case 'product': return '📊';
      case 'tools': return '⚙️';
      default: return '💻';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center bg-gray-800 border-b border-orange-500">
        <div className="text-orange-500 font-mono text-lg">
          {/* <YourName /> */}
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Home</a>
          <a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">About</a>
          <a href="/skills" className="text-orange-500 border-b-2 border-orange-500 font-medium">Skills</a>
          <a href="/projects" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Projects</a>
          <a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">Skills & Expertise</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit spanning engineering, design, and product management
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(skillCategories) as Array<keyof SkillCategories>).map((category) => {
            const { title } = skillCategories[category];
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{getCategoryEmoji(category)}</span>
                {title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-100">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.category}</p>
                    </div>
                    <span className="text-orange-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-12">Technologies I Work With</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Database size={32} />, name: 'Databases' },
              { icon: <Cloud size={32} />, name: 'Cloud Services' },
              { icon: <Smartphone size={32} />, name: 'Mobile Dev' },
              { icon: <GitBranch size={32} />, name: 'Version Control' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="w-24 h-24 bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-orange-500 hover:bg-gray-700 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <div className="mb-2 text-orange-500">
                  {tech.icon}
                </div>
                <div className="text-xs text-gray-400 text-center">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default Skills;