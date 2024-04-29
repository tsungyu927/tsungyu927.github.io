const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-fit flex">
      <div className="relative flex grow border-r" />
      <div className="relative min-w-[768px] w-2/3">{children}</div>
      <div className="flex grow border-l" />
    </main>
  );
};

export default Wrapper;
