export function ProfessionalStatus() {
  return (
    <section
      id="testimonials"
      className="w-full max-w-4xl mx-auto px-8 py-16 text-center space-y-8"
      data-aos="fade-up"
    >
      <div className="gcard glass p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm space-y-4">
        <p className="text-brand-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed italic font-medium">
          &quot;Habib is a dedicated developer who builds clean, maintainable, and robust code. His versatility in both MERN and Laravel allows him to deliver top-tier full-stack applications.&quot;
        </p>
        <div className="pt-2">
          <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Available for Hire — Full Stack Web Developer
          </h4>
        </div>
      </div>
    </section>
  );
}
