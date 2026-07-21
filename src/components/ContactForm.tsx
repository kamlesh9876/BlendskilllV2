import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success';

function Field({
  name,
  type,
  label,
  required,
  autoComplete,
}: {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="float-input mb-5">
      <input
        type={type}
        name={name}
        placeholder=" "
        required={required}
        autoComplete={autoComplete}
      />
      <label>{label}</label>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    
    const form = e.currentTarget;
    setStatus('submitting');

    // Simulate form submission with 1.5 second delay for realistic UX
    setTimeout(() => {
      setStatus('success');
      form.reset();
      // Reset after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-8 md:p-12 backdrop-blur-md" noValidate>
      <h3 className="font-display text-2xl md:text-[1.75rem] mb-8">Get a free strategy call</h3>

      <Field name="name" type="text" label="Your name" required autoComplete="name" />
      <Field name="email" type="email" label="Work email" required autoComplete="email" />
      <Field name="phone" type="tel" label="Phone number (optional)" autoComplete="tel" />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary btn-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending…</span>
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle2 size={18} />
            <span>Thanks — we'll be in touch!</span>
          </>
        ) : (
          <span>Request Consultation</span>
        )}
      </button>

      <p className="text-center text-xs text-[#64748b] mt-4">We'll get back to you within one business day.</p>
    </form>
  );
}
