import { contactInfoData } from "@/lib/data";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export function ContactInfoCard() {
  return (
    <div className="space-y-6">
      <div className="gcard glass p-6 rounded-3xl border border-gray-100 dark:border-[#1f2937] shadow-sm flex items-start gap-4 hover:border-[#3EB489] transition">
        <div className="w-10 h-10 rounded-xl bg-[#3EB489]/10 text-[#3EB489] flex items-center justify-center shrink-0">
          <PhoneCall className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#3EB489] uppercase tracking-wider">
            Phone / WhatsApp
          </span>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
            {contactInfoData.phone}
          </h4>
        </div>
      </div>

      <div className="gcard glass p-6 rounded-3xl border border-gray-100 dark:border-[#1f2937] shadow-sm flex items-start gap-4 hover:border-[#FF7070] transition">
        <div className="w-10 h-10 rounded-xl bg-[#FF7070]/10 text-[#FF7070] flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#FF7070] uppercase tracking-wider">
            Email Address
          </span>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-0.5 break-all">
            {contactInfoData.email}
          </h4>
        </div>
      </div>

      <div className="gcard glass p-6 rounded-3xl border border-gray-100 dark:border-[#1f2937] shadow-sm flex items-start gap-4 hover:border-[#3EB489] transition">
        <div className="w-10 h-10 rounded-xl bg-[#3EB489]/10 text-[#3EB489] flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-[#3EB489] uppercase tracking-wider">
            Location
          </span>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
            {contactInfoData.location}
          </h4>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center space-x-3 pt-2">
        <a
          href={contactInfoData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#111827] border border-gray-200 dark:border-[#1f2937] text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-[#3EB489] hover:text-white dark:hover:bg-[#3EB489] transition"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
        <a
          href={contactInfoData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#111827] border border-gray-200 dark:border-[#1f2937] text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-[#FF7070] hover:text-white dark:hover:bg-[#FF7070] transition"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
