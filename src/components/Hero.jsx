import { company } from "../data/siteData";
import img from "../assets/forHero.png";

function Hero() {
  return (

    <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-24">
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-3xl opacity-20"></div>
      <div className="absolute left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-2xl opacity-20"></div>
      <div className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-[1fr_1.2fr]">
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

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <div className="flex h-80 items-center justify-center rounded-2xl bg-blue-50 text-center text-slate-500">
            
            <img
              src={img}
              alt="True Care Insurance"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;