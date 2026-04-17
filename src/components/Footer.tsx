import { Link } from 'react-router-dom';
import { Code2, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Tech<span className="text-blue-500">Deployers</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From web development to digital marketing, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white transition-all">
                <Globe size={20} />
              </a>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Android Apps</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Hosting & Domain</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <span>Jodhpur, Rajasthan, India — Multiple Locations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <span>+91 (759) 764-5334</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span>info@techdeployers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {currentYear} TechDeployers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
