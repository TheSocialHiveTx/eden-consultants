
import React from 'react';

export const Resources: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Resources</h1>
          <p className="text-xl text-slate-600">
            Tools, checklists, and insights to help you navigate the commercial development landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Downloads */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs">↓</span>
              Downloads
            </h2>
            <div className="space-y-4">
               <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all cursor-pointer">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600">Due Diligence Checklist</h3>
                  <p className="text-xs text-slate-500 mb-4">PDF • 1.2MB • High-level site verification</p>
                  <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">Download PDF</span>
               </div>
               <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all cursor-pointer">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600">Eden Capabilities Sheet</h3>
                  <p className="text-xs text-slate-500 mb-4">PDF • 800KB • Overview of our services</p>
                  <span className="text-blue-600 text-sm font-bold uppercase tracking-wider">Download PDF</span>
               </div>
            </div>
          </div>

          {/* Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-8">Latest Insights</h2>
            <div className="space-y-12">
               <article className="border-b border-slate-100 pb-12">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Article • 5 min read</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                    What to Verify Before You Go Under Contract on a Commercial Site
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    In the current development landscape, "standard" due diligence often misses the utility capacity issues that can kill a project. Here are the three non-negotiables we look at for every feasibility study...
                  </p>
                  <button className="text-blue-600 font-bold hover:underline">Read full article →</button>
               </article>
               
               <article className="border-b border-slate-100 pb-12">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Article • 4 min read</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                    Navigating Drive-Thru Permitting for QSR in 2025
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Municipalities are becoming increasingly strict about traffic stacking and site access. We breakdown the latest trends in drive-thru permitting and how to prepare your civil team...
                  </p>
                  <button className="text-blue-600 font-bold hover:underline">Read full article →</button>
               </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
