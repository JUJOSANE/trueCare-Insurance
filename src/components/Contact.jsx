import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactBenefits from "./ContactBenefits";

const advisors = [
  {
    name: "Armida Gonzalez",
    role: "Licensed Insurance Advisor",
    phone: "5153053545",
    phoneLabel: "515-305-3545",
    email: "armida@truecare-insurance.com",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      tiktok: "#",
    },
  },
  {
    name: "Rosario Marquez",
    role: "Licensed Insurance Advisor",
    phone: "5153052213",
    phoneLabel: "515-305-2213",
    email: "rosario@truecare-insurance.com",
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
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Speak with a True Care advisor
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have questions about Medicare, life insurance, retirement planning,
            or coverage options? Our team is ready to help.
          </p>
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
                Schedule Appointment
              </Link>
            </article>
          ))}
        </div>
        <ContactBenefits />

        <div className="mt-10 grid gap-6 rounded-[2rem] bg-slate-900 p-8 text-white md:grid-cols-3">
          <div className="flex gap-4">
            <MapPin className="shrink-0 text-[#58C7E6]" />
            <div>
              <h3 className="font-bold">Location</h3>
              <p className="mt-2 text-slate-300">Des Moines, Iowa</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="shrink-0 text-[#58C7E6]" />
            <div>
              <h3 className="font-bold">Business Hours</h3>
              <p className="mt-2 text-slate-300">Monday - Friday</p>
              <p className="text-slate-300">9:00 AM to 5:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Prefer online booking?</h3>
            <p className="mt-2 text-slate-300">
              Choose an available time and our team will follow up with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;