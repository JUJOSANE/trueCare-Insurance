import logo from "../assets/logo.webp";
import {FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok,} from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 px-6 py-14 text-white md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-10 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center sm:items-start">
          <a href="/" className="flex items-center">
          <img src={logo} alt="True Care Insurance" className="h-16 w-auto" />
          </a>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Helping individuals and families make informed insurance decisions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Rosario Marquez</h3>

          <a
            className="flex items-center justify-center gap-2 text-slate-300 transition hover:text-[#58C7E6] sm:justify-start"
            href="tel:5153611764"
          >
            <Phone size={16} />
            515-361-1764</a>
          <a
            className="flex items-center justify-center gap-2 break-all text-slate-300 transition hover:text-[#58C7E6] sm:justify-start"
            href="mailto:rosario@truecare-insurance.com?subject=Insurance Consultation&body=Hello Rosario,%0A%0AI would like more information about your services."
          >
            <Mail size={16} />
            rosario@truecare-insurance.com</a>

          <div className="mt-5 flex justify-center gap-3 sm:justify-start">

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaFacebookF size={18} />
            </a>

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaInstagram size={18} />
            </a>

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaTiktok size={18} />
            </a>

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      
        <div>
          <h3 className="mb-4 font-bold">Armida Gonzalez</h3>

          <a
            className="flex items-center justify-center gap-2 text-slate-300 transition hover:text-[#58C7E6] sm:justify-start"
            href="tel:5153806904"
          >
            <Phone size={16} />
            515-380-6904</a>
          <a 
          className="flex items-center justify-center gap-2 break-all text-slate-300 transition hover:text-[#58C7E6] sm:justify-start"
          href="mailto:armidagonzalez101@gmail.com?subject=Insurance Consultation&body=Hello Armida,%0A%0AI would like more information about your services."
          >
            <Mail size={16} />
            armida@truecare-insurance.com</a>

          
          <div className="mt-5 flex justify-center gap-3 sm:justify-start">

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaFacebookF size={18} />
            </a>

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaInstagram size={18} />
            </a>

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaTiktok size={18} />
            </a>

            <a href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-white transition-all duration-300 hover:border-[#58C7E6] hover:bg-[#58C7E6] hover:text-slate-900 hover:scale-110"
              >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div>
            <h3 className="mb-4 font-bold">{t.footer.tag}</h3>

            <p className="text-slate-300">Des Moines, Iowa</p>

            <div className="mt-3 space-y-1 text-slate-300">
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

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-8">
        <p className="text-center text-xs leading-5 text-slate-400">
          We do not offer every plan available in your area. Currently, we
          represent 3 organizations offering 27 products in your area. Please
          contact Medicare.gov, 1-800-MEDICARE, or your local State Health
          Insurance Program to get information on all available options.
        </p>

        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
          The purpose of this communication is the solicitation of insurance.
          Contact will be made by a licensed insurance agent or insurance
          company.
        </p>

        <p className="mt-6 text-center text-xs text-slate-500">
          © 2026 True Care Insurance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;