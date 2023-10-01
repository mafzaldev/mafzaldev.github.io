import content from "@/lib/content.json";
import Heading from "../Heading";
import SkillIcon from "../SkillIcon";

const Skills = () => {
  return (
    <section className="mt-10 w-full" id="skills">
      <Heading title="Skills" />
      <div className="flex flex-wrap items-center justify-center gap-3">
        {content.skills.map((technology: any, index: number) => (
          <SkillIcon
            key={index}
            index={index}
            title={technology.title}
            href={technology.href}
            width={technology.width}
            height={technology.height}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
