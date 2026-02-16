import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Smartphone, Moon, Sun, Download, Menu, X, Award, Briefcase, Users, Coffee, Clock, TrendingUp, CheckCircle, Star, MessageSquare, BookOpen, Target, Zap, Heart } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const roles = ['Full-Stack Developer', 'React Specialist', 'MERN Stack Developer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const sections = [
          'home',
          'about',
          'education',
          'skills',
          'work',
          'services',
          'contact'
        ];

        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  useEffect(() => {
    const text = roles[roleIndex];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ye add kia
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);


  const downloadResume = () => {
  const pdfUrl = '/Pratham Resume.pdf'; // Make sure the PDF is in your public folder
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Pratham_Kumar_FullStack_Developer_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const projects = [
    {
      title: "Bright Futures for Every Child.",
      description: "EduInclude provides a safe and supportive learning environment where every child can grow at their own pace.Our modern teaching methods and activity-based classes help students build confidence, creativity, and discipline.",
      tech: ["Html", "Css","Javascript"],
      image: "https://t4.ftcdn.net/jpg/00/78/76/81/360_F_78768185_wfkQjxmgIioU9sJsd6hChu5WVkkgAPFx.jpg",
      live : "https://692eb93a31a1417171cd4b94--eduinclude.netlify.app/",
      features: ["Safe & Supportive Environment", "Modern Teaching Methods", 'Personalized Attention', 'Focus on Confidenc',]
    },
    {
      title: "Agency Web Application",
      description: "Modern agency website with interactive components and smooth animations. Built with React and Tailwind CSS for optimal performance.",
      tech: ["React", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      live: "https://agency-ai-gamma.vercel.app/",
      features: ["advertising",' content marketing',' content writing', 'social media management']
    },
    {
      title: "Holiday Web Application",
      description: "Holiday Bazar is a modern travel-booking portal crafted for both domestic and international adventure seekers. Featuring immersive hero-slides and intuitive navigation, the platform allows users to explore regions by country, holiday-type and tour-package..",
      tech: ["React", "Tailwind CSS"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS84IVZ5wmr1AmnYzqley-CA52ikLjYLvuLg&s",
      live: "https://holiday-web-zbat.vercel.app/",
      features: ["Homestays", "Gallery", "Hotel booking", "Flight booking"]
    }
  ];

  const skills = {
    frontend: ["React", "Javascript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Bootstrap"],
    backend: ["Node.js", "Express", "REST APIs", "JWT"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "Github", "VS Code", "npm", "Vercel"]
  };

  const education = [
    {
      degree: "Full-Stack Development Course",
      institution: "Dice Academy",
      location: "New Delhi",
      year: "2025",
      description: "Intensive bootcamp focused on modern web development with MERN stack",
      skills: ["JavaScript", "React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      icon: Code2
    },
    {
      degree: "Bachelor of Vocation",
      institution: "Rajiv Gandhi University",
      location: "Noida,India",
      year: "2020-23",
      description: "I have completed my Bachelor of Vocation (B.Voc), a skill-based professional degree focused on practical knowledge and industry-oriented training.",
      skills: ['Communication Skills', 'Problem Solving', 'Teamwork', 'Time Management'],
      icon: BookOpen
    }, 
  ];

  const experience = [
    {
      title: "Full Stack Student",
      company: "Dice Academy",
      period: "Feb 2025 - Dec 2025",
      description: "Intensive training program focused on full-stack development",
      achievements: [
        "Completed 10-month intensive bootcamp",
        "Built 3+ full-stack projects from scratch",
        "Collaborated on team projects using Agile",
        "Achieved top 10% performance in cohort"
      ],
      icon: Target
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: Code2,
      features: ["Responsive Design", "Modern UI/UX", "Fast Performance"]
    },
    {
      title: "Frontend Development",
      description: "Beautiful, interactive user interfaces using React",
      icon: Smartphone,
      features: ["React.js", "Tailwind CSS", "Animations", "Component Library"]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js",
      icon: Server,
      features: ["REST APIs", "Authentication"]
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web application development",
      icon: Database,
      features: ["MERN Stack", "Deployment", "Maintenance", "Support"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      company: "Local Business",
      content: "Pratham delivered an outstanding website for my business. His attention to detail and communication throughout the project was excellent. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Rahul Kumar",
      role: "Startup Founder",
      company: "Tech Startup",
      content: "Working with Pratham was a great experience. He understood our requirements perfectly and delivered a scalable solution. Will definitely work together again!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Anjali Verma",
      role: "Marketing Manager",
      company: "Digital Agency",
      content: "Pratham's technical skills and professionalism exceeded our expectations. The website he built is fast, responsive, and exactly what we needed.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    { icon: Coffee, value: "500+", label: "Cups of Coffee" },
    { icon: CheckCircle, value: "3+", label: "Projects Completed" },
    { icon: Users, value: "5+", label: "Happy Clients" },
    { icon: Clock, value: "1000+", label: "Hours Coded" }
  ];

  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
    : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100';
  
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const cardBgClass = darkMode ? 'bg-slate-800/50' : 'bg-white/80';
  const navBgClass = darkMode ? 'bg-slate-900/95' : 'bg-white/95';
  const borderClass = darkMode ? 'border-slate-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? `${navBgClass} backdrop-blur-sm shadow-lg` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Pratham
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Education', id: 'education' },
                { name: 'Skills', id: 'skills' },
                { name: 'Work', id: 'work' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-purple-400 transition-colors duration-300 font-medium text-sm ${
                    activeSection === item.id ? 'text-purple-400' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={downloadResume}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm"
              >
                <Download size={16} className="mr-2" />
                Resume
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden mt-4 py-4 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg`}>
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                // { name: 'Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Skills', id: 'skills' },
                { name: 'Work', id: 'work' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 hover:text-purple-400 transition-colors ${
                    activeSection === item.id ? 'text-purple-400' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="w-full mt-2 mx-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold flex items-center justify-center"
                style={{ width: 'calc(100% - 2rem)' }}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-1 ">
              <div className={`w-full h-full rounded-full ${darkMode ? 'bg-slate-800' : 'bg-white'} flex items-center justify-center`}>
                <Code2 size={48} className="text-purple-400" />
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-purple-400">Pratham</span>
            </h2>
            <div className="h-12 mb-6">
              <p className="text-2xl md:text-3xl text-purple-400 font-mono">
                {typedText}<span className="blink">|</span>
              </p>
            </div>  
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-8 max-w-3xl mx-auto`}>
              Crafting seamless digital experiences with the Full stack. 
              I turn ideas into elegant, scalable web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center"
              >
                <ExternalLink size={20} className="mr-2" />
                View Work
              </button>
              <button 
                onClick={downloadResume}
                className="px-8 py-3 border-2 border-pink-500 rounded-full font-semibold hover:bg-pink-500/10 transition-all duration-300 flex items-center"
              >
                <Download size={20} className="mr-2" />
                Resume
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm`}>
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">About Me</h3>
          <p className={`text-center ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardBgClass} rounded-2xl p-8 backdrop-blur-sm`}>
              <h4 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
                <Users className="mr-2" size={28} />
                Who I Am
              </h4>
              <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                I'm a passionate full-stack developer from India, with a strong foundation in the MERN stack. 
                My journey into web development started with curiosity and evolved into a deep love for creating 
                digital solutions that make a difference.
              </p>
              <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                As a recent Full-stack Developer of Dice Academy's, I bring fresh perspectives and 
                modern development practices to every project. I'm committed to writing clean, maintainable 
                code and staying up-to-date with the latest technologies.
              </p>
              <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed`}>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className={`${cardBgClass} rounded-2xl p-8 backdrop-blur-sm`}>
              <h4 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
                <Target className="mr-2" size={28} />
                What I Do
              </h4>
              <div className="space-y-4">
                {[
                  { icon: Code2, text: "Build responsive and user-friendly web interfaces with React" },
                  { icon: Server, text: "Develop robust RESTful APIs and backend systems with Node.js" },
                  { icon: Database, text: "Design and implement efficient database schemas with MongoDB" },
                  { icon: Zap, text: "Optimize application performance and user experience" },
                  { icon: Users, text: "Collaborate effectively using Git" },
                  { icon: TrendingUp, text: "Continuously learn and adapt to new technologies" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <item.icon className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className={darkMode ? 'text-slate-300' : 'text-gray-600'}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className={`py-20 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">Education</h3>
          <p className={`text-center ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            My academic background and learning journey
          </p>

          <div className="grid md:grid-cols-2  gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center`}>
                  <edu.icon size={32} className="text-white" />
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-2`}>{edu.location}</p>
                  <span className={`inline-block px-4 py-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full text-sm font-semibold`}>
                    {edu.year}
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-600'} text-center mb-4`}>
                  {edu.description}
                </p>
                {edu.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {edu.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">Technical Skills</h3>
          <p className={`text-center ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Technologies and tools I work with to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'} mr-3`}>
                  <Code2 className="text-purple-400" size={24} />
                </div>
                <h5 className="text-xl font-semibold">Frontend</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-400 transition-colors cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-500/20' : 'bg-green-100'} mr-3`}>
                  <Server className="text-green-400" size={24} />
                </div>
                <h5 className="text-xl font-semibold">Backend</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full text-sm hover:bg-green-500/20 hover:text-green-400 transition-colors cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-pink-500/20' : 'bg-pink-100'} mr-3`}>
                  <Database className="text-pink-400" size={24} />
                </div>
                <h5 className="text-xl font-semibold">Database</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full text-sm hover:bg-pink-500/20 hover:text-pink-400 transition-colors cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-orange-500/20' : 'bg-orange-100'} mr-3`}>
                  <Smartphone className="text-orange-400" size={24} />
                </div>
                <h5 className="text-xl font-semibold">Tools</h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-colors cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className={`py-20 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">Featured Projects</h3>
          <p className={`text-center ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            A showcase of my best work - from concept to deployment
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 shadow-lg group`}>
                <div className="h-48 bg-slate-700 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className={`${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-4 text-sm line-clamp-3`}>
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-purple-400 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, i) => (
                        <span key={i} className={`px-2 py-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded text-xs`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className={`py-20 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-white/30'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center">Services I Offer</h3>
          <p className={`text-center ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Comprehensive web development solutions tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-xl p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 text-center`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'} mb-4`}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <CheckCircle className="text-purple-400 mr-2" size={14} />
                      <span className={`text-xs ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
            Have a project in mind? I'm always excited to discuss new opportunities and collaborations.
          </p>
          <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-gray-500'} mb-12`}>
            Whether you need a complete web application, a stunning frontend, or a robust backend - I'm here to help bring your vision to life.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prathamk0801@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 ${
                darkMode ? 'bg-slate-800' : 'bg-white shadow-md'
              } rounded-full hover:bg-purple-500 hover:scale-110 transition-all duration-300`}
            >
              <Mail size={24} />
            </a>

            <a
              href="https://github.com/prathamk0801"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 ${
                darkMode ? 'bg-slate-800' : 'bg-white shadow-md'
              } rounded-full hover:bg-purple-500 hover:scale-110 transition-all duration-300`}
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/pratham-rajput-0b3921277/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 ${
                darkMode ? 'bg-slate-800' : 'bg-white shadow-md'
              } rounded-full hover:bg-purple-500 hover:scale-110 transition-all duration-300`}
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prathamk0801@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
            <button
              onClick={downloadResume}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>

          <div className={`mt-12 p-6 ${cardBgClass} rounded-xl backdrop-blur-sm`}>
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-red-400 mr-2" size={24} />
              <p className={`text-lg font-semibold`}>Open for Opportunities</p>
            </div>
            <p className={`${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Currently seeking full-time positions as a Full-Stack Developer, Frontend Developer, or Backend Developer. 
              Remote, hybrid, and on-site opportunities welcome!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${borderClass}`}>
        <div className={`max-w-6xl mx-auto`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-center md:text-left mb-4 md:mb-0 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              <p className="font-semibold mb-1">&copy; 2025 Pratham. All rights reserved.</p>
              <p className="text-sm">Built with React, Tailwind CSS & ❤️</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/prathamk0801"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-rajput-0b3921277/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
             
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prathamk0801@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className={`mt-6 pt-6 border-t ${borderClass} text-center text-sm ${darkMode ? 'text-slate-500' : 'text-gray-500'}`}>
            <p>Designed & Developed by Pratham | India</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection('home')}
          className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 z-40`}
          aria-label="Scroll to top"
        >
          <TrendingUp size={24} className="transform rotate-180" />
        </button>
      )}
    </div>
  );
}