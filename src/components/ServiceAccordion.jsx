import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceAccordion({ service }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      id={service.id}
      className={`scroll-mt-28 overflow-hidden rounded-[2rem] border bg-white shadow-sm transition-all duration-300 ${
        isOpen
          ? "border-[var(--color-primary)] shadow-xl"
          : "border-slate-200"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="grid w-full gap-6 p-5 text-left md:grid-cols-[220px_1fr_auto] md:items-center md:p-6"
      >
        <div className="h-48 overflow-hidden rounded-3xl bg-slate-200 md:h-36">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Service
          </span>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            {service.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {service.summary}
          </p>
        </div>

        <ChevronDown
          className={`mx-auto shrink-0 text-[var(--color-primary)] transition duration-300 md:mx-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={30}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-6 pb-8 pt-6 md:ml-[244px]">
            <ul className="space-y-3 text-slate-600">
              {service.details.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/schedule"
              className="mt-8 inline-block rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ServiceAccordion;