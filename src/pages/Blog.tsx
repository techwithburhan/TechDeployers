import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, Calendar, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filtered = blogPosts.filter((post) => {
    const matchCat = activeCategory === 'All' || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = blogPosts.filter((p) => p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-hero-title', { y: 50, opacity: 0, duration: 0.9, ease: 'power4.out' });
      gsap.from('.blog-hero-sub', { y: 30, opacity: 0, duration: 0.7, delay: 0.3, ease: 'power3.out' });
      gsap.from('.blog-search-bar', { y: 20, opacity: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' });

      gsap.utils.toArray<HTMLElement>('.blog-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%' },
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: 'power3.out',
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />
        </div>
        <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" aria-hidden="true">
          <defs><pattern id="blog-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M.5 60V.5H60" fill="none" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#blog-grid)" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm mb-6 backdrop-blur-md">
            <Tag size={14} className="text-blue-300" />
            <span>Insights, Guides & Industry Updates</span>
          </div>
          <h1 className="blog-hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            The <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">TechDeployers</span> Blog
          </h1>
          <p className="blog-hero-sub max-w-2xl mx-auto text-slate-300 text-lg mb-10">
            Expert insights on web development, mobile apps, digital marketing, cloud hosting, and business technology.
          </p>

          {/* Search */}
          <div className="blog-search-bar max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 backdrop-blur-md focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURED POSTS ── */}
      {!search && activeCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-600 rounded-full inline-block" />
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                        {post.authorAvatar}
                      </div>
                      <span className="font-medium text-slate-600">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CATEGORY FILTER + ALL POSTS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <Search size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No articles found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-100 transition-all duration-500 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className={`absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-lg">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {post.authorAvatar}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-700">{post.author}</p>
                        <p className="text-[10px] text-slate-400">{post.authorRole}</p>
                      </div>
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
        )}
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to grow your business online?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let us build your website, app, or marketing strategy from scratch.
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
};

export default Blog;
