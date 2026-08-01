import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { contactInfoDataList, socialLinksData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

export function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-6">
      {contactInfoDataList.map((item, idx) => {
        const IconComp = iconMap[item.iconName] || Mail;
        const isMint = item.accent === "mint";

        return (
          <div
            key={idx}
            className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder flex items-center space-x-4 shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                isMint
                  ? "bg-brand-mint-light text-brand-mint"
                  : "bg-brand-coral-light text-brand-coral"
              }`}
            >
              <IconComp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-brand-muted font-medium">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-xs font-bold text-gray-900 dark:text-white hover:text-brand-mint transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-xs font-bold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {/* Social Profiles Card */}
      <div className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-brand-darkBorder space-y-4 shadow-sm">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
          Social Profiles
        </h4>
        <div className="flex flex-wrap gap-2">
          {socialLinksData.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-100 dark:border-gray-700 hover:text-brand-mint hover:border-brand-mint transition"
            >
              {social.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
