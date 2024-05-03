import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import ProjectCard from "@/components/cards/ProjectCard";
import data from "@/constants/profile.json";

export default function Projects() {
  const { projects } = data;
  return (
    <Wrapper>
      <div className="absolute left-0 mt-14 w-1/3 h-[calc(100%-56px)] border-r border-dashed" />
      <div className="absolute right-0 mt-14 w-1/3 h-[calc(100%-56px)] border-l border-dashed" />
      <div className="relative z-10 w-full min-h-[calc(100dvh-48px)] pt-48 pb-10">
        <div className="px-4 mb-12">
          <Header>Projects</Header>
        </div>
        <div className="mb-4 flex flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
