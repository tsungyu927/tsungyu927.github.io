import NextImage from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  return (
    <AspectRatio ratio={16 / 9} className="bg-transparent hover:scale-101">
      <NextImage src={src} alt={alt} fill className="rounded-md object-cover" />
    </AspectRatio>
  );
};

export default Image;
