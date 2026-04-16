import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
// import { 
//   Code2, Smartphone, Cloud, Zap, ArrowRight 
// } from 'lucide-react';
import { 
  Code2, Smartphone, Cloud, Zap, ArrowRight,
  Shield, Rocket, Cpu   // ✅ ADD THIS
} from 'lucide-react';

// 1. IMPORT YOUR NEW COMPONENT HERE
// Make sure the path matches where you saved Capabilities.jsx
import Capabilities from '../components/Capabilities'; 

gsap.registerPlugin(ScrollTrigger);

// Custom SVG Icon Components for Hero Section
// const ShopifyIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M17 7H7C5.89543 7 5 7.89543 5 9V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V9C19 7.89543 18.1046 7 17 7Z" stroke="currentColor" strokeWidth="2"/>
//     <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// const AWSIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.0147 19.9853 10 17.5 10C17.0132 10 16.5546 10.0763 16.143 10.2114C15.3766 8.40553 13.7186 7.21143 11.75 7.21143C9.19115 7.21143 7 9.40258 7 12C7 14.5974 9.19115 16.7886 11.75 16.7886C12.3726 16.7886 12.9642 16.6837 13.5125 16.4841C14.092 17.849 15.4136 18.8114 17.0125 18.8114H17.5V19Z" stroke="currentColor" strokeWidth="2"/>
//   </svg>
// );

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content', { opacity: 0, y: 50, duration: 1, ease: 'power4.out' });
      
      // Tech Marquee Animation
      gsap.to('.marquee-content', {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-50 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full text-sm font-bold text-blue-600 shadow-sm">
              <Zap size={16} fill="currentColor" />
              <span>The Future of Digital Engineering</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Digital Excellence.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              We specialize in high-end web development, cloud automation, and digital growth strategies for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center group">
                Launch Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                Our Expertise
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[3rem] shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Code2 size={48} />
                  </div>
                  <div className="h-40 bg-slate-900 rounded-3xl flex items-center justify-center text-white shadow-lg">
                    <Cloud size={48} />
                  </div>
                  <div className="h-40 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
                    <Smartphone size={48} />
                  </div>
                  <div className="h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                    <Zap size={48} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <div className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="flex marquee-content whitespace-nowrap space-x-12 items-center">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">React</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">Node.js</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">AWS</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">Docker</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">TypeScript</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">Shopify</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">Python</span>
              <span className="text-slate-400 font-bold text-xl uppercase tracking-widest">Terraform</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- CAPABILITIES SECTION (REPLACED OLD SERVICES) --- */}
      <Capabilities />

      {/* --- WHY CHOOSE US (The Graphics Section) --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why Industry Leaders <br/><span className="text-blue-400">Trust Our Engineering.</span></h2>
              <div className="space-y-6">
                {[
                  { t: 'High Availability', d: 'Architecting systems with 99.9% uptime guarantees.', i: <Shield /> },
                  { t: 'Scalable Architecture', d: 'Built to grow from 10 to 10 million users.', i: <Rocket /> },
                  { t: 'Automated Workflows', d: 'Reducing human error through DevOps excellence.', i: <Cpu /> },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-blue-400">
                      {feature.i}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{feature.t}</h4>
                      <p className="text-slate-400">{feature.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[2rem] border border-white/10 text-center">
                  <div className="text-4xl font-black text-blue-400 mb-2">98%</div>
                  <div className="text-sm text-slate-400 uppercase font-bold">Client Retention</div>
                </div>
                <div className="bg-blue-600 p-8 rounded-[2rem] text-center shadow-xl shadow-blue-900/20">
                  <div className="text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-sm text-blue-100 uppercase font-bold">Cloud Monitoring</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[2rem] border border-white/10 text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">15+</div>
                  <div className="text-sm text-slate-400 uppercase font-bold">Industry Awards</div>
                </div>
                <div className="bg-slate-800 p-8 rounded-[2rem] text-center border border-slate-700">
                  <div className="text-4xl font-black text-white mb-2">500+</div>
                  <div className="text-sm text-slate-400 uppercase font-bold">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">Ready to transform your digital presence?</h2>
            <Link to="/contact" className="inline-block px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl relative z-10">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;