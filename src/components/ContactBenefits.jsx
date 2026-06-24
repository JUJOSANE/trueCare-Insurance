import {
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  CalendarCheck,
  MessageCircle,
  FileCheck,
} from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Personalized Guidance",
    description: "We take time to understand your needs before recommending options.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Advisors",
    description: "Work directly with knowledgeable insurance professionals.",
  },
  {
    icon: HeartHandshake,
    title: "Human Support",
    description: "Clear communication and support throughout the process.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Appointments",
    description: "Schedule a time that works best for you.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Reach us by phone, email, or appointment request.",
  },
  {
    icon: FileCheck,
    title: "Coverage Assistance",
    description: "Get help reviewing Medicare, life insurance, and health coverage options.",
  },
];

function ContactBenefits() {
  return (
    <section className="mt-12">
      <div className="mb-8 text-center">
        <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          Why Contact Us
        </span>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Guidance you can feel confident about
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
                {benefit.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ContactBenefits;