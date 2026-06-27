import { company } from "../data/siteData";
import img from "../assets/imgHome.webp";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden px-5 py-24 md:px-12 md:py-34 lg:px-24">
      <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-100 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-100 opacity-20 blur-2xl" />

      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="w-full min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:text-sm">
            {t.hero.tag}
          </p>

          <h1 className="mb-6 max-w-full text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mb-8 max-w-full text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {t.hero.text}
          </p>

          <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-blue-700 px-5 py-4 text-center text-sm font-semibold text-white shadow-md transition hover:bg-blue-800 sm:w-auto sm:px-6 sm:text-base"
            >
              {t.hero.whatsapp}
            </a>

            <a
              href={`tel:${company.phone}`}
              className="w-full rounded-xl border border-[var(--color-primary)] px-5 py-4 text-center text-sm font-semibold text-[var(--color-primary)] transition hover:bg-blue-50 sm:w-auto sm:px-6 sm:text-base"
            >
              {t.hero.call}
            </a>
          </div>
        </div>

        <div className="w-full min-w-0 overflow-hidden rounded-3xl shadow-xl">
          <div className="h-72 w-full rounded-2xl bg-blue-50 sm:h-[420px]">
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