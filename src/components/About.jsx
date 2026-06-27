import { Mail, Phone } from "lucide-react";
import {FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok,} from "react-icons/fa";
import ftRosario from "../assets/ftRosario.webp"
import ftArmida from "../assets/ftArmida.webp"
import { useLanguage } from "../context/LanguageContext";

const advisors = [
  {
    name: "Rosario Márquez",
    translationKey: "rosario",
    role: "Licensed Insurance Advisor",
    image: ftRosario,
    description:
      "Rosario helps clients understand their options with patience, clarity and personalized guidance.",
    phone: "tel:5153052213",
    email: "mailto:rosario@truecare-insurance.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://facebook.com",
      tiktok: "https://facebook.com",
      linkedin: "https://facebook.com",
    },
  },
  {
    name: "Armida Gonzalez",
    translationKey: "armida",
    role: "Insurance Advisor",
    image: ftArmida,
    description:
      "Focused on helping families and individuals find reliable support for health insurance and protection needs.",
    phone: "tel:5153053545",
    email: "mailto:armidagonzalez101@gmail.com",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://facebook.com",
      tiktok: "https://facebook.com",
      linkedin: "https://facebook.com",
    },
  },
];
function SocialLink({ href, children }) {
  if (!href || href === "#") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition-all duration-300 hover:scale-110 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900"
    >
      {children}
    </a>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-white px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            {t.about.tag}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {t.about.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t.about.text}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-[450] bg-slate-200">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  {t.about.advisors[advisor.translationKey].role}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {advisor.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {t.about.advisors[advisor.translationKey].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={advisor.phone}
                    className="rounded-xl bg-[var(--color-primary)] px-4 py-3 font-semibold text-white"
                  ><Phone size={18} className="inline" /> {t.about.advisors[advisor.translationKey].call}</a>

                  <a
                    href={advisor.email}
                    className="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700"
                  ><Mail size={18} className="inline" /> {t.about.advisors[advisor.translationKey].email} </a>
                </div>
          <div className="mt-3 flex flex-wrap gap-3">
              <SocialLink href={advisor.socials.facebook}>
                <FaFacebookF size={18} />
              </SocialLink>

              <SocialLink href={advisor.socials.instagram}>
                <FaInstagram size={18} />
              </SocialLink>

              <SocialLink href={advisor.socials.tiktok}>
                <FaTiktok size={18} />
              </SocialLink>

              <SocialLink href={advisor.socials.linkedin}>
                <FaLinkedinIn size={18} />
              </SocialLink>
            </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-center text-white">
  <p className="text-lg font-semibold">{t.about.reviews.title}</p>
  <p className="mt-2 text-3xl font-bold">5.00 ★★★★★</p>
  <p className="mt-1 text-slate-300">{t.about.reviews.rating}</p>
  
  <a
  href="https://www.google.com/search?hl=en-US&gl=us&q=True+Care+Insurance
  ,+113+Army+Post+Rd,+Des+Moines,+IA+50315&ludocid=5905186595082451859&lsig
  =AB86z5UrwlDFnC9fsRWUN37fpEtZ#lrd=0x87eea3692eba5dfd:0x51f36febd449bb93,3"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
>
  {t.about.reviews.button}
</a>
</div>
      </div>
    </section>
  );
}

export default About;