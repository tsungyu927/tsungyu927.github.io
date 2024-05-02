import { Button } from "@/components/ui/button";

type ContactButtonProps = {
  children: React.ReactNode;
  href: string;
};

const ContactButton = ({ href, children }: ContactButtonProps) => {
  return (
    <Button variant="outline" asChild>
      <a href={href} target="_blank" className="flex items-center gap-2">
        {children}
      </a>
    </Button>
  );
};

export default ContactButton;
