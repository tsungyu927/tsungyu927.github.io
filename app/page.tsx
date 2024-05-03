import Wrapper from "@/components/Wrapper";
import data from "@/constants/profile.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { profile } = data;

  return (
    <Wrapper>
      <div className="relative w-full min-h sm:min-h-sm flex justify-center items-center">
        <div className="absolute left-0 mt-14 w-1/3 h-[calc(100%-56px)] border-r border-dashed hidden sm:block" />
        <div className="absolute right-0 mt-14 w-1/2 sm:w-1/3 h-[calc(100%-56px)] border-l border-dashed" />
        <div className="relative z-10 w-4/5 sm:w-2/3 flex flex-col justify-center items-center bg-background">
          <h1 className="mb-4 text-5xl sm:text-6xl font-bold">
            {profile.name}
          </h1>
          <p className="text-center text-muted-foreground">{profile.brief}</p>
        </div>
        <Button asChild>
          <Link
            href="/experience"
            className="absolute z-10 bottom-20 hover:scale-101"
          >
            More about me
          </Link>
        </Button>
      </div>
    </Wrapper>
  );
}
