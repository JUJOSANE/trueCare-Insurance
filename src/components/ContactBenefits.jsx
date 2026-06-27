import {
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  CalendarCheck,
  MessageCircle,
  FileCheck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const benefits = [
  { key: "personalized", icon: UserCheck },
  { key: "licensed", icon: ShieldCheck },
  { key: "support", icon: HeartHandshake },
  { key: "appointments", icon: CalendarCheck },
  { key: "communication", icon: MessageCircle },
  { key: "coverage", icon: FileCheck },
];

function ContactBenefits() {
  const { t } = useLanguage();
  return (
    <section className="mt-12">
      <div className="mb-8 text-center">
        <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          {t.contact.benefitsTag}
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          {t.contact.benefitsTitle}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              key={benefit.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-primary)]">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {t.contact.benefits[benefit.key].title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {t.contact.benefits[benefit.key].description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ContactBenefits;