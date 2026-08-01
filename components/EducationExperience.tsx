import { timelineData } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  GraduationCap,
};

export function EducationExperience() {
  return (
    <section id="education" className="relative w-full bg-skew-section py-20 my-10 overflow-hidden">
      {/* Hero Background Accents */}
      <div className="w-32 h-32 bg-grid-dots absolute top-6 left-6 -z-10" />
      <div className="w-32 h-32 bg-grid-dots absolute bottom-6 right-6 -z-10" />
      <svg
        className="absolute top-4 right-10 w-72 h-72 text-brand-mint/20 pointer-events-none -z-10 animate-float"
        style={{ animationDelay: "-2.5s" }}
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

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-brand-coral font-bold text-xs uppercase tracking-wider">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
            Education & Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          {timelineData.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || Briefcase;
            const isMint = item.accent === "mint";

            return (
              <div
                key={idx}
                className={`gcard glass p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm flex items-start gap-4 transition ${
                  isMint ? "hover:border-brand-mint" : "hover:border-brand-coral"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1 ${
                    isMint
                      ? "bg-brand-mint-light text-brand-mint"
                      : "bg-brand-coral-light text-brand-coral"
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        isMint
                          ? "bg-brand-mint-light text-brand-mint"
                          : "bg-brand-coral-light text-brand-coral"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
