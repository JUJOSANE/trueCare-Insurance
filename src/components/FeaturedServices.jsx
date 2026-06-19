import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/siteData";
import {ShieldPlus,HeartHandshake, Landmark} from "lucide-react";

const icons = {
  health: ShieldPlus,
  vehicle: Landmark,
  claims: HeartHandshake,
};

function FeaturedServices() {
  return (
    <section id="featured-services" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Nuestros servicios
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Insurance Solutions Tailored to Your Need
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide personalized guidance for Medicare, life insurance,
            and retirement planning, helping you make informed decisions
            with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <article
                key={service.title}
                className="group flex min-h-[360px] flex-col rounded-[2rem] border border-slate-100 bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon size={40} strokeWidth={1.8} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mb-8 flex-1 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;