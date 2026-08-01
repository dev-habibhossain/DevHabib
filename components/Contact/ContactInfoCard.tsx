import { contactInfoData } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfoCard() {
  return (
    <div className="space-y-4">
      <div className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-[#1f2937] flex items-center space-x-4 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#3EB489]/10 text-[#3EB489] flex items-center justify-center shrink-0">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs text-[#9ca3af]">Phone / WhatsApp</p>
          <p className="text-xs font-bold text-gray-900 dark:text-white">
            {contactInfoData.phone}
          </p>
        </div>
      </div>

      <div className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-[#1f2937] flex items-center space-x-4 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#FF7070]/10 text-[#FF7070] flex items-center justify-center shrink-0">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs text-[#9ca3af]">E-mail</p>
          <p className="text-xs font-bold text-gray-900 dark:text-white">
            {contactInfoData.email}
          </p>
        </div>
      </div>

      <div className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-[#1f2937] flex items-center space-x-4 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#3EB489]/10 text-[#3EB489] flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs text-[#9ca3af]">Location</p>
          <p className="text-xs font-bold text-gray-900 dark:text-white">
            {contactInfoData.location}
          </p>
        </div>
      </div>
    </div>
  );
}
