import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ExperienceCardProps = {
  // Is last experience card?
  isLast: boolean;
  // Card information
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: string[];
};

const ExperienceCard = ({
  isLast,
  company,
  position,
  location,
  startDate,
  endDate,
  description,
  tags,
}: ExperienceCardProps) => {
  return (
    <div className="p-3 sm:p-0 w-full flex flex-col sm:flex-row text-sm border-t sm:border-none">
      <section className="sm:p-3 w-full sm:w-1/3 flex text-muted-foreground bg-background sm:bg-transparent">
        {startDate} - {endDate}
      </section>
      <section
        className={cn(
          "sm:p-3 w-full sm:w-2/3 bg-background",
          !isLast && "sm:border-b"
        )}
      >
        <h3 className="text-lg font-bold">{company}</h3>
        <h3 className="text-base">{position}</h3>
        <ul className="p-3 text-muted-foreground">
          {description.map((text) => (
            <li key={text} className="list-disc mt-1">
              {text}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-background-behind text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperienceCard;
