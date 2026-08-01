import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-8 py-20" data-aos="fade-up">
      {/* Background Accents matching Hero */}
      <div className="w-24 h-24 bg-grid-dots absolute top-6 right-6 -z-10" />
      <div className="w-20 h-20 bg-grid-dots absolute bottom-6 left-6 -z-10" />
      <svg
        className="absolute -top-10 left-10 w-64 h-64 text-brand-mint/15 pointer-events-none -z-10 animate-float"
        style={{ animationDelay: "-3s" }}
        viewBox="0 0 200 200"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          d="M45,-62C57,-52,65,-38,68,-23C71,-8,69,8,63,22C57,36,47,48,34,56C21,64,5,68,-12,66C-29,64,-47,56,-58,43C-69,30,-73,12,-70,-4C-67,-20,-57,-34,-45,-44C-33,-54,-19,-60,-2,-57C15,-54,33,-72,45,-62Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm mt-2">
          Open to Remote & On-site Opportunities worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards Left */}
        <div className="lg:col-span-4">
          <ContactInfo />
        </div>

        {/* Contact Form Right */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
