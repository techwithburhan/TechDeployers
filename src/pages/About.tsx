import React from 'react';
import { CheckCircle2, Users, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.',
      icon: <Lightbulb className="text-blue-600" size={32} />
    },
    {
      title: 'Quality',
      description: 'We are committed to delivering excellence in every line of code and every design.',
      icon: <Award className="text-blue-600" size={32} />
    },
    {
      title: 'Client Focus',
      description: 'Your success is our success. We work closely with you to understand your vision.',
      icon: <Users className="text-blue-600" size={32} />
    },
    {
      title: 'Results Driven',
      description: 'We focus on delivering measurable outcomes that drive real business growth.',
      icon: <Target className="text-blue-600" size={32} />
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-blue-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="text-slate-600 font-medium">Years Experience</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">About TechDeployers</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">We Are Your Partners in Digital Excellence</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with a passion for technology and a vision for business growth, TechDeployers has grown into a leading provider of digital solutions. We believe that technology should be an enabler, not a barrier, to your success.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of dedicated experts works tirelessly to deliver high-quality, innovative, and impactful solutions that help our clients navigate the ever-changing digital landscape.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {['Expert Team', 'Innovative Solutions', 'Client-Centric Approach', 'Proven Track Record'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do and how we interact with our clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
