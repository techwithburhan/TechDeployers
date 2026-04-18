import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to start your digital journey? Our team is here to help you navigate the landscape of modern technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Email Us</h3>
                  <p className="text-slate-400">info@techdeployers.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Call Us</h3>
                  <p className="text-slate-400">+91 (759) 764-5334</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Visit Us</h3>
                  <p className="text-slate-400">We operate remotely and serve clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase">First Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none" placeholder="Burhan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase">Last Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none" placeholder="" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase">Email Address</label>
                <input type="email" className="w-full px-6 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none" placeholder="burhan@techdeployers.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
