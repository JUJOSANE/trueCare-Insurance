import { company } from "../data/siteData";

function Hero() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Seguros de salud y asesoría vehicular
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Protección y acompañamiento cuando más lo necesita.
          </h1>

          <p className="mb-8 text-lg leading-8 text-slate-600">
            Le ayudamos a tomar decisiones seguras en temas de salud, seguros y
            situaciones vehiculares difíciles, con atención directa, clara y
            humana.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              className="rounded-xl bg-blue-700 px-6 py-4 text-center font-semibold text-white shadow-md transition hover:bg-blue-800"
            >
              Escribir por WhatsApp
            </a>

            <a
              href={`tel:${company.phone}`}
              className="rounded-xl border border-blue-700 px-6 py-4 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-xl">
          <div className="flex h-80 items-center justify-center rounded-2xl bg-blue-100 text-center text-slate-500">
            Imagen profesional aquí
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;