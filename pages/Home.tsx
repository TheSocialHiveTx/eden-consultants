
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, INDUSTRIES, CASE_STUDIES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/const/1920/1080" 
            alt="Commercial construction background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Development Consulting for <span className="text-blue-400">Commercial Projects.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Expert guidance for shopping centers, QSR, restaurants, and medical condos—from feasibility to final execution support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-xl"
              >
                Request a Discovery Call
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 text-base font-semibold rounded-lg text-white hover:bg-slate-800 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Value Proposition</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">Risk reduction before dollars hit the ground.</h2>
            <ul className="space-y-4">
              {[
                'Site selection and feasibility clarity',
                'Entitlements and permitting navigation',
                'Budget and schedule realism early',
                'Coordination across architects, civil, and contractors'
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 md:p-12 relative">
             <div className="absolute top-0 right-0 p-8 text-slate-200">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H12.017C13.1216 14 14.017 13.1046 14.017 12V9C14.017 7.89543 13.1216 7 12.017 7H5.01703C3.91246 7 3.01703 7.89543 3.01703 9V21C3.01703 22.1046 3.91246 23 5.01703 23H12.017C13.1216 23 14.017 22.1046 14.017 21ZM5.01703 9H12.017V12H5.01703V9ZM5.01703 18V14H9.01703V16V18H5.01703Z"/></svg>
             </div>
             <p className="text-2xl font-medium text-slate-800 leading-snug relative z-10">
                "We provide the strategic layer that connects your vision to construction reality."
             </p>
             <div className="mt-6 font-semibold text-slate-600">— The Eden Team</div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Expert Consulting Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 text-sm font-semibold hover:underline">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Focused Expertise by Sector</h2>
            <p className="text-slate-600">We specialize in commercial sectors with unique operational intensities and technical requirements.</p>
          </div>
          <Link to="/industries" className="text-blue-600 font-semibold hover:underline">View all sectors</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry) => (
            <Link 
              key={industry.id} 
              to="/industries"
              className="group bg-white border border-slate-200 p-6 rounded-xl text-center hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <div className="font-bold text-slate-800">{industry.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Outcome Driven Consulting</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.slice(0, 3).map((study) => (
              <Link to={`/case-studies/${study.slug}`} key={study.slug} className="group block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-800">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform opacity-70"
                  />
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                    {study.industry}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors mb-2">{study.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{study.overview}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/case-studies" className="inline-flex items-center px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">
              Explore All Outcomes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tell us what you’re developing.</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Whether it's a first site feasibility study or a complex multi-unit rollout coordination, we can provide the roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Request a Discovery Call
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
