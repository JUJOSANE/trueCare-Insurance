import { whatWeDoDetails } from "../data/siteData";
import ServiceAccordion from "./ServiceAccordion";

function AllServices() {
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            What We Do
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Insurance guidance made simple
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore the areas where True Care Insurance provides clear,
            personalized support.
          </p>
        </div>

        <div className="space-y-6">
          {whatWeDoDetails.map((service) => (
            <ServiceAccordion key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllServices;