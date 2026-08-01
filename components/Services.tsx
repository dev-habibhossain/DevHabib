import { servicesData } from "@/lib/data";
import { Code2, Layers, Server, Cpu, Layout, Database } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Server,
  Cpu,
  Layout,
  Database,
};

export function Services() {
  return (
    <section id="services" className="relative w-full bg-skew-section py-28 my-10 overflow-hidden">
      {/* Hero Background Accents */}
      <div className="w-32 h-32 bg-grid-dots absolute top-8 left-8 -z-10" />
      <div className="w-32 h-32 bg-grid-dots absolute bottom-8 right-8 -z-10" />
      <svg
        className="absolute top-10 right-10 w-80 h-80 text-brand-coral/20 pointer-events-none -z-10 animate-float"
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

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-brand-mint font-bold text-xs uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            My Services
          </h2>
          <p className="text-brand-muted text-xs sm:text-sm mt-3">
            Comprehensive full stack web development services tailored to build high-performance web applications.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
          {servicesData.map((service) => {
            const IconComp = iconMap[service.iconName] || Code2;
            const isMint = service.accent === "mint";

            return (
              <div
                key={service.id}
                className={`gcard glass p-8 rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm space-y-4 transition ${
                  isMint ? "hover:border-brand-mint" : "hover:border-brand-coral"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isMint
                      ? "bg-brand-mint-light text-brand-mint"
                      : "bg-brand-coral-light text-brand-coral"
                  }`}
                >
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
