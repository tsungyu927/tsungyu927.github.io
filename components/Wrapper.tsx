import Sidebar from "@/components/Menubar";
import ThemeToggle from "@/components/ThemeToggle";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-fit min-h-full rounded-lg bg-background">
      <div className="absolute top-14 w-full h-[1px] bg-muted" />
      <Sidebar />
      <ThemeToggle />
      <div className="w-full h-fit flex">
        <div className="flex grow border-r" />
        <div className="w-2/3">{children}</div>
        <div className="flex grow border-l" />
      </div>
    </div>
  );
};

export default Wrapper;
