import ProjectCard from "./components/ProjectCard";
import AnimateOnScroll from "./components/ScrollAnimation";
import Tag from "./components/Tag";

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 text-slate-900 tracking-wide pb-10" id="about">
      <div className="w-4/5 min-h-screen flex flex-col justify-center items-center gap-10">
        <AnimateOnScroll type="fade" className="mt-10">
          <Tag text="Meine Projekte" />
        </AnimateOnScroll>

        { /* Title */}
        <AnimateOnScroll type="fade">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-bold leading-snug">
            Ausgewählte{' '}
            <span className="text-blue-600">
              Projekte
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll type="fade">
          <p className="text-center w-auto md:w-2xl self-center">
            Eine Auswahl meiner bisherigen Arbeiten und Projekte, die meine Fähigkeiten und meinen Stil widerspiegeln.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-0 sm:px-4 scale-90">
          <AnimateOnScroll type="fade" className="w-full flex justify-center" delay={0}>
            <ProjectCard
              tags={["React", "Node.js", "TypeScript", "Tailwind CSS"]}
              title="FluxCMS"
              description="Ein modulares Content-Management-System mit Fokus auf Performance, Entwicklerfreundlichkeit und flexibler API-Struktur"
            />
          </AnimateOnScroll>
          <AnimateOnScroll type="fade" className="w-full flex justify-center" delay={100}>
            <ProjectCard
              tags={["React", "Node.js", "TypeScript", "Tailwind CSS"]}
              title="FluxCMS"
              description="Ein modulares Content-Management-System mit Fokus auf Performance, Entwicklerfreundlichkeit und flexibler API-Struktur"
            />
          </AnimateOnScroll>
          <AnimateOnScroll type="fade" className="w-full flex justify-center" delay={200}>
            <ProjectCard
              tags={["React", "Node.js", "TypeScript", "Tailwind CSS"]}
              title="FluxCMS"
              description="Ein modulares Content-Management-System mit Fokus auf Performance, Entwicklerfreundlichkeit und flexibler API-Struktur"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}