function SchedulePage() {
  const advisors = [
    {
      name: "Rosario Marquez",
      phone: "5153052213",
      email: "rosario@truecare-insurance.com",
      bookingUrl: "",
    },
    {
      name: "Armida Gonzalez",
      phone: "5153053545",
      email: "armidagonzalez101@gmail.com",
      bookingUrl: "",
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Schedule an Appointment
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Book a time with a licensed advisor
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose the advisor you would like to speak with and schedule your
            appointment.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
            >
              <div className="border-b border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  {advisor.name}
                </h2>

                <p className="mt-2 text-slate-600">
                  Licensed Insurance Advisor
                </p>
              </div>

              {advisor.bookingUrl ? (
                <iframe
                  src={advisor.bookingUrl}
                  title={`Schedule with ${advisor.name}`}
                  className="h-[950px] w-full"
                />
              ) : (
                <div className="flex min-h-[520px] flex-col items-center justify-center px-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Online Booking Coming Soon
                  </h3>

                  <p className="mt-4 max-w-md text-slate-600">
                    This advisor’s calendar will be available soon. For now, you
                    can contact them directly.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href={`tel:${advisor.phone}`}
                      className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white hover:bg-[var(--color-primary-dark)]"
                    >
                      Call {advisor.name.split(" ")[0]}
                    </a>

                    <a
                      href={`mailto:${advisor.email}?subject=Insurance Consultation`}
                      className="rounded-xl border border-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-primary)] hover:bg-blue-50"
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