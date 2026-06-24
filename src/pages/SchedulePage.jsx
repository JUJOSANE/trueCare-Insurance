import { Phone, Mail, CalendarDays } from "lucide-react";

const advisors = [
  {
    name: "Rosario Márquez",
    role: "Licensed Insurance Advisor",
    phone: "5153052213",
    phoneLabel: "515-305-2213",
    email: "rosario@truecare-insurance.com",
    bookingUrl: "https://calendly.com/jujosane888/free-insurance-consultation",
  },
  {
    name: "Armida Gonzalez",
    role: "Licensed Insurance Advisor",
    phone: "5153053545",
    phoneLabel: "515-305-3545",
    email: "armidagonzalez101@gmail.com",
    bookingUrl: "https://calendly.com/jujosane888/free-insurance-consultation",
  },
];

function SchedulePage() {
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Schedule an Appointment
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Choose your advisor
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Select the advisor you would like to speak with and book an
            available time.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              <div className="border-b border-slate-100 p-8">
                <p className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  {advisor.role}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {advisor.name}
                </h2>

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
                  className="h-[950px] w-full"
                />
              ) : (
                <div className="flex min-h-[420px] flex-col items-center justify-center px-8 py-12 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-primary)]">
                    <CalendarDays size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Online booking coming soon
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    This advisor’s calendar will appear here once the booking
                    link is connected. For now, you can contact them directly.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href={`tel:${advisor.phone}`}
                      className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                    >
                      Call {advisor.name.split(" ")[0]}
                    </a>

                    <a
                      href={`mailto:${advisor.email}?subject=Insurance Consultation`}
                      className="rounded-xl border border-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-primary)] transition hover:bg-blue-50"
                    >
                      Email {advisor.name.split(" ")[0]}
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchedulePage;