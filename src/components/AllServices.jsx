import { allServices } from "../data/siteData";

function AllServices() {
  return (
    <section
      id="all-services"
      className="bg-white px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Servicios completos
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Asesoría integral para proteger lo que más importa
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Conozca las áreas en las que podemos acompañarle, desde seguros de
            salud hasta orientación ante accidentes y reclamaciones.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allServices.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[var(--color-primary)] p-8 text-center text-white md:p-10">
          <h3 className="text-2xl font-bold">
            ¿No está seguro de cuál servicio necesita?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-blue-50">
            Escríbanos o llámenos. Le orientamos de forma clara según su caso.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-4 font-semibold text-[var(--color-primary)] transition hover:bg-slate-100"
          >
            Solicitar orientación
          </a>
        </div>
      </div>
    </section>
  );
}

export default AllServices;