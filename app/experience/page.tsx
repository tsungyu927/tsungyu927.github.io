import ExperienceCard from "@/components/cards/ExperienceCard";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import data from "@/constants/profile.json";

export default function Experience() {
  const { experience } = data;
  return (
    <Wrapper>
      <div className="absolute left-0 mt-14 w-1/3 h-[calc(100%-56px)] border-r border-dashed" />
      <div className="absolute right-0 mt-14 w-1/3 h-[calc(100%-56px)] border-l border-dashed" />
      <div className="relative z-10 w-full min-h-[calc(100dvh-48px)] pt-48">
        <div className="px-4 mb-12">
          <Header>Experience</Header>
          <h2 className="w-4/5 mb-6 text-4xl font-bold">{experience.title}</h2>
          <h3 className="w-4/5 text-muted-foreground">
            {experience.description}
          </h3>
        </div>
        <div className="mb-4 flex flex-col border-y">
          {experience.work.map((item, index, arr) => (
            <ExperienceCard
              key={item.startDate}
              isLast={index === arr.length - 1}
              {...item}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
