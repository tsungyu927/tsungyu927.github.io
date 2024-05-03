const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full h-fit flex">
      <div className="relative hidden grow border-r sm:flex " />
      <div className="relative min-w-full sm:min-w-[768px] w-2/3">
        {children}
      </div>
      <div className="hidden sm:flex grow border-l" />
      <div className="absolute bottom-0 w-full h-14 border-t" />
    </main>
  );
};

export default Wrapper;
