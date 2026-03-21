import AnimateOnScroll from "./components/ScrollAnimation";
import Tag from "./components/Tag";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  title: string;
  description: string;
  year?: string;
}

const timelineData: TimelineItem[] = [
  { title: "HTML", description: "Der Grundstein meiner Reise. Hier lernte ich die Struktur des Webs kennen und erstellte meine ersten statischen Seiten.", year: "2019" },
  { title: "CSS", description: "Styling und Layouts. Ich vertiefte mich in Flexbox, Grid und Animationen, um Webseiten zum Leben zu erwecken." },
  { title: "JavaScript", description: "Der Einstieg in die Logik. Von einfachen DOM-Manipulationen bis hin zu komplexen asynchronen Anwendungen.", year: "2020" },
  { title: "JQuery", description: "Ein nützliches Werkzeug meiner Anfangszeit, um Interaktionen schneller und browserübergreifend umzusetzen." },
  { title: "Node.js", description: "Der Sprung ins Backend. JavaScript auf dem Server eröffnete mir völlig neue Möglichkeiten für Fullstack-Apps.", year: "2021" },
  { title: "Express", description: "Effizientes Routing und Middleware-Management für meine Node.js Anwendungen und REST-APIs." },
  { title: "React", description: "Komponentenbasierte Entwicklung. Mein Fokus liegt heute auf der Erstellung moderner, reaktiver User Interfaces.", year: "2023" },
  { title: "C#", description: "Genutzt für die Spieleentwicklung in Unity. Heute verwende ich es nur noch sehr selten für spezifische Projekte." },
  { title: "C++", description: "Ein Ausflug in die systemnahe Programmierung. Ich habe gemerkt, dass diese Sprache aktuell nicht das Richtige für mich ist.", year: "2024" },
  { title: "Java", description: "Diese Sprache begleitet mich hauptsächlich im schulischen Kontext und vertiefte mein Verständnis für OOP.", year: "2025" },
  { title: "Angular", description: "Ein weiteres mächtiges Framework, das ich für strukturierte Enterprise-Anwendungen kennenlernen durfte.", year: "2026" },
  { title: "Tailwind", description: "Mein Favorit für modernes Styling. Utility-First ermöglicht mir extrem schnelles und konsistentes Design." },
  { title: "Bootstrap", description: "Ein Klassiker, den ich für schnelles Prototyping und responsive Layouts in früheren Projekten intensiv genutzt habe." },
  { title: "C", description: "Aktuell beschäftige ich mich mit C, um ein tieferes Verständnis für Speicherverwaltung und systemnahe Programmierung zu entwickeln." },
];

export default function Lebenslauf() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020617] text-white tracking-wide py-20 border-y border-white/5" id="resume">
      {/* Koch-Modus: Dynamischer Hintergrund */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mesh Gradient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] animate-pulse delay-700" />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

        {/* Animated Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
      </div>

      <div className="w-4/5 flex flex-col items-center gap-10 relative z-10">
        <AnimateOnScroll type="fade">
          <Tag text="Mein Werdegang" className="bg-white border text-blue-400 border-blue-500/30 backdrop-blur-md" />
        </AnimateOnScroll>

        <AnimateOnScroll type="fade">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-bold leading-snug">
            Meine <span className="text-blue-500">Lernreise</span> & Erfahrungen
          </h1>
        </AnimateOnScroll>

        <div ref={containerRef} className="relative w-full max-w-5xl mt-12">
          {/* Main Vertical Trunk */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-900/30 z-10 pointer-events-none rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-blue-500 origin-top"
              style={{ height: "100%", scaleY: scrollYProgress }}
            />
          </div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-6 flex flex-col md:flex-row items-center w-full">
              {item.year && (
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-6 z-30">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">{item.year}</span>
                </div>
              )}

              {/* Node Point */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="z-20 flex items-center justify-center w-5 h-5 bg-slate-950 border-2 border-blue-500 rounded-full absolute left-4 md:left-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />

              {/* Curved Branch Line */}
              <svg
                className={`hidden md:block absolute top-1/2 left-1/2 w-[100px] h-[60px] pointer-events-none z-10
                  ${index % 2 === 0 ? "-translate-y-0" : "-translate-x-full scale-x-[-1]"}`}
                viewBox="0 0 100 60"
              >
                <path
                  d="M 0 0 Q 50 0, 50 30 T 100 60"
                  fill="transparent"
                  stroke="#1e3a8a"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                />
                <motion.path
                  d="M 0 0 Q 50 0, 50 30 T 100 60"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  viewport={{
                    once: false,
                    margin: "20% 0px -45% 0px",
                    amount: 0.5
                  }}
                />
              </svg>

              <AnimateOnScroll
                type="fade"
                delay={index * 50}
                className={`w-full md:w-[45%] pl-12 md:pl-0 text-left ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl relative"
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
        <AnimateOnScroll type="fade" className="mt-12">
          <div className="p-6 bg-blue-500/10 rounded-2xl text-center max-w-2xl border border-blue-500/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Was kommt als Nächstes?</h3>
            <p className="text-gray-300">
              Ich lerne ständig dazu. Aktuell vertiefe ich mein Wissen in Next.js 15,
              Cloud-Infrastrukturen und der Optimierung von Web-Vitals für maximale Performance.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
