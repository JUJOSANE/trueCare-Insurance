import { useState } from "react";
import { company } from "../data/siteData";
import logo from "../assets/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Servicios", href: "/all-services" },
    { label: "Beneficios", href: "/benefits" },
    { label: "Cómo trabajamos", href: "/process" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="True Care Insurance"
            className="h-10 w-auto md:h-14"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          className="hidden rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] md:inline-block"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg border border-slate-200 p-2 text-2xl text-slate-700 md:hidden"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>
      
     <div
        className={`fixed inset-0 z-[999] h-dvh w-screen transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "visible bg-slate-950/60 opacity-100 backdrop-blur-sm"
            : "invisible bg-slate-950/0 opacity-0"
        }`}
      >
    <div
        className={`flex h-full w-full flex-col bg-white/95 px-6 py-6 transition-transform duration-500 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="True Care Insurance"
          className="h-10 w-auto"
        />

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-3xl text-slate-700 shadow-sm"
          aria-label="Cerrar menú"
        >
          ×
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center text-3xl font-bold text-slate-800">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[var(--color-primary)]"
          >
            {link.label}
          </a>
        ))}

        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="mt-4 w-full rounded-2xl bg-[var(--color-primary)] px-6 py-4 text-center text-lg font-bold text-white shadow-lg"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </div>
  </div>



      {/* <div
        className={`fixed inset-0 z-50 bg-white px-6 py-6 transition-all duration-300 md:hidden ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="True Care Insurance"
            className="h-10 w-auto"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-slate-200 px-3 py-1 text-3xl text-slate-700"
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        <div className="mt-16 flex flex-col gap-8 text-center text-2xl font-semibold text-slate-800">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="transition hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="mt-6 rounded-2xl bg-[var(--color-primary)] px-6 py-4 text-lg font-bold text-white shadow-lg"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div> */}
    </header>
  );
}

export default Navbar;