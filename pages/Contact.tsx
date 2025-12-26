
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project_type: 'Shopping Center',
    project_location: '',
    timeline: 'Within 3 months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md text-center bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">✓</div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h2>
          <p className="text-slate-600 mb-8">Thank you for reaching out. A senior consultant will review your project details and contact you within 24 business hours.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="grid lg:grid-cols-2">
        {/* Contact Info Sidebar */}
        <section className="bg-slate-900 text-white p-12 md:p-24 flex flex-col justify-center">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Let's coordinate your next project.</h1>
            <p className="text-xl text-slate-400 mb-12">
              Whether you need high-level feasibility notes or full project coordination, we provide the strategic layer developers trust.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">📞</div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <a href="tel:#" className="text-blue-400 hover:text-white transition-colors">(555) 000-0000</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">📧</div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:info@edenconsultants.com" className="text-blue-400 hover:text-white transition-colors">info@edenconsultants.com</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-bold mb-1">Service Area</h3>
                  <p className="text-slate-400">Regional coverage (Specific territories TBD)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Form */}
        <section id="discovery" className="p-12 md:p-24 bg-slate-50">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Request a Discovery Call</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project Type</label>
                <select 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                  value={formData.project_type}
                  onChange={e => setFormData({...formData, project_type: e.target.value})}
                >
                  <option>Shopping Center</option>
                  <option>Fast Food / QSR</option>
                  <option>Restaurant</option>
                  <option>Office Condo</option>
                  <option>Medical Condo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Project Location (City/State)</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="e.g. Austin, TX"
                  value={formData.project_location}
                  onChange={e => setFormData({...formData, project_location: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message / Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Tell us about the project goals or current roadblocks..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="hidden">
                 <input type="checkbox" name="honeypot" />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white p-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Send Discovery Request
              </button>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting this form, you agree to be contacted by Eden Consultants regarding your project.
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
