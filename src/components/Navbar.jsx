import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { company } from "../data/siteData";
import logo from "../assets/logo.webp";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [isOpen]);

const links = [
  { key: "home", label: t.nav.home, href: "/" },
  { key: "whatWeDo", label: t.nav.whatWeDo, href: "/services" },
  { key: "about", label: t.nav.about, href: "/about" },
  { key: "contact", label: t.nav.contact, href: "/contact" },
];
const whatWeDoLinks = [
  { key: "medicare", label: t.servicesPage.medicare.title, to: "/services#medicare" },
  { key: "lifeInsurance", label: t.servicesPage.lifeInsurance.title, to: "/services#life-insurance" },
  { key: "healthInsurance", label: t.servicesPage.healthInsurance.title, to: "/services#health-insurance" },
  { key: "retirementPlanning", label: t.servicesPage.retirementPlanning.title, to: "/services#retirement-planning" },
  { key: "groupInsurance", label: t.servicesPage.groupInsurance.title, to: "/services#group-insurance" },
];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="True Care Insurance"
            className="h-10 w-auto md:h-14"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => {
            if (link.key === "whatWeDo") {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </Link>

                  <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-2xl border border-slate-100 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {whatWeDoLinks.map((item) => (
                      <Link
                        key={item.key}
                        to={item.to}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[var(--color-primary)]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-[var(--color-primary)]"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
<div className="hidden items-center gap-4 md:flex">
  <button
    onClick={toggleLanguage}
    className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
  >
    {language === "en" ? "ES" : "EN"}
  </button>

  <Link
    to="/schedule"
    className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-blue-800"
  >
    {t.nav.schedule}
  </Link>
</div>


          {/* RESPONSIVE MENU */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg border border-slate-200 p-2 text-2xl text-slate-700 md:hidden"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>
      
     {isOpen && (
  <div className="fixed left-0 top-0 z-[99999] h-[100dvh] w-screen overflow-hidden bg-white md:hidden">
    <div className="flex h-full w-full flex-col px-6 py-6">
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
      <div className="mt-6 flex justify-center">
      <button
        onClick={toggleLanguage}
        className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
      >
        {language === "en" ? "Español" : "English"}
      </button>
    </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto text-center text-2xl font-bold text-slate-800">
        {links.map((link) => {
          if (link.key === "whatWeDo") {
            return (
              <div key={link.href} className="flex flex-col items-center gap-3">
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>

                <div className="flex flex-col gap-2 text-base font-semibold text-slate-600">
                  {whatWeDoLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl bg-slate-100 px-4 py-2 transition hover:text-[var(--color-primary)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="transition hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          to="/schedule"
          onClick={() => setIsOpen(false)}
          className="mt-4 rounded-xl bg-blue-700 px-5 py-4 text-center text-xl font-semibold text-white"
        >
          {t.nav.schedule}
        </Link>
      </div>
    </div>
  </div>
)}
    </header>
  );
}

export default Navbar;