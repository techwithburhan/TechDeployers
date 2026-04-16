import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Smartphone,
  Globe,
  BarChart3,
  Mail,
  Server,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Rocket,
  Zap,
  Cpu,
  Layout,
  Database,
  ChevronDown,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- HEADER ANIMATIONS ---------- */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { y: -30, opacity: 0, duration: 0.6 })
        .from(
          '.hero-title-word',
          { y: 80, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out' },
          '-=0.2'
        )
        .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2');

      // Floating icons
      if (window.innerWidth >= 768) {
        gsap.to('.float-icon', {
          y: '+=20',
          rotation: '+=8',
          duration: 3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.4, from: 'random' },
        });
      }

      // Blob morph / drift
      gsap.to('.blob-1', { x: 60, y: -40, scale: 1.15, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('.blob-2', { x: -50, y: 30, scale: 1.1, duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('.blob-3', { x: 30, y: 50, scale: 0.9, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      // Bounce arrow
      gsap.to('.scroll-arrow', { y: 10, duration: 1.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      // Marquee
      const marquee = document.querySelector('.marquee-track');
      if (marquee) {
        gsap.to(marquee, { xPercent: -50, duration: 25, ease: 'none', repeat: -1 });
      }

      /* ---------- STAT COUNTER ANIMATIONS ----------
         Stats live IN the hero viewport, so we skip ScrollTrigger
         and fire immediately after the header timeline completes.
      ------------------------------------------------------------ */

      // 1. Reset all counters to "0<suffix>" before animation
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        el.textContent = '0' + (el.dataset.suffix || '');
      });

      // 2. Reveal stat cards after hero animation
      tl.from(
        '.hero-stat',
        { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
        '-=0.1'
      );

      // 3. Count-up — starts right after card reveal (delay matches stagger)
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el, index) => {
        const end    = Number(el.dataset.value  || '0');
        const suffix = el.dataset.suffix || '';
        const obj    = { val: 0 };

        gsap.killTweensOf(obj);

        gsap.to(obj, {
          val: end,
          duration: 2.2,
          ease: 'power2.out',
          // start after the card has faded in (hero tl runs ~1.5 s before stats)
          delay: 1.5 + index * 0.15,
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString() + suffix;
          },
          onComplete: () => {
            el.textContent = end.toString() + suffix;
          },
        });
      });

      /* ---------- SERVICE CARD ANIMATIONS ---------- */
      gsap.utils.toArray<HTMLElement>('.service-detail').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      ScrollTrigger.refresh();
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Custom Website Development',
      description:
        'We build high-performance, scalable, and secure websites using the latest technologies like React, Next.js, and Node.js. Our websites are designed to convert visitors into customers.',
      icon: <Code2 className="text-blue-600" size={32} />,
      features: ['Responsive Design', 'SEO Optimized', 'Speed Optimized', 'Custom UI/UX'],
      color: 'bg-blue-50',
    },
    {
      title: 'WordPress Website',
      description:
        'Get a professional and easy-to-manage WordPress website. We specialize in custom theme development, plugin integration, and website maintenance.',
      icon: <Globe className="text-purple-600" size={32} />,
      features: ['Easy Content Management', 'Custom Themes', 'Plugin Integration', 'E-commerce Ready'],
      color: 'bg-purple-50',
    },
    {
      title: 'Android Application',
      description:
        'Develop powerful and engaging Android applications that provide a seamless experience for your users on all Android devices.',
      icon: <Smartphone className="text-green-600" size={32} />,
      features: ['Native & Hybrid Apps', 'Modern UI/UX', 'API Integration', 'App Store Submission'],
      color: 'bg-green-50',
    },
    {
      title: 'Digital Marketing',
      description:
        'Drive more traffic and sales to your business with our data-driven digital marketing strategies, including SEO, SEM, and social media marketing.',
      icon: <BarChart3 className="text-orange-600" size={32} />,
      features: ['SEO Optimization', 'PPC Management', 'Social Media Marketing', 'Content Strategy'],
      color: 'bg-orange-50',
    },
    {
      title: 'Business Email Setup',
      description:
        'Establish professional credibility with custom business email addresses (e.g., name@yourcompany.com) using secure and reliable email providers.',
      icon: <Mail className="text-red-600" size={32} />,
      features: ['Professional Identity', 'Secure Email Hosting', 'Spam Protection', 'Easy Setup'],
      color: 'bg-red-50',
    },
    {
      title: 'Domain Hosting Setup',
      description:
        'Secure your online presence with fast, reliable, and secure domain registration and hosting services tailored to your needs.',
      icon: <Server className="text-indigo-600" size={32} />,
      features: ['Fast Loading Speeds', '99.9% Uptime', 'SSL Certificates', '24/7 Support'],
      color: 'bg-indigo-50',
    },
  ];

  const techWords = [
    'React', 'Next.js', 'Node.js', 'WordPress', 'Android', 'SEO', 'UI/UX',
    'TypeScript', 'Tailwind', 'Cloud Hosting', 'API', 'E-commerce',
    'Digital Marketing', 'Email Setup', 'Performance',
  ];

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 98,  suffix: '%', label: 'Client Satisfaction' },
    { value: 50,  suffix: '+', label: 'Happy Clients'       },
    { value: 24,  suffix: '/7', label: 'Premium Support'    },
  ];

  return (
    <div ref={servicesRef} className="bg-slate-50 min-h-screen overflow-hidden">
      {/* ============== ANIMATED HEADER ============== */}
      <header
        ref={headerRef}
        className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 pt-20 md:pt-28 pb-20 md:pb-32"
      >
        {/* Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="blob-1 absolute top-10 left-10 w-40 md:w-80 h-40 md:h-80 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="blob-2 absolute top-40 right-10 w-48 md:w-96 h-48 md:h-96 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="blob-3 absolute bottom-0 left-1/3 w-40 md:w-80 h-40 md:h-80 rounded-full bg-pink-500/20 blur-3xl" />
        </div>

        {/* SVG grid */}
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] hidden md:block"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M.5 60V.5H60" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Floating icons */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div className="float-icon absolute top-24 left-[8%] p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <Code2 className="text-blue-300" size={28} />
          </div>
          <div className="float-icon absolute top-40 right-[10%] p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <Smartphone className="text-green-300" size={28} />
          </div>
          <div className="float-icon absolute bottom-32 left-[14%] p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <Database className="text-purple-300" size={28} />
          </div>
          <div className="float-icon absolute bottom-40 right-[16%] p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <Layout className="text-pink-300" size={28} />
          </div>
          <div className="float-icon absolute top-1/2 left-[5%] p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <Cpu className="text-yellow-300" size={22} />
          </div>
          <div className="float-icon absolute top-1/3 right-[5%] p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <Zap className="text-orange-300" size={22} />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm text-white/90 mb-6 md:mb-8">
            <Sparkles size={14} className="text-yellow-300" />
            <span>Empowering Businesses with Modern Tech</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4 md:mb-6 flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2">
            <span className="hero-title-word inline-block">Our</span>
            <span className="hero-title-word inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Premium
            </span>
            <span className="hero-title-word inline-block">Digital</span>
            <span className="hero-title-word inline-block">Services</span>
          </h1>

          <p className="hero-subtitle max-w-md sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-12 leading-relaxed">
            From idea to launch — websites, mobile apps, marketing & infrastructure, crafted by a team that obsesses over performance and design.
          </p>

          {/* ── Stats strip – FIXED: always 4 columns on md+, all visible ── */}
          <div className="w-full max-w-4xl mx-auto mb-10 md:mb-14 px-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="hero-stat p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tabular-nums">
                    <span
                      className="stat-number"
                      data-value={s.value}
                      data-suffix={s.suffix}
                    >
                      0{s.suffix}
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-1 md:mt-2 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#services"
            className="hero-scroll inline-flex flex-col items-center gap-1 md:gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest">Explore Services</span>
            <ChevronDown className="scroll-arrow" size={20} />
          </a>
        </div>

        {/* Marquee ticker */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-white/5 backdrop-blur-md border-y border-white/10 py-2 md:py-3">
          <div className="marquee-track flex gap-4 md:gap-8 whitespace-nowrap w-max">
            {[...techWords, ...techWords].map((word, i) => (
              <div
                key={i}
                className="flex items-center gap-2 md:gap-3 text-white/70 text-xs md:text-sm font-medium"
              >
                <Rocket size={12} className="text-blue-400" />
                <span>{word}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ============== SERVICES LIST ============== */}
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-12 md:pb-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 md:mb-3">
            What We Offer
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-base md:text-lg text-slate-600 px-2">
            We provide a full spectrum of digital services to help your business succeed in the modern marketplace.
          </p>
        </div>

        <div className="space-y-6 md:space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-detail group bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Icon section */}
                <div className={`p-6 md:p-16 ${service.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute w-24 md:w-40 h-24 md:h-40 rounded-full border-2 md:border-4 border-current opacity-5" />
                  <div className="absolute w-32 md:w-56 h-32 md:h-56 rounded-full border-2 md:border-4 border-current opacity-5" />
                  <div className="absolute w-40 md:w-72 h-40 md:h-72 rounded-full border-2 md:border-4 border-current opacity-5" />
                  <div className="relative z-10 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/80 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 md:p-8 lg:p-16">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2 md:space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                          <CheckCircle2 className="text-blue-600 group-hover:text-white transition-colors duration-300" size={12} />
                        </div>
                        <span className="text-xs sm:text-sm md:text-base text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-slate-900 text-white rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group/btn">
                    Request Quote
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-20 text-center p-6 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0wLThoLTJWNmgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Let's discuss your project and find the perfect solution for your needs. Get a free consultation today!
            </p>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Get Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;