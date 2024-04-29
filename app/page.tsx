import Wrapper from "@/components/Wrapper";
import data from "@/constants/profile.json";

export default function Home() {
  const { profile } = data;

  return (
    <Wrapper>
      <div className="w-full min-h-[calc(100dvh-48px)] flex justify-center items-center">
        <div className="w-2/3 flex flex-col justify-center items-center">
          <h1 className="mb-4 text-6xl font-bold">{profile.name}</h1>
          <p className="text-center text-muted-foreground">{profile.brief}</p>
        </div>
      </div>
    </Wrapper>
  );
}
