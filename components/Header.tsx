const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="w-6 h-6 flex justify-center items-center rounded-full bg-secondary">
        <div className="w-2 h-2 rounded-full bg-primary opacity-40" />
      </div>
      <h2 className="w-2/3 text-5xl font-bold text-primary opacity-40">
        {children}
      </h2>
    </div>
  );
};

export default Header;
