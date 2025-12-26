
import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
             <h1 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Clarity. Predictability. <br/><span className="text-blue-600">Risk Reduction.</span></h1>
             <p className="text-xl text-slate-600 mb-8 leading-relaxed">
               Eden Consultants was founded on a simple principle: commercial development shouldn't be a gamble. We act as the technical and strategic layer between a developer’s vision and a contractor’s mobilization.
             </p>
             <p className="text-slate-600 leading-relaxed">
               With deep experience across QSR, medical, and multi-tenant retail, we understand the common pitfalls—permitting traps, utility capacity surprises, and consultant scope gaps—that derail budgets and timelines.
             </p>
          </div>
          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/seed/about/800/800" alt="Consulting meeting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-6">🔍</div>
              <h3 className="text-xl font-bold mb-4">Extreme Clarity</h3>
              <p className="text-slate-600">We don't hide behind jargon. We provide clear feasibility notes, risk lists, and recommended next steps that you can act on immediately.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Predictability</h3>
              <p className="text-slate-600">Construction is inherently volatile. Our job is to inject as much predictability as possible through early-stage due diligence and rigorous coordination.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Risk Reduction</h3>
              <p className="text-slate-600">We prioritize identifying "showstoppers" early—before you sign a lease, close on a land purchase, or commit to a design contract.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">How We Work with Clients</h2>
        <div className="space-y-12">
          <div className="flex gap-8 items-start">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold rounded-xl flex items-center justify-center flex-shrink-0">01</div>
             <div>
                <h3 className="text-xl font-bold mb-2">Regular Cadence</h3>
                <p className="text-slate-600 leading-relaxed">Whether on a monthly retainer or a project-specific engagement, we maintain a predictable communication schedule with clearly documented logs and meeting minutes.</p>
             </div>
          </div>
          <div className="flex gap-8 items-start">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold rounded-xl flex items-center justify-center flex-shrink-0">02</div>
             <div>
                <h3 className="text-xl font-bold mb-2">Direct Deliverables</h3>
                <p className="text-slate-600 leading-relaxed">Every consult ends with a deliverable—a roadmap, a budget sanity check, or an action tracker. We measure our success by the clarity of your next move.</p>
             </div>
          </div>
          <div className="flex gap-8 items-start">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 font-bold rounded-xl flex items-center justify-center flex-shrink-0">03</div>
             <div>
                <h3 className="text-xl font-bold mb-2">Neutral Coordination</h3>
                <p className="text-slate-600 leading-relaxed">We act as the owner’s advocate. We aren’t the architect, the engineer, or the contractor—we are the coordinator who ensures all of them are aligned with your pro forma.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ snapshot */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-6">
              {[
                { q: "When is the best time to engage a consultant?", a: "Ideally before you go under contract on a site. Early-stage feasibility is where we provide the most risk reduction." },
                { q: "Do you handle the actual construction?", a: "No, we are consultants and owner reps. We coordinate the team and monitor progress, but we don't hold the prime construction contract." },
                { q: "Can you review my current project schedule?", a: "Yes. One of our most common engagements is a 'sanity check' on project logic and milestone realism." }
              ].map((faq, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-2xl">
                   <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                   <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
           </div>
           <div className="mt-16 text-center">
              <Link to="/contact" className="text-blue-400 font-bold hover:underline">Have more questions? Ask us directly →</Link>
           </div>
        </div>
      </section>
    </div>
  );
};
