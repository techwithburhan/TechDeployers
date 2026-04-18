import { Link } from 'react-router-dom';
import { Code2, Globe, Mail, Server } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Tech<span className="text-blue-600">Deployers</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              Engineering digital excellence through modern technology and innovative design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-all">
                <Code2 size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-all">
                <Server size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services/custom-website-development" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services/android-application" className="hover:text-blue-400 transition-colors">App Development</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/cloud-solutions" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-6">Subscribe to get the latest tech news and updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-600 transition-all"
              />
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} TechDeployers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
