"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Download } from "lucide-react";
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
      <div className="gcard glass p-8 rounded-3xl border border-gray-100 dark:border-[#1f2937] shadow-sm space-y-6">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
            Send Me a Message
          </h3>
          <p className="text-xs text-[#9ca3af] mt-1">
            Fill out the form below to discuss opportunities or collaboration.
          </p>
        </div>

        {status.type === "success" && (
          <div className="flex items-center gap-2 text-xs font-semibold p-4 rounded-xl bg-[#3EB489]/10 text-[#3EB489] border border-[#3EB489]/20">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            {status.message}
          </div>
        )}

        {status.type === "error" && (
          <div className="flex items-center gap-2 text-xs font-semibold p-4 rounded-xl bg-[#FF7070]/10 text-[#FF7070] border border-[#FF7070]/20">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1f2937] rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#3EB489] transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-3 bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1f2937] rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#3EB489] transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1f2937] rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#3EB489] transition resize-none"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7070] text-white font-semibold text-xs px-7 py-3.5 rounded-xl hover:bg-[#e05858] transition shadow-md disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3EB489]/10 text-[#3EB489] border border-[#3EB489]/20 font-semibold text-xs px-6 py-3.5 rounded-xl hover:bg-[#3EB489]/20 transition"
            >
              <Download className="w-4 h-4" /> Download Resume
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
