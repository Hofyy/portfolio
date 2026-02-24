import AnimateOnScroll from "./ScrollAnimation";

type SkillBarProps = {
  name: string;
  percentage: number;
};

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="w-full">
      {/* Titel + Prozent */}
      <div className="flex justify-between mb-2">
        <span className="text-gray-200 font-medium">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>

      {/* Background Bar */}
      <AnimateOnScroll type="bar" delay={600} percentage={percentage} >
      </AnimateOnScroll>
    </div>
  );
}
