import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import VideoTestimonials from '../components/VideoTestimonials';
import { Clock, Calendar } from 'lucide-react';
// import { 
//   Code2, Smartphone, Cloud, Zap, ArrowRight 
// } from 'lucide-react';
import { 
  Code2, Smartphone, Cloud, Zap, ArrowRight,
  Shield, Rocket, Cpu   // ✅ ADD THIS
} from 'lucide-react';

import Capabilities from '../components/Capabilities'; 
import { blogPosts } from '../data/blogData';

gsap.registerPlugin(ScrollTrigger);

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
  {/* ── VIDEO TESTIMONIALS ── */}
      <VideoTestimonials />
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
<section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">From Our Blog</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Latest Insights &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Industry Updates
                </span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shrink-0"
            >
              View All Articles
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={`${post.title} - ${post.category} article by TechDeployers`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {post.authorAvatar}
                      </div>
                      <p className="text-xs font-semibold text-slate-700">{post.author}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        {post.date.split(' ').slice(0, 2).join(' ')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* --- SEO OVERVIEW: CLOUD, DEVOPS & WEB DEVELOPMENT --- */}
      <section className="py-24 bg-slate-50" aria-labelledby="services-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
                IT Services Built for Growth
              </p>
              <h2
                id="services-overview-heading"
                className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                Cloud, DevOps & Web Development Solutions for Modern Businesses
              </h2>
            </header>

            <div className="space-y-12 text-slate-700 text-lg leading-relaxed">
              <p>
                TechDeployers is a full-service IT partner helping startups and enterprises
                modernize with reliable{' '}
                <Link to="/services" className="text-blue-600 font-semibold hover:underline">
                  cloud services
                </Link>
                , automated DevOps pipelines, and production-grade web development. Our team
                blends strategy, engineering, and design to deliver software that is fast,
                secure, and built to scale.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AWS Cloud Services That Scale
                </h3>
                <p className="mb-4">
                  We design and operate secure, cost-efficient cloud infrastructure on Amazon Web
                  Services. From migrations to greenfield architectures, our AWS solutions give
                  you the resilience and elasticity modern products demand.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cloud migration and architecture reviews for AWS workloads</li>
                  <li>High-availability deployments across multiple regions and availability zones</li>
                  <li>Cost optimization, monitoring, and security hardening</li>
                  <li>Serverless, containerized, and hybrid cloud solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  DevOps Services & Automation
                </h3>
                <p className="mb-4">
                  Our DevOps services help engineering teams ship faster with confidence. We
                  build CI/CD pipelines, infrastructure as code, and observability platforms
                  that reduce manual effort and prevent production incidents.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CI/CD pipelines with GitHub Actions, GitLab, and Jenkins</li>
                  <li>Infrastructure as Code using Terraform and AWS CloudFormation</li>
                  <li>Kubernetes, Docker, and container orchestration</li>
                  <li>Centralized logging, monitoring, and on-call playbooks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Custom Web Development
                </h3>
                <p className="mb-4">
                  We build accessible, SEO-friendly websites and web applications with React,
                  Next.js, Node.js, and TypeScript. Every project is engineered for Core Web
                  Vitals, security, and long-term maintainability.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Single-page apps, marketing sites, and enterprise portals</li>
                  <li>Headless commerce on Shopify and modern JAMstack frameworks</li>
                  <li>API design, third-party integrations, and backend development</li>
                  <li>Performance audits and accessibility improvements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Businesses Choose TechDeployers
                </h3>
                <p className="mb-4">
                  We combine senior engineering talent with a delivery process refined across
                  hundreds of projects. Whether you are launching a new product, modernizing a
                  legacy system, or scaling an existing platform, we work as a transparent
                  extension of your team.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clear roadmaps with weekly progress check-ins</li>
                  <li>Security-first engineering from day one</li>
                  <li>Performance budgets and measurable business outcomes</li>
                  <li>Flexible engagement models that match your stage of growth</li>
                </ul>
              </div>

              <p>
                Explore the full range of our{' '}
                <Link to="/services" className="text-blue-600 font-semibold hover:underline">
                  IT services
                </Link>
                , learn more{' '}
                <Link to="/about" className="text-blue-600 font-semibold hover:underline">
                  about our team
                </Link>
                , or{' '}
                <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
                  contact us
                </Link>{' '}
                for a free consultation on your next cloud, DevOps, or web development project.
              </p>
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