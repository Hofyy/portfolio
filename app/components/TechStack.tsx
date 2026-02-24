import AnimateOnScroll from "./ScrollAnimation";
import { SkillBar } from "./SkillBar";

export default function TechStack() {
  const skillsLeft = [
    { name: "JavaScript", percentage: 95 },
    { name: "Typescript", percentage: 90 },
    { name: "Express.js", percentage: 90 },
    { name: "React / Next.js", percentage: 85 },
    { name: "Git / GitHub", percentage: 75 },
  ];

  const skillsRight = [
    { name: "CSS", percentage: 90 },
    { name: "Tailwind CSS / Material-UI", percentage: 70 },
    { name: "MongoDB", percentage: 90 },
    { name: "MySQL", percentage: 60 },
    { name: "JWT / OAuth Authentifizierung", percentage: 85 },
  ];

  return (
    <section className="bg-slate-900 p-12 text-white rounded-2xl mb-10 w-full">
      <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          {skillsLeft.map((skill) => (
            <AnimateOnScroll key={skill.name} type="fade">
              <SkillBar key={skill.name} {...skill} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="space-y-6">
          {skillsRight.map((skill) => (
            <AnimateOnScroll delay={100} key={skill.name} type="fade">
              <SkillBar key={skill.name} {...skill} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}