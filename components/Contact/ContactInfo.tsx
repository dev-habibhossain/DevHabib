import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfoDataList } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

export function ContactInfo() {
  return (
    <div className="space-y-4">
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
              <p className="text-xs text-brand-muted">{item.label}</p>
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
    </div>
  );
}
