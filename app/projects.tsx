import AnimateOnScroll from "./components/ScrollAnimation";
import Tag from "./components/Tag";

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-slate-900 tracking-wide" id="about">
      <div className="w-4/5 min-h-screen flex flex-col justify-center items-center gap-10">
        <AnimateOnScroll type="fade">
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
      </div>
    </section>
  );
}