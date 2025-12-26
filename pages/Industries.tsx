
import React from 'react';
import { INDUSTRIES } from '../constants';
import { Link } from 'react-router-dom';

export const Industries: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Expertise by Industry</h1>
          <p className="text-xl text-slate-600">
            Commercial real estate isn't one-size-fits-all. We provide specialized knowledge for sectors with specific technical and operational demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="bg-slate-50 border border-slate-100 p-10 rounded-3xl flex flex-col hover:shadow-xl hover:border-blue-200 transition-all">
              <div className="text-5xl mb-6">{industry.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{industry.label}</h2>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {industry.description}
              </p>
              
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Critical Focus Points</h3>
                <ul className="space-y-3">
                  {industry.focusPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline group">
                Discuss a {industry.label} project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Reputable Projects Mention */}
        <section className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to reduce your project risk?</h2>
            <p className="text-slate-400 text-lg mb-12">
              Our industry-specific roadmaps identify permitting traps, utility gaps, and schedule risks before they become expensive problems.
            </p>
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors inline-block shadow-2xl">
              Get an Expert Opinion
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
