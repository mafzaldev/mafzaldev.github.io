import Heading from "../Heading";
import TimelineItem from "../TimelineItem";

const Experience = () => {
  return (
    <section className="mt-10 w-full">
      <Heading title="Experience" />
      <ol className="relative border-l-2 border-white pl-2">
        <TimelineItem />
        <TimelineItem />
        <TimelineItem />
      </ol>
    </section>
  );
};

export default Experience;
