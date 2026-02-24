'use client';

import { FaArrowDown, FaDiscord, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Icon from './components/Icon';

export default function MainPage() {
  return (<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    {/* Animierte Hintergrund-Elemente (Blur-Kreise) */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    {/* Grid-Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex min-h-screen items-center justify-center font-sans flex-col">
        <main className="flex w-auto max-w-3xl flex-col items-center justify-between px-16 sm:items-start mt-auto mb-auto">
          <div className="w-auto rounded-full border border-gray-500/50 p-2 flex self-center hover:cursor-default bg-gray-500/20 fade-up opacity-0">
            <span className="flex w-2 h-2 bg-green-500 rounded-full mt-auto mb-auto ml-2" />
            <span className="ml-2 mr-3 text-white">Verfügbar für neue Projekte</span>
          </div>

          <h1 className="w-full mx-auto p-4 text-center text-7xl font-bold tracking-wide mt-6 fade-up opacity-0 text-white" style={{ animationDelay: "0.2s" }}>
            Web Developer
          </h1>

          <p className="pl-16 pr-16 pt-1.5 text-center tracking-wide fade-up opacity-0 text-white" style={{ animationDelay: "0.4s" }}>
            Ich kreiere moderne, performanter Webanwendungen mit Fokus auf&nbsp;
            <a className="text-purple-500 tracking-wide">
              ausergewöhnliche User Experience&nbsp;
            </a>
            und&nbsp;
            <a className="text-blue-300 tracking-wide">
              sauberen Code
            </a>
            .
          </p>

          <div className="self-center h-16 w-auto flex justify-between mt-14 gap-3 fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <Icon icon={<FaGithub className="text-white text-5xl w-6 h-6" />} href="https://github.com" target="_blank" />
            <Icon icon={<FaDiscord className="text-white text-5xl w-6 h-6" />} href="https://discord.com" target="_blank" />
            <Icon icon={<MdEmail className="text-white text-5xl w-6 h-6" />} href="https://google.com" target="_blank" />
          </div>

          <div className="flex justify-center gap-6 self-center w-full fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
            <button
              className="bg-white w-5/14 pt-3 pb-3 rounded-lg text-black font-bold tracking-wide hover:cursor-pointer hover:scale-105 transition-all duration-300 mt-8"
            >
              Meine Projekte Ansehen
            </button>
            <button
              className="border border-gray-500/50 w-5/14 pt-3 pb-3 rounded-lg text-white font-bold tracking-wide hover:bg-gray-700/20 hover:cursor-pointer transition-all duration-300 mt-8"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </main>
        <div className="flex w-10 h-10 border border-gray-500/50 rounded-full hover:cursor-pointer absolute top-11/12 animate-bounce">
          <FaArrowDown className="text-white text-5xl w-4 h-4 font-extralight m-auto group-hover/card:text-white" />
        </div>
      </div>
    </div>
  </section>
  );
}