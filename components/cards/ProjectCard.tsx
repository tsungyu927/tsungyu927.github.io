import { Badge } from "@/components/ui/badge";
import CustomImage from "@/components/modules/Image";

type ProjectCardProps = {
  name: string;
  link: string;
  image: string;
  startDate: string;
  endDate: string;
  tech: string[];
  description: string[];
};

const ProjectCard = ({
  name,
  link,
  image,
  startDate,
  endDate,
  tech,
  description,
}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row text-sm border-t">
      <section className="p-3 w-full sm:w-1/3 flex flex-col">
        <h3 className="text-xl text-primary font-bold">{name}</h3>
        <p className="text-tertiary">
          {startDate} - {endDate}
        </p>
        <ul className="p-3 text-muted-foreground">
          {description.map((text) => (
            <li key={text} className="list-disc mt-1">
              {text}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <Badge key={tag} className="bg-background-behind text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </section>
      <section className="p-3 w-full sm:w-2/3 bg-background">
        <a href={link} target="_blank" className="cursor-pointer">
          <CustomImage src={image} alt={name} />
        </a>
      </section>
    </div>
  );
};

export default ProjectCard;
