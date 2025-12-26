
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const study = useMemo(() => {
    return CASE_STUDIES.find(s => s.slug === slug);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 mb-8">The requested project detail does not exist or has been moved.</p>
          <Link to="/case-studies" className="text-blue-600 font-bold hover:underline">← Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pb-32">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img src={study.imageUrl} className="w-full h-full object-cover blur-sm scale-110" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-blue-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
            {study.industry}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">{study.title}</h1>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Location:</span> {study.location}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Year:</span> {study.year}
            </div>
            {study.timeline && (
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Timeline:</span> {study.timeline}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-2xl border border-slate-100">
          
          <div className="space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-blue-600 rounded"></span>
                Project Overview
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed font-light italic">
                "{study.overview}"
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Scope */}
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Consulting Scope</h3>
                <ul className="space-y-4">
                  {study.what_we_did.map((item, i) => (
                    <li key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl text-slate-600">
                      <span className="text-blue-500 font-bold">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Outcomes */}
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Outcomes & Value</h3>
                <ul className="space-y-4">
                  {study.outcomes.map((item, i) => (
                    <li key={i} className="flex gap-4 p-4 bg-green-50 rounded-xl text-slate-700">
                      <span className="text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Images if available */}
            <section className="bg-slate-50 rounded-3xl overflow-hidden aspect-video">
               <img src={study.imageUrl} className="w-full h-full object-cover" alt="Project visualization" />
            </section>
          </div>

          <div className="mt-24 pt-16 border-t border-slate-100 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready for similar results?</h2>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
              Schedule your discovery call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
