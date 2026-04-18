import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   TESTIMONIAL DATA — real YouTube video IDs
═══════════════════════════════════════════════════ */
const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    company: 'TechFlow Inc.',
    videoId: 'ysz5S6PUM-U',
    avatar: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=80&q=80',
    quote: 'They completely transformed our platform. The scalability and performance are exactly what we needed to handle massive user growth.',
    rating: 5,
    tag: 'Web Development',
    tagColor: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder, LaunchPad',
    company: 'LaunchPad HQ',
    videoId: 'hY7m5jjJ9mM',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80',
    quote: 'The DevOps automation saved us hundreds of hours per month. Best digital engineering partnership we have ever had.',
    rating: 5,
    tag: 'Cloud & DevOps',
    tagColor: 'bg-purple-500',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'CTO, HealthSync',
    company: 'HealthSync Ltd.',
    videoId: 'LXb3EKWsInQ',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80',
    quote: 'Our mobile app retention skyrocketed after their UI/UX rebuild. Highly recommend their Android development team.',
    rating: 5,
    tag: 'Mobile App',
    tagColor: 'bg-green-500',
  },
  {
    id: 4,
    name: 'David Smith',
    role: 'Director, FinTech Solutions',
    company: 'FinTech Global',
    videoId: 'dQw4w9WgXcQ',
    avatar: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=80&q=80',
    quote: 'Their cloud solutions gave us the security and uptime required in finance. A truly professional and high-end engineering agency.',
    rating: 5,
    tag: 'Digital Marketing',
    tagColor: 'bg-orange-500',
  },
];

/* ═══════════════════════════════════════════════════
   SINGLE VIDEO CARD COMPONENT
═══════════════════════════════════════════════════ */
const VideoCard = ({
  test,
  isActive,
  isSide,
}: {
  test: (typeof testimonials)[0];
  isActive: boolean;
  isSide?: boolean;
}) => {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${test.videoId}/maxresdefault.jpg`;
  const fallbackThumb = `https://img.youtube.com/vi/${test.videoId}/hqdefault.jpg`;

  useEffect(() => {
    if (!isActive) setPlaying(false);
  }, [isActive]);

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all duration-500 ${
        isSide ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    >
      {/* Service Tag */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className={`${test.tagColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg`}
        >
          {test.tag}
        </span>
      </div>

      {/* ── Video / Thumbnail area ── */}
      <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full rounded-t-3xl"
            src={`https://www.youtube.com/embed/${test.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
            title={`${test.name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src={thumbUrl}
              alt={test.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                if (img.src !== fallbackThumb) img.src = fallbackThumb;
              }}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />

            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* ▶ Play button — centered premium design */}
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play testimonial video"
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="relative flex items-center justify-center">
                {/* Outer pulsing ring */}
                <span className="absolute w-24 h-24 rounded-full bg-white/10 animate-ping" />
                {/* Middle ring */}
                <span className="absolute w-20 h-20 rounded-full bg-white/20 border border-white/30" />
                {/* Play button core */}
                <span className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
              {/* "Watch Review" label */}
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Watch Review
              </span>
            </button>
          </>
        )}
      </div>

      {/* ── Info Panel ── */}
      <div className="relative px-5 py-5 flex flex-col gap-3 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/5">
        {/* Stars + Quote icon row */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(test.rating)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <Quote size={18} className="text-blue-400/60" />
        </div>

        {/* Quote text */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 italic">
          "{test.quote}"
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Avatar + Name + Role */}
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src={test.avatar}
              alt={test.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/60"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-slate-900" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate">{test.name}</p>
            <p className="text-blue-400 text-xs truncate">{test.role}</p>
          </div>
          {/* Company pill */}
          <span className="shrink-0 text-[10px] text-slate-400 font-medium bg-white/5 border border-white/10 px-2 py-1 rounded-lg">
            {test.company}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   VIDEO TESTIMONIALS SECTION — exported component
═══════════════════════════════════════════════════ */
const VideoTestimonials = () => {
  const [active, setActive] = useState(0);
  const autoplayRef = useRef(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

  /* ── Auto-slide: starts ONCE on mount, never restarts ── */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (autoplayRef.current) {
        setActive((a) => (a + 1) % total);
      }
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  /* ── Stop autoplay PERMANENTLY ── */
  const stopAutoplay = useCallback(() => {
    autoplayRef.current = false;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /* ── Navigation: stop autoplay then slide ── */
  const handleNav = (fn: () => void) => {
    stopAutoplay();
    fn();
  };

  /* GSAP entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.testimonial-cards-wrap', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Indices for 3-card desktop view */
  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-blue-100/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-100/60 rounded-full blur-[120px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="testimonial-header text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm px-4 py-2 rounded-full text-sm font-bold text-blue-600 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Client Success Stories
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real results, real voices. Hear directly from the clients who partnered with us to
            transform their digital presence.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: '150+', label: 'Happy Clients' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-slate-100 shadow-sm rounded-2xl px-6 py-3 text-center"
              >
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-card carousel ── */}
        <div className="testimonial-cards-wrap hidden md:block">
          <div className="relative flex items-center justify-center gap-4 lg:gap-6">

            {/* Left arrow */}
            <button
              onClick={() => handleNav(prev)}
              className="absolute left-0 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-slate-700 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Left card */}
            <div
              className="w-[280px] lg:w-[310px] shrink-0 cursor-pointer"
              onClick={() => handleNav(prev)}
            >
              <VideoCard test={testimonials[leftIdx]} isActive={false} isSide />
            </div>

            {/* Active (center) card */}
            <div className="w-[340px] lg:w-[400px] shrink-0 z-10 relative">
              {/* Glow ring behind active card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-xl pointer-events-none" />
              <div className="relative ring-2 ring-blue-500/40 rounded-3xl">
                <VideoCard test={testimonials[active]} isActive={true} />
              </div>
            </div>

            {/* Right card */}
            <div
              className="w-[280px] lg:w-[310px] shrink-0 cursor-pointer"
              onClick={() => handleNav(next)}
            >
              <VideoCard test={testimonials[rightIdx]} isActive={false} isSide />
            </div>

            {/* Right arrow */}
            <button
              onClick={() => handleNav(next)}
              className="absolute right-0 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-slate-700 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* ── MOBILE: single card ── */}
        <div className="testimonial-cards-wrap md:hidden">
          <div className="relative mx-auto max-w-sm">
            {/* Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-xl pointer-events-none" />
            <div className="relative ring-2 ring-blue-500/30 rounded-3xl">
              <VideoCard test={testimonials[active]} isActive={true} />
            </div>
          </div>

          {/* Mobile nav buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => handleNav(prev)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-700 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleNav(next)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-700 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopAutoplay();
                setActive(i);
              }}
              className={`rounded-full transition-all duration-400 ${
                i === active
                  ? 'w-8 h-2.5 bg-blue-600 shadow-md shadow-blue-200'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Progress bar — visible only while autoplay is running ── */}
        <div className="mt-4 max-w-xs mx-auto h-0.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            key={active}
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            style={{
              animation: autoplayRef.current ? 'progressBar 6s linear forwards' : 'none',
              width: autoplayRef.current ? undefined : '0%',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default VideoTestimonials;
