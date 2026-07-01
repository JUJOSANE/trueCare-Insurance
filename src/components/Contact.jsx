import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactBenefits from "./ContactBenefits";
import { useLanguage } from "../context/LanguageContext";
import ftRosarioyArmida from "../assets/rosarioyArmida.webp";

const advisors = [
  {
    name: "Rosario Marquez",
    role: "Insurance Agent",
    phone: "5153611764",
    phoneLabel: "515-361-1764",
    email: "rosario@truecare-insurance.com",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      tiktok: "#",
    },
  },
  {
    name: "Armida Gonzalez",
    role: "Insurance Agent",
    phone: "5153806904",
    phoneLabel: "515-380-6904",
    email: "armida@truecare-insurance.com",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      tiktok: "#",
    },
  },
];

function SocialIcon({ href, children }) {
  if (!href || href === "#") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-300 hover:scale-110 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900"
    >
      {children}
    </a>
  );
}

function Contact() {
  const { t } = useLanguage();
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            {t.contact.tag}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {t.contact.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t.contact.text}
          </p>
        </div>
        <div className="mx-auto mb-14 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-lg">
          <img
            src={ftRosarioyArmida}
            alt="Rosario Marquez and Armida Gonzalez helping clients with their insurance needs."
            className="h-[350px] w-full object-cover md:h-[650px] transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                {advisor.role}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                {advisor.name}
              </h2>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${advisor.phone}`}
                  className="flex items-center gap-3 text-slate-600 transition hover:text-[var(--color-primary)]"
                >
                  <Phone size={18} />
                  {advisor.phoneLabel}
                </a>

                <a
                  href={`mailto:${advisor.email}?subject=Insurance Consultation`}
                  className="flex items-center gap-3 text-slate-600 transition hover:text-[var(--color-primary)]"
                >
                  <Mail size={18} />
                  {advisor.email}
                </a>
              </div>

              <div className="mt-7 flex gap-3">
                <SocialIcon href={advisor.socials.facebook}>
                  <FaFacebookF size={18} />
                </SocialIcon>

                <SocialIcon href={advisor.socials.linkedin}>
                  <FaLinkedinIn size={18} />
                </SocialIcon>

                <SocialIcon href={advisor.socials.instagram}>
                  <FaInstagram size={18} />
                </SocialIcon>

                <SocialIcon href={advisor.socials.tiktok}>
                  <FaTiktok size={18} />
                </SocialIcon>
              </div>

              <Link
                to="/schedule"
                className="mt-8 inline-block rounded-xl bg-[var(--color-primary)] px-6 py-4 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                {t.contact.schedule}
              </Link>
            </article>
          ))}
        </div>
        <ContactBenefits />

        <div className="mt-10 grid gap-6 rounded-[2rem] bg-slate-900 p-8 text-white md:grid-cols-3">
          <div className="flex gap-4">
            <MapPin className="shrink-0 text-[#58C7E6]" />
            <div>
              <h3 className="font-bold">{t.contact.info.location}</h3>
              <p className="mt-2 text-slate-300">Des Moines, Iowa</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="shrink-0 text-[#58C7E6]" />
            <div>
            <h3 className="font-bold">
                  {t.contact.info.hours.title}
                </h3>

                <div className="mt-2 space-y-1 text-slate-300">
                  <p>
                    {t.contact.info.hours.mondayThursday}:{" "}
                    {t.contact.info.hours.mondayThursdayTime}
                  </p>

                  <p>
                    {t.contact.info.hours.friday}:{" "}
                    {t.contact.info.hours.fridayTime}
                  </p>
                </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold">{t.contact.info.online}</h3>
            <p className="mt-2 text-slate-300">
              {t.contact.info.onlineText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;