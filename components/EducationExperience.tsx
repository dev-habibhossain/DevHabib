import { timelineData } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  GraduationCap,
};

export function EducationExperience() {
  return (
    <section id="education" className="w-full bg-skew-section py-20 my-10">
      <div className="max-w-5xl mx-auto px-8">
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
