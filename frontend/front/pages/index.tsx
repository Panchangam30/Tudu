import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Get Started", href: "/signup" },
];

const typingText = [
  "Organize Your Life",
  "With Tudu"
];

export default function IndexPage() {
  // Typing animation state
  const [displayed, setDisplayed] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line < typingText.length) {
      if (char < typingText[line].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + typingText[line][char]);
          setChar((c) => c + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else if (line < typingText.length - 1) {
        // New line
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + "\n");
          setLine((l) => l + 1);
          setChar(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [char, line]);

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start px-0 py-0">
      {/* Hero Section - Video Background Only Here, Full Width */}
      <section id="home" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between pt-48 animate-hero-fade gap-8 relative m-0 p-0">
        {/* Background Video and Overlay */}
        <video
          src="/todo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-[-2]"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-[-1]" />
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center w-full px-8 md:px-16 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-indigo-500 to-green-500 text-transparent bg-clip-text drop-shadow-lg animate-gradient-x text-left whitespace-pre-line">
            {displayed}
            <span className="inline-block w-2 h-8 align-middle bg-white-100 animate-blink ml-1" style={{verticalAlign: 'bottom'}}></span>
          </h1>
          {/* Creative Animated Divider */}
          <div className="relative flex items-center justify-start w-full my-4">
            <svg viewBox="0 0 900 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 animate-divider-wave">
              <path d="M0 16 Q 75 0, 150 16 T 300 16 T 450 16 T 600 16 T 750 16 T 900 16" stroke="url(#divider-gradient)" strokeWidth="5" fill="none"/>
              <defs>
                <linearGradient id="divider-gradient" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6BB3A2"/>
                  <stop offset="0.5" stopColor="#9a74e7"/>
                  <stop offset="1" stopColor="#C36FA0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-xl md:text-2xl text-white-400 mb-8 animate-slide-in delay-200 text-left">
            Fastest and funest way to manage your tasks. Stay productive for free.
          </p>
          <Link href="/signup"
            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white-100/60 border-2 border-transparent shadow-2xl font-bold text-xl text-green-700 transition-all duration-300 backdrop-blur-md group overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-300 button-glass-gradient"
            style={{boxShadow: '0 8px 32px 0 rgba(34,197,94,0.15), 0 1.5px 8px 0 rgba(99,102,241,0.10)'}}
            onClick={e => {
              const btn = e.currentTarget;
              const ripple = document.createElement('span');
              ripple.className = 'ripple-effect';
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              btn.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget;
              btn.classList.add('confetti-burst');
              setTimeout(() => btn.classList.remove('confetti-burst'), 700);
            }}
          >
            {/* Animated Checklist Icon */}
            <span className="inline-block w-7 h-7 bg-green-400 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="14" height="10" rx="3" fill="#fff"/>
                <rect x="3" y="5" width="14" height="10" rx="3" stroke="#22c55e" strokeWidth="2"/>
                <path className="checkmark-path" d="M7 10.5L9 12.5L13 8.5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="relative z-10 group-hover:scale-105 group-hover:text-green-500 transition-transform transition-colors duration-300">Get Started</span>
            {/* Confetti burst (CSS only) */}
            <span className="confetti absolute inset-0 pointer-events-none"></span>
            {/* Ripple effect (JS) */}
            {/* Gradient border overlay */}
            <span className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-green-400 via-pink-400 to-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </Link>
        </div>
        {/* Right: Video Placeholder Box */}
        <div className="flex-1 flex items-center justify-center w-full px-8 md:px-16 z-10">
          <div className="w-full aspect-video bg-white-100/80 border-4 border-indigo-400 rounded-2xl shadow-2xl flex items-center justify-center text-indigo-400 text-2xl font-bold animate-fade-in-up" style={{minHeight: '260px'}}>
            {/* Placeholder text/icon for video */}
            <span className="opacity-60">Video Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Features Section - Animated Black Background */}
      <section id="features" className="relative w-full bg-[#08080C] py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 opacity-20 rounded-full blur-3xl animate-float-shape1" />
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl animate-float-shape2" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-400 opacity-20 rounded-full blur-2xl animate-float-shape3" />
          <div className="absolute bottom-24 left-1/3 w-32 h-32 bg-white-200 opacity-10 rounded-full blur-2xl animate-float-shape4" />
        </div>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 animate-section-fade delay-300">
          <div className="bg-[#1C3530] rounded-3xl shadow-xl p-8 border-4 border-pink-400 hover:scale-105 transition-transform duration-300 animate-card-fade">
            <h2 className="text-2xl font-bold text-pink-700 mb-2">Smart Lists</h2>
            <p className="text-white mb-2">Automatically organize your todos by priority, due date, and more.</p>
          </div>
          <div className="bg-[#2f1268] rounded-3xl shadow-xl p-8 border-4 border-green-400 hover:scale-105 transition-transform duration-300 animate-card-fade delay-200">
            <h2 className="text-2xl font-bold text-green-400 mb-2">Beautiful Animations</h2>
            <p className="text-white mb-2">Enjoy a delightful experience with smooth, modern UI animations everywhere.</p>
          </div>
          <div className="bg-[#08080C] rounded-3xl shadow-xl p-8 border-4 border-indigo-400 hover:scale-105 transition-transform duration-300 animate-card-fade delay-400">
            <h2 className="text-2xl font-bold text-indigo-400 mb-2">Collaboration</h2>
            <p className="text-white mb-2">Share and manage tasks with friends, family, or your team in real time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Animated Black Background */}
      <section id="testimonials" className="relative w-full bg-[#08080C] py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-16 right-10 w-56 h-56 bg-pink-400 opacity-20 rounded-full blur-3xl animate-float-shape2" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-green-400 opacity-20 rounded-full blur-3xl animate-float-shape1" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-400 opacity-20 rounded-full blur-2xl animate-float-shape3" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-8">What Our Users Say</h3>
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1C3530] rounded-2xl p-6 shadow-lg animate-card-fade">
            <p className="text-white italic mb-2">“Tudu has completely changed how I organize my day. The UI is stunning and the animations make it fun!”</p>
            <span className="text-green-400 font-bold">— Alex</span>
          </div>
          <div className="bg-[#2f1268] rounded-2xl p-6 shadow-lg animate-card-fade delay-200">
            <p className="text-white italic mb-2">“I love the collaboration features and how easy it is to use. Highly recommended!”</p>
            <span className="text-indigo-400 font-bold">— Jamie</span>
          </div>
        </div>
      </section>

      {/* Modern Footer with Wavy Background and Columns */}
      <footer className="relative w-full pt-16 pb-8 px-4 bg-[#08080C] text-white overflow-hidden">
        {/* Wavy SVG background */}
        <div className="absolute inset-0 -z-10">
          <svg viewBox="0 0 1440 320" className="w-full h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1C3530" fillOpacity="0.8" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L0,320Z" />
            <path fill="#2f1268" fillOpacity="0.7" d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,202.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 pb-8">
          {/* Branding/Stats */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-extrabold text-green-400">Tudu</span>
            </div>
            <p className="text-white-400 mb-4">Empowering the next generation of doers and dreamers through beautiful productivity tools.</p>
            <div className="flex gap-6 mt-2">
              <div className="flex items-center gap-2 bg-[#1C3530] px-3 py-2 rounded-xl">
                <span className="text-green-400 text-lg">✔️</span>
                <span className="font-bold">500+</span>
                <span className="text-white-400 text-sm">Tasks Done</span>
              </div>
              <div className="flex items-center gap-2 bg-[#2f1268] px-3 py-2 rounded-xl">
                <span className="text-indigo-400 text-lg">📋</span>
                <span className="font-bold">50+</span>
                <span className="text-white-400 text-sm">Projects</span>
              </div>
            </div>
          </div>
          {/* Quick Links & Resources */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-6">
            <div>
              <div className="font-bold text-white mb-2">Quick Links</div>
              <div className="flex flex-col gap-3">
                <a href="#about" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-lg bg-green-400/80 flex items-center justify-center text-black font-bold">A</span>
                  <span className="group-hover:underline">About</span>
                </a>
                <a href="#events" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-lg bg-pink-400/80 flex items-center justify-center text-black font-bold">E</span>
                  <span className="group-hover:underline">Events</span>
                </a>
                <a href="#join" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-lg bg-green-500/80 flex items-center justify-center text-black font-bold">J</span>
                  <span className="group-hover:underline">Join</span>
                </a>
                <a href="#team" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-lg bg-orange-400/80 flex items-center justify-center text-black font-bold">T</span>
                  <span className="group-hover:underline">Team</span>
                </a>
              </div>
            </div>
            <div>
              <div className="font-bold text-white mb-2 mt-4">Resources</div>
              <div className="flex flex-col gap-3">
                <a href="#blog" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-lg bg-pink-200/80 flex items-center justify-center text-black font-bold">B</span>
                  <span className="group-hover:underline">Blog</span>
                </a>
                <a href="#papers" className="flex items-center gap-3 group">
                  <span className="w-7 h-7 rounded-lg bg-pink-500/80 flex items-center justify-center text-black font-bold">R</span>
                  <span className="group-hover:underline">Research Papers</span>
                </a>
              </div>
            </div>
          </div>
          {/* Connect With Us */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-6">
            <div className="font-bold text-white mb-2">Connect With Us</div>
            <div className="bg-[#1C3530] border border-green-400/30 rounded-2xl p-6 flex flex-col gap-3 shadow-lg">
              <div className="font-semibold text-white mb-1">Stay Updated</div>
              <div className="text-white-400 text-sm mb-2">Get the latest news and updates.</div>
              <form className="flex gap-2">
                <input type="email" placeholder="Enter email" className="flex-1 rounded-lg px-3 py-2 bg-[#08080C] text-white border border-green-400/30 focus:outline-none focus:ring-2 focus:ring-green-400" />
                <button type="submit" className="px-4 py-2 rounded-lg bg-green-400 text-black font-bold hover:bg-green-500 transition">Join</button>
              </form>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6 mt-8 text-sm">
          <div className="text-white-400">&copy; {new Date().getFullYear()} Tudu. All rights reserved.</div>
          <div className="flex items-center gap-2 text-green-400">
            <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            All systems operational
          </div>
        </div>
      </footer>

      {/* Modern Glassy Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-30 rounded-2xl bg-[#08080C]/80 shadow-2xl backdrop-blur-md flex items-center justify-between px-6 py-2 border border-green-500/20">
        {/* Left: Logo and Brand */}
        <Link href="#home" className="flex items-center gap-3 group">
          <img src="/Tudu.png" alt="Tudu Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-green-500 group-hover:text-indigo-500 transition-colors">Tudu</span>
        </Link>
        {/* Center: Nav Links */}
        <div className="flex-1 flex items-center justify-center gap-8">
          {navLinks.filter(link => link.name !== 'Home').map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base md:text-lg font-medium text-white-100 hover:text-indigo-500 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-base font-medium text-white-200 hover:text-green-500 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400">Sign in</Link>
          <Link href="/signup" className="relative flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-green-500 text-white-100 font-bold text-base shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 navbar-cta-btn overflow-hidden">
            {/* Checkmark Icon */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#ffe7d6" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.5l3 3 5-5" />
            </svg>
            <span className="relative z-10">Get Started</span>
            {/* Glassy overlay */}
            <span className="absolute inset-0 rounded-lg bg-white-100/10 pointer-events-none"></span>
          </Link>
        </div>
      </nav>

      {/* Custom Animations and CSS Art */}
      <style jsx global>{`
        @keyframes sun-rise {
          0% { transform: translateY(100px) scale(0.8); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-sun-rise {
          animation: sun-rise 2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-60px); }
        }
        .animate-wave-move {
          animation: wave-move 8s linear infinite alternate;
        }
        @keyframes beach-rise {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-beach-rise {
          animation: beach-rise 2.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes cloud-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(60px); }
        }
        .animate-cloud-move {
          animation: cloud-move 12s ease-in-out infinite alternate;
        }
        @keyframes cloud-move2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
        .animate-cloud-move2 {
          animation: cloud-move2 14s ease-in-out infinite alternate;
        }
        @keyframes checklist-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-checklist-float {
          animation: checklist-float 3.5s ease-in-out infinite;
        }
        @keyframes person1-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px) rotate(-6deg); }
        }
        .animate-person1-wave {
          animation: person1-wave 2.5s ease-in-out infinite;
        }
        @keyframes arm-wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-30deg); }
        }
        .animate-arm-wave {
          animation: arm-wave 1.2s ease-in-out infinite;
        }
        @keyframes person2-toss {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px) rotate(8deg); }
        }
        .animate-person2-toss {
          animation: person2-toss 2.8s ease-in-out infinite;
        }
        @keyframes plane-fly {
          0% { transform: translateX(0) translateY(0) rotate(-10deg); }
          50% { transform: translateX(40px) translateY(-30px) rotate(10deg); }
          100% { transform: translateX(0) translateY(0) rotate(-10deg); }
        }
        .animate-plane-fly {
          animation: plane-fly 2.8s ease-in-out infinite;
        }
        @keyframes note-pop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08) rotate(-2deg); }
        }
        .animate-note-pop {
          animation: note-pop 2.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes person3-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-person3-bounce {
          animation: person3-bounce 2.1s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes calendar-slide {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-calendar-slide {
          animation: calendar-slide 3.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes hero-fade {
          0% { opacity: 0; transform: scale(0.98) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-hero-fade {
          animation: hero-fade 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes section-fade {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-section-fade {
          animation: section-fade 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes card-fade {
          0% { opacity: 0; transform: scale(0.95) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-card-fade {
          animation: card-fade 1.1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 #6BB3A2; }
          50% { box-shadow: 0 0 32px 8px #6BB3A2; }
        }
        .animate-cta-glow {
          animation: cta-glow 2.5s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
        @keyframes float-shape1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
        }
        .animate-float-shape1 {
          animation: float-shape1 7s ease-in-out infinite;
        }
        @keyframes float-shape2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.05); }
        }
        .animate-float-shape2 {
          animation: float-shape2 9s ease-in-out infinite;
        }
        @keyframes float-shape3 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(30px) scale(1.1); }
        }
        .animate-float-shape3 {
          animation: float-shape3 8s ease-in-out infinite;
        }
        @keyframes float-shape4 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.04); }
        }
        .animate-float-shape4 {
          animation: float-shape4 10s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .button-glass-gradient {
          background: rgba(255,255,255,0.55);
          border: 2px solid transparent;
          box-shadow: 0 8px 32px 0 rgba(34,197,94,0.15), 0 1.5px 8px 0 rgba(99,102,241,0.10);
          position: relative;
        }
        .button-glass-gradient:before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 2px;
          background: linear-gradient(90deg, #22c55e, #ec4899, #6366f1);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }
        .button-glass-gradient:after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(255,255,255,0.15);
          z-index: 0;
          pointer-events: none;
        }
        .ripple-effect {
          position: absolute;
          width: 120px;
          height: 120px;
          background: rgba(34,197,94,0.25);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0.1);
          animation: ripple-anim 0.6s linear;
          pointer-events: none;
          z-index: 2;
        }
        @keyframes ripple-anim {
          to {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
        /* Animated checkmark path */
        .checkmark-path {
          stroke-dasharray: 18;
          stroke-dashoffset: 18;
          transition: stroke-dashoffset 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .group:hover .checkmark-path {
          stroke-dashoffset: 0;
        }
        /* Confetti burst */
        .confetti {
          display: block;
        }
        .confetti-burst .confetti::before, .confetti-burst .confetti::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          transform: translate(-50%, -50%) scale(1);
          animation: confetti-burst-anim 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .confetti-burst .confetti::after {
          background: #ec4899;
          left: 60%;
          top: 40%;
        }
        @keyframes confetti-burst-anim {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -120%) scale(1.8); }
        }
        @keyframes divider-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-divider-wave {
          animation: divider-wave 2.5s ease-in-out infinite;
        }
        @keyframes divider-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-divider-bounce {
          animation: divider-bounce 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        .navbar-cta-btn {
          box-shadow: 0 4px 24px 0 #6BB3A233, 0 1.5px 8px 0 #9a74e733;
        }
        .navbar-cta-btn:hover {
          box-shadow: 0 6px 32px 0 #C36FA099, 0 2px 12px 0 #6BB3A299;
          transform: scale(1.06);
        }
        .navbar-cta-btn:after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          border: 2px solid transparent;
          background: linear-gradient(90deg, #6BB3A2, #9a74e7, #C36FA0) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.2s;
          z-index: 2;
          pointer-events: none;
        }
        .navbar-cta-btn:hover:after {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
