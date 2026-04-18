import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Layers3,
  Rocket,
  Wrench,
  Sparkles,
  Tag,
  Zap,
  Star,
  Cpu,
  Globe2,
} from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || '');

  const heroRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      /* ---------- ENTRANCE TIMELINE ---------- */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-back-btn', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo('.hero-tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
        .fromTo('.hero-desc', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo(
          '.hero-feature-pill',
          { y: 20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08 },
          '-=0.4',
        )
        .fromTo(
          '.hero-card',
          { x: 60, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power4.out' },
          '-=0.9',
        )
        .fromTo(
          '.hero-card-row',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
          '-=0.5',
        )
        .fromTo(
          '.hero-icon-wrap',
          { scale: 0, rotation: -180, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' },
          '-=0.7',
        );

      /* ---------- FLOATING BLOBS ---------- */
      gsap.to('.hero-blob-1', {
        x: 50,
        y: -30,
        scale: 1.15,
        duration: 7,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to('.hero-blob-2', {
        x: -40,
        y: 40,
        scale: 1.1,
        duration: 9,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to('.hero-blob-3', {
        x: 30,
        y: -40,
        scale: 0.9,
        duration: 8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      /* ---------- ORBITING ICONS ---------- */
      gsap.to('.orbit-ring-1', {
        rotation: 360,
        duration: 18,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      });
      gsap.to('.orbit-ring-2', {
        rotation: -360,
        duration: 24,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      });

      /* ---------- COUNTER-ROTATE the icons so they stay upright ---------- */
      gsap.to('.orbit-icon', {
        rotation: -360,
        duration: 18,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      });

      /* ---------- FLOATING SPARKLES ---------- */
      gsap.utils.toArray<HTMLElement>('.hero-spark').forEach((el, i) => {
        gsap.to(el, {
          y: '-=20',
          x: i % 2 === 0 ? '+=10' : '-=10',
          opacity: 0.3,
          duration: 2 + Math.random() * 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        });
      });

      /* ---------- ICON GENTLE FLOAT ---------- */
      gsap.to('.hero-icon-wrap', {
        y: -10,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      /* ---------- GLOW PULSE BEHIND ICON ---------- */
      gsap.to('.icon-glow', {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      /* ---------- 3D TILT ON THE CARD ---------- */
      const card = cardRef.current;
      if (card) {
        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotY = ((x - rect.width / 2) / rect.width) * 14;
          const rotX = -((y - rect.height / 2) / rect.height) * 14;
          gsap.to(card, {
            rotationY: rotY,
            rotationX: rotX,
            transformPerspective: 900,
            duration: 0.5,
            ease: 'power2.out',
          });
        };
        const handleLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.7,
            ease: 'power3.out',
          });
        };
        card.addEventListener('mousemove', handleMove);
        card.addEventListener('mouseleave', handleLeave);
        return () => {
          card.removeEventListener('mousemove', handleMove);
          card.removeEventListener('mouseleave', handleLeave);
        };
      }
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-24 pb-16 md:pt-32 md:pb-24"
      >
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="hero-blob-1 absolute left-0 top-12 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="hero-blob-2 absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="hero-blob-3 absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        {/* Decorative SVG grid */}
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/[0.06] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M.5 60V.5H60" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Floating sparkles */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <Sparkles className="hero-spark absolute left-[8%] top-[20%] text-blue-300/60" size={18} />
          <Star className="hero-spark absolute left-[20%] top-[70%] text-purple-300/60" size={14} />
          <Sparkles className="hero-spark absolute right-[10%] top-[28%] text-cyan-300/60" size={20} />
          <Star className="hero-spark absolute right-[28%] top-[78%] text-pink-300/60" size={12} />
          <Zap className="hero-spark absolute left-[42%] top-[15%] text-yellow-300/60" size={16} />
          <Sparkles className="hero-spark absolute right-[40%] bottom-[18%] text-blue-300/60" size={14} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="hero-back-btn mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/15 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="hero-tag mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
                <Rocket size={15} className="text-blue-300" />
                Premium Service Details
              </div>
              <h1 className="hero-title mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                {service.title}
              </h1>
              <p className="hero-desc max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="hero-feature-pill rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Right-side animated card */}
            <div className="relative">
              {/* Orbiting rings (decorative) */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="orbit-ring-1 relative h-[360px] w-[360px] rounded-full border border-dashed border-white/10">
                  <div className="orbit-icon absolute -top-3 left-1/2 -translate-x-1/2 rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-md">
                    <Zap className="text-yellow-300" size={16} />
                  </div>
                  <div className="orbit-icon absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-md">
                    <Star className="text-pink-300" size={16} />
                  </div>
                </div>
                <div className="orbit-ring-2 absolute h-[280px] w-[280px] rounded-full border border-dashed border-white/10">
                  <div className="orbit-icon absolute top-1/2 -left-3 -translate-y-1/2 rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-md">
                    <Cpu className="text-blue-300" size={16} />
                  </div>
                  <div className="orbit-icon absolute top-1/2 -right-3 -translate-y-1/2 rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-md">
                    <Globe2 className="text-cyan-300" size={16} />
                  </div>
                </div>
              </div>

              <div
                ref={cardRef}
                className="hero-card relative rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative mx-auto h-28 w-28">
                  {/* Glow */}
                  <div
                    className={`icon-glow absolute inset-0 rounded-3xl ${service.color} opacity-50 blur-2xl`}
                  />
                  {/* Icon container */}
                  <div
                    className={`hero-icon-wrap relative mx-auto flex h-28 w-28 items-center justify-center rounded-3xl ${service.color} shadow-xl ring-1 ring-white/40`}
                  >
                    <Icon className={service.iconColor} size={50} />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="hero-card-row group rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-white/90 transition hover:border-blue-400/40 hover:bg-slate-900/70">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Sparkles size={14} className="text-blue-300" />
                      Starting Focus
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      Performance, quality, and business results
                    </div>
                  </div>
                  <div className="hero-card-row group rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-white/90 transition hover:border-purple-400/40 hover:bg-slate-900/70">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Rocket size={14} className="text-purple-300" />
                      Service Coverage
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      Planning, implementation, launch, and support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <BadgeCheck className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Service Overview</h2>
            </div>
            <p className="text-base leading-8 text-slate-600">{service.overview}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Layers3 className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">What You Get</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Wrench className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Our Process</h2>
            </div>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="pt-2 text-slate-700">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Key Benefits</h2>
            </div>
            <div className="space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={18} />
                  <p className="text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold">Ideal For</h2>
            </div>
            <div className="space-y-3">
              {service.idealFor.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRICING SECTION ============== */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              <Tag size={14} />
              Pricing Plans
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Choose the Right Plan for You
            </h2>
            <p className="text-base text-slate-600 md:text-lg">
              Transparent pricing with no hidden costs. Pick a package that fits your business
              needs, or contact us for a fully custom quote.
            </p>
          </div>

          <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
            {service.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'z-10 border-blue-600 bg-white text-slate-900 shadow-xl shadow-blue-600/10 lg:-mt-4 lg:scale-105'
                    : 'border-slate-200 bg-white text-slate-900 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-6 self-start">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                      <Rocket size={14} className="text-blue-600" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative z-10 mb-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {plan.description}
                  </p>
                </div>

                <div className="relative z-10 mb-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900 md:text-5xl">
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="text-sm text-slate-500">
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <div className="relative z-10 mb-6 h-px w-full bg-slate-200" />

                <ul className="relative z-10 mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      <span className="text-sm text-slate-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20'
                      : 'bg-slate-900 text-white hover:bg-blue-600'
                  }`}
                >
                  {plan.cta || 'Get Started'}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
            <p className="text-sm text-slate-600 md:text-base">
              <span className="font-bold text-slate-900">Need a custom plan?</span> All packages can
              be tailored to your specific requirements. Get in touch for a personalized quote.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us for Custom Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
