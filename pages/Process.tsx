
import React from 'react';
import { Link } from 'react-router-dom';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by clarifying your high-level goals, budget assumptions, and desired timeline.',
    details: ['Goal alignment session', 'Stakeholder identification', 'Constraint inventory']
  },
  {
    step: '02',
    title: 'Feasibility Scan',
    description: 'A deep dive into the physical and regulatory constraints of the site.',
    details: ['Utility capacity check', 'Access & grading review', 'Showstopper identification']
  },
  {
    step: '03',
    title: 'Permitting Roadmap',
    description: 'We map out every approval needed, from municipal entitlements to final building permits.',
    details: ['Milestone timeline creation', 'Risk flag highlighting', 'City coordination planning']
  },
  {
    step: '04',
    title: 'Team Alignment',
    description: 'Ensuring your architect, civil, and MEP consultants have zero scope gaps.',
    details: ['Consultant scope review', 'Action tracker setup', 'Decision log management']
  },
  {
    step: '05',
    title: 'Execution Support',
    description: 'Ongoing visibility during design and mobilization to ensure owner priorities are met.',
    details: ['Progress monitoring', 'Issue escalation support', 'Owner-side risk log']
  }
];

export const Process: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Process</h1>
          <p className="text-xl text-slate-600">
            Predictable outcomes require a repeatable process. We follow a structured approach to move your project from a concept to a mobilized construction site.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-[3.5rem] top-0 bottom-0 w-1 bg-slate-100 z-0"></div>
          
          <div className="space-y-24 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="flex-shrink-0">
                   <div className="w-28 h-28 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-blue-100">
                     {step.step}
                   </div>
                </div>
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Deliverables & Tasks</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                       {step.details.map((detail, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                           <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                           {detail}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 md:p-20 bg-blue-600 rounded-[3rem] text-center text-white">
           <h2 className="text-3xl font-bold mb-6">Ready to start at Step 01?</h2>
           <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
             The best discovery calls happen early. Let's align your project goals before the first design contract is signed.
           </p>
           <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors inline-block shadow-2xl">
             Request a Discovery Session
           </Link>
        </div>
      </div>
    </div>
  );
};
