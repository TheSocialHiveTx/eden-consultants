
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Services</h1>
          <p className="text-xl text-slate-600">
            Professional development consulting tailored for complex commercial environments. We bridge the gap between initial concept and construction mobilization.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="sticky top-28">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Service {idx + 1}</span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wide mb-4">Focus Areas</h4>
                      <ul className="space-y-3">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex gap-2 text-slate-600 text-sm">
                            <span className="text-blue-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wide mb-4">Key Deliverables</h4>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex gap-2 text-slate-600 text-sm">
                            <span className="text-green-500">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-50 rounded-3xl aspect-[4/3] flex items-center justify-center border border-slate-100 p-8">
                 <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                 />
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Options */}
        <section className="mt-32 pt-20 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Flexible Engagement Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 text-white p-10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">One-Time Consult</h3>
              <p className="text-slate-400 mb-6 text-sm">Best for early site feasibility or "second opinion" reviews on specific permitting roadblocks.</p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2 opacity-80"><span>•</span> Fixed-fee deliverable</li>
                <li className="flex gap-2 opacity-80"><span>•</span> 72-hour turnaround option</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-600 p-10 rounded-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recommended</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Advisory Retainer</h3>
              <p className="text-slate-600 mb-6 text-sm">Ongoing high-impact coordination for developers managing multiple projects or complex rollouts.</p>
              <ul className="space-y-3 text-sm mb-8 text-slate-500">
                <li className="flex gap-2"><span>•</span> Priority availability</li>
                <li className="flex gap-2"><span>•</span> Weekly strategy alignment</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Project-Based Package</h3>
              <p className="text-slate-600 mb-6 text-sm">End-to-end consulting from feasibility through building permit issuance.</p>
              <ul className="space-y-3 text-sm mb-8 text-slate-500">
                <li className="flex gap-2"><span>•</span> Milestone-linked billing</li>
                <li className="flex gap-2"><span>•</span> Full consultant oversight</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="text-blue-600 font-bold hover:underline">Discuss your project requirements →</Link>
          </div>
        </section>
      </div>
    </div>
  );
};
