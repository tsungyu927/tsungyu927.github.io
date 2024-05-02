import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type ContactCard = {
  title: string;
  link: string;
  btnText: string;
};

const ContactCard = ({ title, link, btnText }: ContactCard) => {
  return (
    <section className="w-full flex text-sm text-muted-foreground border-b">
      <div className="p-3 w-1/3 flex items-center">
        <h3>{title}</h3>
      </div>
      <div className="p-3 w-2/3 bg-background">
        <Button variant="link" asChild>
          <a
            href={link}
            target="_blank"
            className="flex gap-2 font-light text-sm"
          >
            <ExternalLinkIcon />
            {btnText}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactCard;
