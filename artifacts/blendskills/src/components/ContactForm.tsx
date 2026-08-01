import { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, Sparkles, Send, ShieldCheck, ArrowRight } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = [
  'Custom Web & Mobile Apps',
  'AI & Automation',
  'Performance Marketing',
  'Branding & Strategy',
  'Full-Stack Agency Package',
];

const BUDGETS = ['< $5,000', '$5,000 - $15,000', '$15,000 - $30,000', '$30,000+'];

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState<string>('Custom Web & Mobile Apps');
  const [selectedBudget, setSelectedBudget] = useState<string>('$5,000 - $15,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [refId, setRefId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Read URL params if user navigated from ROI Calculator or Scope Estimator
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const s = params.get('service');
      const b = params.get('budget');
      const msg = params.get('msg');
      if (s) setSelectedService(s);
      if (b) setSelectedBudget(b);
      if (msg) setMessage(msg);
    }
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please fill in both your name and email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: selectedService,
          budget: selectedBudget,
          message: message.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setRefId(data.referenceId || 'BS-CONFIRMED');
      } else {
        throw new Error(data.error || 'Failed to submit request');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Connection issue. Please try again or email info@blendskills.co.in.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl p-8 md:p-12 bg-white border border-emerald-200 shadow-xl text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={36} />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600">
            Consultation Confirmed
          </span>
          <h3 className="font-display font-extrabold text-2xl text-slate-800">
            Thank you, {name}!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            We received your inquiry regarding <strong>{selectedService}</strong>. Our senior strategy consultant will reach out to <strong>{email}</strong> within 1 business day.
          </p>
        </div>

        {refId && (
          <div className="inline-block px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700">
            Reference Ticket: <strong className="text-[#0066cc] font-bold">{refId}</strong>
          </div>
        )}

        <div className="pt-2">
          <button
            onClick={() => {
              setStatus('idle');
              setName('');
              setEmail('');
              setPhone('');
              setMessage('');
            }}
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-slate-200/80 shadow-xl space-y-6"
      noValidate
    >
      <div>
        <div className="flex items-center gap-2 text-[#0066cc] font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          <span>Free Strategy Call</span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
          Let’s discuss your project
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Tell us about your goals and our experts will craft a tailored roadmap.
        </p>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-xs font-mono uppercase font-bold text-slate-700 mb-2">
          1. Which service are you interested in?
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const isSelected = selectedService === s;
            return (
              <button
                type="button"
                key={s}
                onClick={() => setSelectedService(s)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066cc] text-white shadow-md shadow-[#0066cc]/20 border border-[#0066cc]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Selection */}
      <div>
        <label className="block text-xs font-mono uppercase font-bold text-slate-700 mb-2">
          2. Estimated Project Budget (USD)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {BUDGETS.map((b) => {
            const isSelected = selectedBudget === b;
            return (
              <button
                type="button"
                key={b}
                onClick={() => setSelectedBudget(b)}
                className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md border border-slate-900'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rahul@company.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Project Details / Notes
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your requirements, timeline, or key feature requests..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc]/30 focus:border-[#0066cc] resize-none"
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white font-bold text-sm shadow-lg shadow-[#0066cc]/25 hover:shadow-xl hover:shadow-[#0066cc]/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <span>Request Free Strategy Call</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium pt-1">
        <ShieldCheck size={16} className="text-emerald-500" />
        <span>100% Privacy Guaranteed. No spam. 24h turn-around.</span>
      </div>
    </form>
  );
}
