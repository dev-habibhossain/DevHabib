import { ContactInfoCard } from "./ContactInfoCard";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[#3EB489] font-bold text-xs uppercase tracking-wider">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Contact Me
        </h2>
        <p className="text-[#9ca3af] text-xs sm:text-sm mt-2">
          Let&apos;s build something great together. Reach out for projects or job opportunities!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <ContactInfoCard />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
