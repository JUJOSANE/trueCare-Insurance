import { Phone, Mail, CalendarDays } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

const advisors = [
  {
    name: "Rosario Márquez",
    translationKey: "rosario",
    phone: "5153052213",
    phoneLabel: "515-305-2213",
    email: "rosario@truecare-insurance.com",
    bookingUrl: "https://calendly.com/jujosane888/free-insurance-consultation",
  },
  {
    name: "Armida Gonzalez",
    translationKey: "armida",
    phone: "5153053545",
    phoneLabel: "515-305-3545",
    email: "armidagonzalez101@gmail.com",
    bookingUrl: "https://calendly.com/jujosane888/free-insurance-consultation",
  },
];

function SchedulePage() {
  const { t } = useLanguage();
  return (
    <>
    <SEO
      title="Schedule an Insurance Consultation"
      description="Book a consultation with a True Care Insurance advisor for Medicare, health insurance, life insurance, and coverage guidance."
    />

    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            {t.schedule.tag}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {t.schedule.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t.schedule.text}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              
              <div className="border-b border-slate-100 p-8">
                <p className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  {t.schedule[advisor.translationKey].role}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {advisor.name}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {t.schedule[advisor.translationKey].text}
                </p>

                <div className="mt-6 flex flex-col gap-3 text-slate-600">
                  <a
                    href={`tel:${advisor.phone}`}
                    className="flex items-center gap-3 transition hover:text-[var(--color-primary)]"
                  >
                    <Phone size={18} />
                    {advisor.phoneLabel}
                  </a>

                  <a
                    href={`mailto:${advisor.email}?subject=Insurance Consultation`}
                    className="flex items-center gap-3 break-all transition hover:text-[var(--color-primary)]"
                  >
                    <Mail size={18} />
                    {advisor.email}
                  </a>
                </div>
              </div>

              {advisor.bookingUrl ? (
                <iframe
                src={advisor.bookingUrl}
                title={`Schedule with ${advisor.name}`}
                className="h-[760px] w-full md:h-[950px] lg:h-[980px]"
                style={{ border: "none" }}
              />
              ) : (
                <div className="flex min-h-[420px] flex-col items-center justify-center px-8 py-12 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-primary)]">
                    <CalendarDays size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {t.schedule.placeholder.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    {t.schedule.placeholder.text}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href={`tel:${advisor.phone}`}
                      className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                    >
                      {t.schedule.placeholder.call} {advisor.name.split(" ")[0]}
                    </a>

                    <a
                      href={`mailto:${advisor.email}?subject=Insurance Consultation`}
                      className="rounded-xl border border-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-primary)] transition hover:bg-blue-50"
                    >
                      {t.schedule.placeholder.email} {advisor.name.split(" ")[0]}
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default SchedulePage;