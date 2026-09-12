'use client';

import { personalInfo } from '@/data';
import { AlertCircle, CheckCircle2, FileText, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-brand-mint dark:bg-brand-darkCard dark:border-brand-mint/30 rounded-3xl p-8 text-white shadow-xl sm:p-10 dark:border">
        <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white dark:text-white">
          Leave us a Message
        </h3>

        {status.type === 'success' && (
          <div className="dark:text-brand-mint dark:border-brand-mint/30 mb-4 flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 p-4 text-xs font-semibold text-white dark:bg-emerald-950/40">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {status.message}
          </div>
        )}

        {status.type === 'error' && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-white/30 bg-red-500/30 p-4 text-xs font-semibold text-white dark:border-red-500/30 dark:bg-red-950/40 dark:text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              className="focus:ring-brand-coral dark:focus:ring-brand-mint w-full rounded-xl border border-transparent bg-white px-4 py-3 text-xs text-gray-900 placeholder-gray-400 transition focus:ring-2 focus:outline-none dark:border-gray-700/80 dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-400"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email"
              className="focus:ring-brand-coral dark:focus:ring-brand-mint w-full rounded-xl border border-transparent bg-white px-4 py-3 text-xs text-gray-900 placeholder-gray-400 transition focus:ring-2 focus:outline-none dark:border-gray-700/80 dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Your Message..."
            className="focus:ring-brand-coral dark:focus:ring-brand-mint w-full resize-none rounded-xl border border-transparent bg-white px-4 py-3 text-xs text-gray-900 placeholder-gray-400 transition focus:ring-2 focus:outline-none dark:border-gray-700/80 dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-400"
            required
          />

          {/* Action Buttons Inside Get In Touch Form */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-brand-coral inline-flex cursor-pointer items-center gap-2 rounded-xl px-8 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-red-500 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {/* DOWNLOAD RESUME BUTTON INSIDE FORM */}
            <a
              href={personalInfo.laravelResumeUrl}
              download="Habib_Hossain_Laravel_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-brand-mint/20 dark:hover:bg-brand-mint/30 dark:border-brand-mint/30 dark:text-brand-mint flex cursor-pointer items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/20"
            >
              <FileText className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
