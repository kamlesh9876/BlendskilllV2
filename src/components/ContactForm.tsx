import { useState, useCallback } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { getSupabaseClient, type LeadInsert } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Validation utility - reusable and testable
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateForm = (name: string, email: string): string | null => {
  if (!name.trim()) return 'Please enter your name';
  if (!email.trim()) return 'Please enter your email';
  if (!validateEmail(email)) return 'Please enter a valid email address';
  return null;
};

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
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent double submission
    if (status === 'submitting') return;
    
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim() || undefined;

    // Validate before state update
    const validationError = validateForm(name, email);
    if (validationError) {
      setStatus('error');
      setErrorMsg(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const payload: LeadInsert = { name, email, phone };

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from('leads').insert([payload] as any);
      if (error) throw error;
      setStatus('success');
      form.reset();
      // Reset success message after 4 seconds
      const timer = setTimeout(() => setStatus('idle'), 4000);
      return () => clearTimeout(timer);
    } catch (err) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMsg(message);
    }
  }, [status]);

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

      {status === 'error' && (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={15} />
          {errorMsg}
        </p>
      )}

      <p className="text-center text-xs text-[#64748b] mt-4">We'll get back to you within one business day.</p>
    </form>
  );
}
