import { FaCode, FaPalette, FaRocket, FaStar } from "react-icons/fa"
import Card from "./components/Card"
import TechStack from "./components/TechStack"
import AnimateOnScroll from "./components/ScrollAnimation"

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-black tracking-wide">
      <div className="w-4/5 min-h-screen flex flex-col justify-center items-center]:">

        { /* About Embed */}
        <AnimateOnScroll className="self-center" type="fade">
          <div className="w-26 h-10 rounded-full bg-gray-500/10 text-blue-950 flex self-center mt-10">
            <span className="h-5.5 m-auto font-semibold" id="about">
              Über mich
            </span>
          </div>
        </AnimateOnScroll>

        { /* Title */}
        <AnimateOnScroll type="fade">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-bold mt-8 leading-snug">
            Leidenschaft für{' '}
            <span className="text-blue-400">
              exzellente{' '}
            </span>
            Webentwicklung
          </h1>
        </AnimateOnScroll>

        { /* About Description */}
        <AnimateOnScroll className="text-center w-auto md:w-2xl self-center mt-6 text-gray-700" type="fade">
          <span className="w-auto md:w-2xl text-center self-center text-gray-700">
            Mit mehreren Jahren Erfahrung entwickle ich Webanwendungen, die nicht nur gut aussehen, sondern auch technisch auf höchstem Niveau sind.
          </span>
        </AnimateOnScroll>

        { /* Card Informations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 w-full">

          { /* Code Card */}
          <AnimateOnScroll delay={0} type="fade">
            <Card
              title="Clean Code"
              description="Wartfadeer, gut strukturierter Code nach best Practices."
              icon={<FaCode />}
            />
          </AnimateOnScroll>

          { /* Design Card */}
          <AnimateOnScroll delay={200} type="fade">
            <Card
              title="Modern Design"
              description="Zeitgemäße UI/UX mit Fokus auf Benutzerfreundlichkeit."
              icon={<FaPalette />}
            />
          </AnimateOnScroll>

          { /* Performance Card */}
          <AnimateOnScroll delay={400} type="fade">
            <Card
              title="Performance"
              description="Schnelle Ladezeiten und Optimierte Anwendungen."
              icon={<FaRocket />}
            />
          </AnimateOnScroll>

          { /* Innovation Card */}
          <AnimateOnScroll delay={600} type="fade">
            <Card
              title="Innovation"
              description="Einsatz neuster Technologien und Frameworks."
              icon={<FaStar />}
            />
          </AnimateOnScroll>
        </div>

        { /* Tech Stack */}
        <AnimateOnScroll type="fade">
          <TechStack />
        </AnimateOnScroll>
      </div>
    </section>
  )
}