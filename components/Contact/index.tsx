import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-8 py-20" data-aos="fade-up">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-brand-mint font-bold text-xs uppercase tracking-wider">
          Let&apos;s Connect
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Get In Touch
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm mt-2">
          Feel free to reach out for collaborations, job opportunities, or just a friendly chat!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info (Left) */}
        <ContactInfo />

        {/* Contact Form (Right) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
