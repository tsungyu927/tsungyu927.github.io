import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";
import ContactCard from "@/components/cards/ContactCard";
import ContactButton from "@/components/modules/ContactButton";
import data from "@/constants/profile.json";
import {
  FileTextIcon,
  MobileIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  const { profile, contact } = data;

  return (
    <Wrapper>
      <div className="absolute left-0 mt-14 w-1/3 h-[calc(100%-56px)] border-r border-dashed" />
      <div className="absolute right-0 mt-14 w-1/3 h-[calc(100%-56px)] border-l border-dashed" />
      <div className="relative z-10 w-full min-h-[calc(100dvh-48px)] pt-48">
        <div className="px-4 mb-12">
          <Header>Contact</Header>
        </div>
        <div className="w-full p-3 flex justify-between bg-background font-bold border-y">
          <h3 className="text-lg">Get in touch</h3>
          <div className="flex gap-2">
            <ContactButton href={profile.resume}>
              <FileTextIcon />
              Download Latest CV
            </ContactButton>
            <ContactButton href={`tel:${profile.phone}`}>
              <MobileIcon />
              Call Me
            </ContactButton>
            <ContactButton href={`mailto:${profile.email}`}>
              <EnvelopeClosedIcon />
              Contact Me
            </ContactButton>
          </div>
        </div>
        <div className="mb-4 flex flex-col">
          {contact.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
