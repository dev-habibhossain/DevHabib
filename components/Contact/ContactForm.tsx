"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, FileText } from "lucide-react";
import { ResumeModal } from "../ResumeModal";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill out all required fields.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-brand-mint dark:bg-brand-darkCard dark:border dark:border-brand-mint/30 p-8 sm:p-10 rounded-3xl shadow-xl text-white">
        <h3 className="text-lg font-bold mb-6 text-white dark:text-white flex items-center gap-2">
          Leave us a Message
        </h3>

        {status.type === "success" && (
          <div className="flex items-center gap-2 text-xs font-semibold p-4 rounded-xl bg-white/20 dark:bg-emerald-950/40 text-white dark:text-brand-mint border border-white/30 dark:border-brand-mint/30 mb-4">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            {status.message}
          </div>
        )}

        {status.type === "error" && (
          <div className="flex items-center gap-2 text-xs font-semibold p-4 rounded-xl bg-red-500/30 dark:bg-red-950/40 text-white dark:text-red-300 border border-white/30 dark:border-red-500/30 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-xs border border-transparent dark:border-gray-700/80 focus:outline-none focus:ring-2 focus:ring-brand-coral dark:focus:ring-brand-mint transition"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-xs border border-transparent dark:border-gray-700/80 focus:outline-none focus:ring-2 focus:ring-brand-coral dark:focus:ring-brand-mint transition"
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
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-xs border border-transparent dark:border-gray-700/80 focus:outline-none focus:ring-2 focus:ring-brand-coral dark:focus:ring-brand-mint transition resize-none"
            required
          />

          {/* Action Buttons Inside Get In Touch Form */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-brand-coral text-white text-xs font-bold px-8 py-3.5 rounded-xl hover:bg-red-500 transition shadow-md disabled:opacity-50 inline-flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            {/* DOWNLOAD RESUME BUTTON INSIDE FORM */}
            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              className="bg-white/10 dark:bg-brand-mint/20 hover:bg-white/20 dark:hover:bg-brand-mint/30 border border-white/30 dark:border-brand-mint/30 text-white dark:text-brand-mint text-xs font-bold px-6 py-3.5 rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </button>
          </div>
        </form>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
