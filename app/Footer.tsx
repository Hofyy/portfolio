import { FaGithub, FaDiscord, FaLinkedin, FaHeart } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Icon from './components/Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />

      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-8">

          {/* Brand / Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold tracking-tighter">
              PORT<span className="text-blue-500">FOLIO</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 text-center md:text-left max-w-xs">
              Moderne Webentwicklung mit Leidenschaft für Design und Performance.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Icon icon={<FaGithub className="text-white w-5 h-5" />} href="https://github.com" target="_blank" />
            <Icon icon={<FaDiscord className="text-white w-5 h-5" />} href="https://discord.com" target="_blank" />
            <Icon icon={<FaLinkedin className="text-white w-5 h-5" />} href="https://linkedin.com" target="_blank" />
            <Icon icon={<MdEmail className="text-white w-5 h-5" />} href="mailto:contact@example.com" target="_blank" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-6xl h-px bg-gray-800 my-8" />

        {/* Copyright Section */}
        <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
          <p>© {currentYear} Nils. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1.5">
            Mit <FaHeart className="text-red-500 w-3 h-3" /> entwickelt in Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}