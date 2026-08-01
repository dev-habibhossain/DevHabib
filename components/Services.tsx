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
    <section id="services" className="w-full bg-skew-section py-28 my-10">
      <div className="max-w-7xl mx-auto px-8">
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
