import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { getBlogBySlug, blogPosts } from '../data/blogData';

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetailPage() {
  const { blogSlug } = useParams();
  const post = getBlogBySlug(blogSlug || '');
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!post) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.blog-back-btn', { y: -20, opacity: 0, duration: 0.5 })
        .from('.blog-category-tag', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.blog-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.blog-meta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.blog-cover', { scale: 0.96, opacity: 0, duration: 0.9 }, '-=0.5');

      gsap.utils.toArray<HTMLElement>('.blog-section').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray<HTMLElement>('.related-card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const allRelated = related.length > 0
    ? related
    : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
        </div>
        <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" aria-hidden="true">
          <defs><pattern id="blog-detail-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M.5 60V.5H60" fill="none" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#blog-detail-grid)" />
        </svg>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="blog-back-btn mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className={`blog-category-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5 ${post.categoryColor}`}>
            <Tag size={11} />
            {post.category}
          </span>

          <h1 className="blog-title text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="blog-meta flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                {post.authorAvatar}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{post.author}</p>
                <p className="text-slate-400 text-xs">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <Calendar size={14} />
              {post.date}
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <Clock size={14} />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="blog-cover rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* ── CONTENT ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">

          {/* Main content */}
          <div className="space-y-10">
            {/* Excerpt / intro */}
            <div className="blog-section p-6 rounded-2xl bg-blue-50 border-l-4 border-blue-600">
              <p className="text-blue-900 text-lg leading-relaxed font-medium italic">
                {post.excerpt}
              </p>
            </div>

            {/* Sections */}
            {post.sections.map((section, i) => (
              <div key={i} className="blog-section space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                  {section.heading}
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-8">
                  {section.body}
                </p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 mt-4">
                    {section.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                        <span className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Tags */}
            <div className="blog-section pt-6 border-t border-slate-200">
              <p className="text-sm font-semibold text-slate-500 mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 text-sm rounded-xl font-medium transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author card */}
            <div className="blog-section bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">About the Author</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {post.authorAvatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-500">{post.authorRole}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expert at TechDeployers helping businesses succeed with modern digital solutions.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={14} className="text-blue-600" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock size={14} className="text-blue-600" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Tag size={14} className="text-blue-600" />
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Work With Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {/* ── RELATED POSTS ── */}
      {allRelated.length > 0 && (
        <section className="bg-white border-t border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full inline-block" />
              More Articles You Might Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRelated.map((relPost) => (
                <Link
                  key={relPost.slug}
                  to={`/blog/${relPost.slug}`}
                  className="related-card group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={relPost.coverImage}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className={`absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${relPost.categoryColor}`}>
                      {relPost.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{relPost.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
                      <Clock size={12} />
                      {relPost.readTime}
                      <span>·</span>
                      {relPost.date.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all hover:shadow-xl"
              >
                View All Articles
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to take action?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let TechDeployers build your next digital solution — website, app, or marketing campaign.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
