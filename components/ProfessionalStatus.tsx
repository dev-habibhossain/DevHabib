import { Sparkles } from "lucide-react";

export function ProfessionalStatus() {
  return (
    <section id="testimonials" className="max-w-4xl mx-auto px-8 py-16 text-center space-y-8" data-aos="fade-up">
      <div className="gcard glass p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-[#1f2937] shadow-sm space-y-4">
        <div className="w-14 h-14 bg-[#3EB489]/10 text-[#3EB489] rounded-full flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7" />
        </div>
        <p className="text-[#9ca3af] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed italic font-medium">
          &quot;Currently seeking my first professional opportunity. I&apos;m actively building projects and continuously improving my skills.&quot;
        </p>
        <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
          — Habib Hossain (Full Stack Developer)
        </h4>
      </div>
    </section>
  );
}
