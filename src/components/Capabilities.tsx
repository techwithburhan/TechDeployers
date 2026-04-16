import React from 'react';
import { 
  Code2, Globe, ShoppingBag, Smartphone, 
  BarChart3, Mail, Infinity, Cloud, 
  ArrowUpRight, Sparkles 
} from 'lucide-react';

// Define the "shape" of an item so TypeScript understands it
interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  shadow: string;
}

interface ServiceCardProps {
  item: ServiceItem;
}

// --- SUB-COMPONENT: Service Card ---
const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div 
      className={`group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.border} ${item.shadow}`}
    >
      {/* Icon Container */}
      <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        {item.icon}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
          <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Hover Background Glow */}
      <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${item.bg}`} />
    </div>
  );
};

// --- MAIN COMPONENT: Capabilities ---
const Capabilities: React.FC = () => {
  const categories = [
    {
      name: "Development Excellence",
      items: [
        {
          title: 'Custom Website',
          desc: 'High-end, scalable web applications built with modern frameworks.',
          icon: <Code2 size={24} />,
          color: 'text-blue-600',
          bg: 'bg-blue-50',
          border: 'group-hover:border-blue-200',
          shadow: 'group-hover:shadow-blue-100'
        },
        {
          title: 'WordPress',
          desc: 'Custom themes and seamless CMS management for easy control.',
          icon: <Globe size={24} />,
          color: 'text-indigo-600',
          bg: 'bg-indigo-50',
          border: 'group-hover:border-indigo-200',
          shadow: 'group-hover:shadow-indigo-100'
        },
        {
          title: 'Shopify',
          desc: 'Conversion-focused e-commerce stores that drive massive sales.',
          icon: <ShoppingBag size={24} />,
          color: 'text-green-600',
          bg: 'bg-green-50',
          border: 'group-hover:border-green-200',
          shadow: 'group-hover:shadow-green-100'
        },
        {
          title: 'Mobile Apps',
          desc: 'Premium iOS and Android experiences with native-level performance.',
          icon: <Smartphone size={24} />,
          color: 'text-purple-600',
          bg: 'bg-purple-50',
          border: 'group-hover:border-purple-200',
          shadow: 'group-hover:shadow-purple-100'
        },
      ]
    },
    {
      name: "Growth & Infrastructure",
      items: [
        {
          title: 'Digital Marketing',
          desc: 'Data-driven SEO and SEM strategies to dominate your niche.',
          icon: <BarChart3 size={24} />,
          color: 'text-orange-600',
          bg: 'bg-orange-50',
          border: 'group-hover:border-orange-200',
          shadow: 'group-hover:shadow-orange-100'
        },
        {
          title: 'Business Email',
          desc: 'Enterprise-grade secure email setup and domain management.',
          icon: <Mail size={24} />,
          color: 'text-red-600',
          bg: 'bg-red-50',
          border: 'group-hover:border-red-200',
          shadow: 'group-hover:shadow-red-100'
        },
        {
          title: 'DevOps Automation',
          desc: 'Optimized CI/CD pipelines for rapid and safe deployments.',
          icon: <Infinity size={24} />,
          color: 'text-cyan-600',
          bg: 'bg-cyan-50',
          border: 'group-hover:border-cyan-200',
          shadow: 'group-hover:shadow-cyan-100'
        },
        {
          title: 'AWS Cloud Support',
          desc: 'Architecting and managing highly available cloud infrastructures.',
          icon: <Cloud size={24} />,
          color: 'text-amber-600',
          bg: 'bg-amber-50',
          border: 'group-hover:border-amber-200',
          shadow: 'group-hover:shadow-amber-100'
        },
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">
              <Sparkles size={16} />
              <span>Our Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Tailored Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Modern Problems.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-xs">
            We don't just provide services; we build competitive advantages.
          </p>
        </div>

        {/* Categories Container */}
        <div className="space-y-24">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-10">
              {/* Category Title Header */}
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-slate-800 whitespace-nowrap">{category.name}</h3>
                <div className="h-[1px] w-full bg-slate-200" />
              </div>

              {/* The Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIdx) => (
                  <ServiceCard key={itemIdx} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;