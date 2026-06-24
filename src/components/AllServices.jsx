import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { whatWeDoDetails } from "../data/siteData";
import ServiceAccordion from "./ServiceAccordion";

function AllServices() {
  const location = useLocation();
  const [openService, setOpenService] = useState("medicare");

  useEffect(() => {
    if (location.hash) {
      const idFromHash = location.hash.replace("#", "");
      setOpenService(idFromHash);
    } else {
      setOpenService("medicare");
    }
  }, [location.hash]);

  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            What We Do
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Insurance Solutions Designed Around Your Needs
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore Medicare, life insurance, retirement planning, health
            coverage, and other protection options with guidance tailored to
            your situation.
          </p>
        </div>

        <div className="space-y-6">
          {whatWeDoDetails.map((service) => (
            <ServiceAccordion
              key={service.id}
              service={service}
              isOpen={openService === service.id}
              onToggle={() =>
                setOpenService(openService === service.id ? null : service.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllServices;