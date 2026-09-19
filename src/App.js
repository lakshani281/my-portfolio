import React, { useState, useEffect } from 'react';
import { 
  Briefcase, User, 
  GraduationCap, Trophy, Award, Phone, MapPin, Sparkles, Layout, X, Send, Download,
  Sparkle, Terminal, Server, Wrench, Cpu, AlertTriangle, Radio, CheckCircle2, ExternalLink,
  Copy, Mail, Check
} from 'lucide-react';

// Custom SVG Icons for LinkedIn, GitHub, and Medium
const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const MediumIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic Typing Effect States
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const roles = [
      "Passionate Software Engineer",
      "Innovative Full-Stack Developer",
      "Creative UI/UX Engineer"
    ];

    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-teal-500 selection:text-slate-900 scroll-smooth">
      
      {/* Background Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl z-40 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Lakshani Kaveesha
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#achievements" className="hover:text-teal-400 transition">Achievements</a>
            <a href="#certifications" className="hover:text-teal-400 transition">Certifications</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6 max-w-6xl mx-auto pt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full py-12">
          
          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="min-h-[140px] md:min-h-[160px]">
              <h1 className="text-3xl md:text-5xl font-black text-slate-100 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Lakshani Kaveesha</span>
              </h1>
              
              <div className="mt-3 text-xl md:text-3xl font-bold flex items-center h-12 flex-wrap">
                <span className="text-slate-300 mr-2.5 font-medium">I am a</span>
                <span className="text-teal-400">{currentText}</span>
                <span className="ml-1 w-1 h-7 bg-teal-400 animate-pulse"></span>
              </div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Engineering robust full-stack web & mobile applications with clean architecture and intuitive, human-centered UI/UX design.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="/Lakshani_Kaveesha_CV.pdf" 
                download="Lakshani_Kaveesha_CV.pdf"
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-teal-500/25 flex items-center gap-2 hover:-translate-y-1"
              >
                <Download size={18} /> Download CV
              </a>

              <a 
                href="#projects" 
                className="px-7 py-3.5 bg-slate-900 border border-slate-700 hover:border-teal-500/50 text-slate-200 font-semibold rounded-xl transition hover:-translate-y-1"
              >
                Explore Projects
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-300 text-xs rounded-lg transition flex items-center gap-2 hover:text-teal-400"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a 
                href="https://github.com/lakshani281" 
                target="_blank" 
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-300 text-xs rounded-lg transition flex items-center gap-2 hover:text-teal-400"
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a 
                href="https://medium.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-300 text-xs rounded-lg transition flex items-center gap-2 hover:text-teal-400"
              >
                <MediumIcon size={15} /> Medium
              </a>
            </div>
          </div>

          {/* Profile Photo Frame */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-3xl overflow-hidden border border-slate-700/80 flex items-center justify-center">
              <img 
                src="/images/profile.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60"; }}
                alt="Lakshani Kaveesha" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="relative z-10 py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-3 text-slate-100 mb-3">
            <User className="text-teal-400" /> About Me
          </h2>
          <span className="text-xs font-mono px-3.5 py-1.5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-300 rounded-full border border-teal-500/30 inline-flex items-center gap-2 shadow-inner">
            <Sparkle size={14} className="animate-spin text-teal-400" /> Software Engineering & UI/UX
          </span>
        </div>

        {/* Centered Main Description Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 p-8 md:p-10 rounded-3xl border border-slate-800/90 backdrop-blur-xl relative overflow-hidden group hover:border-teal-500/40 transition duration-500 shadow-2xl">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10 text-center md:text-left">
              <p className="text-slate-200 leading-relaxed text-base md:text-lg bg-slate-950/40 p-6 rounded-2xl border border-slate-800/60 shadow-inner">
                I am a <span className="text-teal-300 font-bold">Computing & Information Systems undergraduate</span> passionate about crafting seamless end-to-end digital architectures. My focus centers on building reliable backend systems and pairing them with intuitive frontend user flows.
              </p>

              <p className="text-slate-300 leading-relaxed text-base md:text-lg bg-slate-950/40 p-6 rounded-2xl border border-slate-800/60 shadow-inner">
                From designing structured database models and optimizing REST APIs to interactive Figma prototyping, I am driven by <span className="text-blue-300 font-bold">clean OOP principles</span>, performance, and responsive user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Creative Education & Academic Track */}
        <div className="pt-8 border-t border-slate-800/60">
          <h3 className="text-xl font-bold text-slate-100 flex items-center justify-center gap-2.5 mb-8 text-center">
            <GraduationCap className="text-blue-400" size={24} /> Education & Academic Track
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Degree Card */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 transition duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-teal-400 to-blue-500"></div>
              <div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-teal-500/10 text-teal-300 rounded-md border border-teal-500/20 mb-3 inline-block">
                  2024 – Present
                </span>
                <h4 className="text-lg font-bold text-slate-100 mb-1">BSc (Hons) in Computing & Information Systems</h4>
                <p className="text-xs text-teal-400 font-medium mb-4">Sabaragamuwa University of Sri Lanka</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-2">
                <span className="text-xs text-slate-400 font-mono">Current GPA: <strong className="text-slate-100">3.2</strong></span>
                <span className="text-[11px] text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Degree Candidate</span>
              </div>
            </div>

            {/* Advanced Level Card */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition duration-300 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-blue-500 to-slate-700"></div>
              <div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700 mb-3 inline-block">
                  2020 – 2022
                </span>
                <h4 className="text-lg font-bold text-slate-100 mb-1">G.C.E. Advanced Level - Physical Science</h4>
                <p className="text-xs text-slate-400 font-medium mb-4">H/Ruhunu Vijayaba College</p>
              </div>
              <div className="border-t border-slate-800/80 pt-4 mt-2">
                <span className="text-xs text-slate-400 font-mono">Stream: Physical Science</span>
              </div>
            </div>

          </div>

          <div className="max-w-2xl mx-auto mt-6 p-4 bg-gradient-to-r from-teal-500/10 via-slate-900 to-blue-500/10 rounded-2xl border border-slate-800 text-xs text-slate-300 text-center shadow-inner">
            💡 <strong className="text-teal-300">Academic Focus:</strong> Systems Analysis & Design • Software Architecture • Database Management • HCI
          </div>

        </div>
      </section>

      {/* TECHNICAL EXPERTISE SECTION */}
      <section id="skills" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
            <Cpu size={14} className="animate-spin text-teal-400" /> Core Tech Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight">
            Technical <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">Comprehensive breakdown of programming languages, frameworks, and tools.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Languages & Core", 
              subtitle: "Foundational Code Skills",
              icon: <Terminal size={24} className="text-blue-400" />, 
              accent: "border-blue-500/30 group-hover:border-blue-400",
              gradient: "from-blue-500/10 via-slate-900/80 to-slate-950",
              skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'PHP'] 
            },
            { 
              title: "Frontend & Mobile", 
              subtitle: "UI Architectures & App Dev",
              icon: <Layout size={24} className="text-teal-400" />, 
              accent: "border-teal-500/30 group-hover:border-teal-400",
              gradient: "from-teal-500/10 via-slate-900/80 to-slate-950",
              skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'] 
            },
            { 
              title: "Backend & Databases", 
              subtitle: "APIs, Servers & Data Architecture",
              icon: <Server size={24} className="text-purple-400" />, 
              accent: "border-purple-500/30 group-hover:border-purple-400",
              gradient: "from-purple-500/10 via-slate-900/80 to-slate-950",
              skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'MySQL', 'MongoDB', 'PostgreSQL', 'Socket.io'] 
            },
            { 
              title: "Tools & Concepts", 
              subtitle: "DevOps, Security & Design Kits",
              icon: <Wrench size={24} className="text-amber-400" />, 
              accent: "border-amber-500/30 group-hover:border-amber-400",
              gradient: "from-amber-500/10 via-slate-900/80 to-slate-950",
              skills: ['Git', 'GitHub', 'Docker', 'OOP', 'JWT', 'Postman', 'Figma', 'Photoshop', 'Maps API'] 
            }
          ].map((cat, idx) => (
            <div key={idx} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${cat.gradient} border ${cat.accent} transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between`}>
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-teal-400/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl group-hover:rotate-6 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map(s => (
                    <span key={s} className="px-3.5 py-1.5 bg-slate-950/90 text-slate-200 text-xs font-semibold rounded-xl border border-slate-800/90 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-slate-950 hover:border-transparent transition-all duration-300 shadow-md cursor-default transform hover:scale-105">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-3 text-slate-100">
            <Briefcase className="text-teal-400" /> Featured Projects
          </h2>
          <span className="text-xs font-mono text-slate-400 border border-slate-800 px-3 py-1 rounded-full bg-slate-900">
            Real-World Solutions
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "EmergencyX",
              subtitle: "Real-Time Emergency Response Platform (Ongoing)",
              desc: "Developing a location-aware full-stack response platform connecting citizens, volunteers, and teams. Features SOS alerts, incident reporting, interactive maps, and Socket.io communication.",
              tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Maps API', 'Tailwind', 'JWT'],
              img: "/images/emergencyx.jpg.png",
              githubLink: "https://github.com/lakshani281",
              fallback: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&auto=format&fit=crop&q=60",
              isOngoing: true,
              fitMode: "object-contain"
            },
            {
              title: "Lumora Clothing",
              subtitle: "Full-Stack E-Commerce Platform",
              desc: "Full-stack e-commerce store with dynamic product catalog filtering, role-based Admin Dashboard, persistent cart, and JWT checkout workflows.",
              tech: ['TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'JWT'],
              img: "/images/lumora.jpg.png",
              githubLink: "https://github.com/lakshani281",
              fallback: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60",
              isOngoing: false,
              fitMode: "object-cover"
            },
            {
              title: "CareVision LK",
              subtitle: "AI Patient Monitoring System",
              desc: "Centralized React dashboard for real-time patient safety alerts, multi-camera feeds, computer vision (YOLOv8/OpenCV), and FastAPI integration.",
              tech: ['React.js', 'Python', 'FastAPI', 'MySQL', 'OpenCV', 'YOLOv8'],
              img: "/images/carevision.jpg.png",
              githubLink: "https://github.com/lakshani281",
              fallback: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60",
              isOngoing: false,
              fitMode: "object-cover"
            },
            {
              title: "SafeRide",
              subtitle: "School Van Transport & Safety System",
              desc: "Cross-platform mobile app using React Native for real-time GPS fleet tracking, speed threshold alerts, dynamic route summaries, and RBAC.",
              tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'GPS'],
              img: "/images/saferide.jpg.png",
              githubLink: "https://github.com/lakshani281",
              fallback: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60",
              isOngoing: false,
              fitMode: "object-contain"
            },
            {
              title: "DevGuard AI",
              subtitle: "AI Secure Code Review Platform",
              desc: "AI security dashboard integrating Semgrep static analysis with OpenAI API for automated vulnerability explanations and PostgreSQL tracking.",
              tech: ['FastAPI', 'React.js', 'TypeScript', 'PostgreSQL', 'Semgrep', 'Docker'],
              img: "/images/devguard.jpg.png",
              githubLink: "https://github.com/lakshani281",
              fallback: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
              isOngoing: false,
              fitMode: "object-cover"
            }
          ].map((proj, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="h-64 bg-slate-950 overflow-hidden relative p-2 flex items-center justify-center border-b border-slate-800/80">
                  <img 
                    src={proj.img} 
                    onError={(e) => { e.target.src = proj.fallback; }} 
                    alt={proj.title} 
                    className={`w-full h-full ${proj.fitMode} rounded-lg group-hover:scale-105 transition-transform duration-500`} 
                  />
                  
                  {proj.isOngoing && (
                    <div className="absolute top-4 right-4 bg-red-500/20 border border-red-500/40 backdrop-blur-md text-red-400 text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5 font-bold animate-pulse shadow-lg">
                      <Radio size={12} className="text-red-400" /> ONGOING
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                      {proj.title}
                      {proj.isOngoing && <AlertTriangle size={18} className="text-amber-400" />}
                    </h3>
                  </div>
                  <p className="text-xs text-blue-400 font-semibold mb-3 mt-1">{proj.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] px-2.5 py-1 bg-slate-950 text-slate-300 rounded-md border border-slate-800 font-mono">{t}</span>
                  ))}
                </div>
                <a 
                  href={proj.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm font-semibold text-teal-400 hover:underline inline-flex items-center gap-1.5"
                >
                  View Source Code <GithubIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 scroll-mt-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4">
            <Trophy size={14} className="animate-bounce text-amber-400" /> Honors & Awards
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight">
            Key <span className="bg-gradient-to-r from-amber-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">Recognition from competitive hackathons, designathons, and academic writing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Grand Finalist", 
              event: "HACKORA Hackathon 2026", 
              tag: "Hackathon",
              highlight: "Top Performing Team",
              border: "border-amber-500/40 hover:border-amber-400",
              glow: "from-amber-500/10 via-slate-900 to-slate-950",
              link: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              title: "1st Runner-Up", 
              event: "Xmasora Inter-University Flyer Competition 2025", 
              tag: "Design Competition",
              highlight: "Silver Award Winner",
              border: "border-teal-500/40 hover:border-teal-400",
              glow: "from-teal-500/10 via-slate-900 to-slate-950",
              link: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              title: "Semi-Finalist", 
              event: "Hack Like a Girl 3.0", 
              tag: "Women in Tech",
              highlight: "National Level",
              border: "border-purple-500/40 hover:border-purple-400",
              glow: "from-purple-500/10 via-slate-900 to-slate-950",
              link: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              title: "Most Popular Article Award", 
              event: "Edify Article Competition 2025", 
              tag: "Academic Writing",
              highlight: "Highest Reader Engagement",
              border: "border-blue-500/40 hover:border-blue-400",
              glow: "from-blue-500/10 via-slate-900 to-slate-950",
              link: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              title: "Top 20 Finalist Team", 
              event: "CRYPTX Designathon Competition", 
              tag: "UI/UX Design",
              highlight: "Prototype Showcase",
              border: "border-emerald-500/40 hover:border-emerald-400",
              glow: "from-emerald-500/10 via-slate-900 to-slate-950",
              link: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            }
          ].map((item, idx) => (
            <div key={idx} className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.glow} border ${item.border} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-lg flex flex-col justify-between group`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-teal-300 font-semibold">
                    {item.tag}
                  </span>
                  <Sparkles size={16} className="text-amber-400 group-hover:rotate-12 transition-transform" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-100 group-hover:text-amber-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">{item.event}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {item.highlight}
                </span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-semibold text-teal-400 inline-flex items-center gap-1 hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  View Post <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80 scroll-mt-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
            <Award size={14} className="text-teal-400" /> Verified Credentials
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight">
            Professional <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">Continuous technical skill validation across modern tech platforms.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              name: "ReactJS Projects for Beginners", 
              org: "Simplilearn", 
              domain: "Frontend Architecture", 
              code: "SIMPLI-RCT26",
              credentialLink: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              name: "Mastering Video Editing with AI", 
              org: "Udemy", 
              domain: "AI & Multimedia", 
              code: "UDEMY-AI25",
              credentialLink: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              name: "Code Java in 5 Hours", 
              org: "Udemy", 
              domain: "Software Development", 
              code: "UDEMY-JV25",
              credentialLink: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              name: "Photoshop & E-Business", 
              org: "Royal ICT", 
              domain: "Digital Design & Business", 
              code: "ROYAL-ICT24",
              credentialLink: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              name: "Introduction to Golang", 
              org: "Simplilearn", 
              domain: "Backend Engineering", 
              code: "SIMPLI-GO25",
              credentialLink: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            },
            { 
              name: "Microsoft Office Specialist", 
              org: "Royal ICT", 
              domain: "Productivity Applications", 
              code: "MOS-ICT23",
              credentialLink: "https://www.linkedin.com/in/lakshani-kaveesha/" 
            }
          ].map((cert, idx) => (
            <div key={idx} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/90 hover:border-teal-500/50 transition duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-wider bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                    {cert.org}
                  </span>
                  <CheckCircle2 size={16} className="text-teal-400" />
                </div>
                <h3 className="font-bold text-slate-100 text-base group-hover:text-teal-300 transition-colors leading-snug">{cert.name}</h3>
                <p className="text-xs text-slate-400 mt-2">{cert.domain}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">{cert.code}</span>
                <a 
                  href={cert.credentialLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-semibold text-teal-400 inline-flex items-center gap-1 hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Verified <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELEGANT & CLEAN MODERN GLASS CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/80 text-center scroll-mt-20">
        
        {/* Modern Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span> Get In Touch
        </div>

        <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-100 tracking-tight">
          Let's Work <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base mb-10 leading-relaxed">
          I am actively seeking Software Engineer opportunities. Feel free to reach out for collaborations or project discussions.
        </p>
        
        {/* Main CTA Button */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5"
          >
            <Send size={18} /> Send Direct Message
          </button>
        </div>

        {/* Clean Grid Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          
          {/* Email Card */}
          <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-xl shadow-xl hover:border-teal-500/40 transition flex flex-col items-center justify-center text-center group">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-teal-400 mb-3 group-hover:scale-110 transition">
              <Mail size={20} />
            </div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Email</p>
            <span className="text-xs font-semibold text-slate-200 mb-3 truncate w-full">lakshanikaveesha203@gmail.com</span>
            <button 
              onClick={() => copyToClipboard('lakshanikaveesha203@gmail.com')}
              className="px-3 py-1 bg-slate-950 hover:bg-teal-500/10 text-teal-400 text-xs rounded-lg border border-slate-800 transition flex items-center gap-1.5"
            >
              {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              {copiedEmail ? 'Copied!' : 'Copy Email'}
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-xl shadow-xl hover:border-teal-500/40 transition flex flex-col items-center justify-center text-center group">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-teal-400 mb-3 group-hover:scale-110 transition">
              <Phone size={20} />
            </div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Phone</p>
            <span className="text-xs font-semibold text-slate-200">+94 703490456</span>
          </div>

          {/* Location Card */}
          <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-xl shadow-xl hover:border-teal-500/40 transition flex flex-col items-center justify-center text-center group">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-teal-400 mb-3 group-hover:scale-110 transition">
              <MapPin size={20} />
            </div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Location</p>
            <span className="text-xs font-semibold text-slate-200">Colombo, Sri Lanka</span>
          </div>

        </div>

        {/* Minimal Social Buttons */}
        <div className="flex justify-center gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400 text-slate-300 hover:text-teal-400 transition hover:-translate-y-1"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href="https://github.com/lakshani281" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400 text-slate-300 hover:text-teal-400 transition hover:-translate-y-1"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-400 text-slate-300 hover:text-teal-400 transition hover:-translate-y-1"
          >
            <MediumIcon size={18} />
          </a>
        </div>

        {/* Copy Toast Alert */}
        {copiedEmail && (
          <div className="fixed bottom-8 right-8 z-50 bg-slate-900 border border-emerald-500/50 text-emerald-400 px-5 py-3 rounded-2xl font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce">
            <CheckCircle2 size={16} className="text-emerald-400" />
            Email copied to clipboard!
          </div>
        )}

      </section>

      {/* FORMSPREE INTEGRATED CONTACT MODAL FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Send size={18} className="text-teal-400" /> Send Message
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-white"><X size={20} /></button>
            </div>

            {/* Formspree Form Action */}
            <form 
              action="https://formspree.io/f/mljddqdn" 
              method="POST" 
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="john@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required 
                  placeholder="Project Opportunity"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required 
                  placeholder="Hello Lakshani, I'd like to discuss..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-teal-500 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-slate-950 font-bold rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-600 border-t border-slate-900">
        © {new Date().getFullYear()} Lakshani Kaveesha. All Rights Reserved.
      </footer>

    </div>
  );
}
