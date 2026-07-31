import { ContactInfoCard } from "./ContactInfoCard";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 py-20" data-aos="fade-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-[#9ca3af] text-xs sm:text-sm mt-2">
          Open to Remote &amp; On-site Opportunities worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards Left */}
        <div className="lg:col-span-4">
          <ContactInfoCard />
        </div>
        {/* Contact Form Right */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
