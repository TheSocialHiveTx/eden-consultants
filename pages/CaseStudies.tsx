
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { Industry } from '../types';

const FILTERS: (Industry | 'All')[] = ['All', 'Shopping Center', 'QSR', 'Restaurant', 'Office Condo', 'Medical Condo'];

export const CaseStudies: React.FC = () => {
  const [filter, setFilter] = useState<Industry | 'All'>('All');
  const [search, setSearch] = useState('');

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter(study => {
      const matchesFilter = filter === 'All' || study.industry === filter;
      const matchesSearch = 
        study.title.toLowerCase().includes(search.toLowerCase()) ||
        study.tags.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
        study.overview.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h1>
          <p className="text-slate-600 text-lg">Real outcomes from our development consulting engagements.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="w-full lg:w-96 relative">
             <input 
                type="text"
                placeholder="Search by project type, keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             />
             <svg className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <Link 
              to={`/case-studies/${study.slug}`} 
              key={study.slug} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col h-full"
            >
              <div className="aspect-[4/3] relative bg-slate-200 overflow-hidden">
                <img 
                  src={study.imageUrl} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                  {study.industry}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6">
                  {study.overview}
                </p>
                <div className="mt-auto flex justify-between items-center text-sm font-semibold">
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                  <span className="text-slate-400">{study.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-40">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-xl font-bold text-slate-900">No matching projects found</h3>
            <p className="text-slate-600 mt-2">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {setFilter('All'); setSearch('');}}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
