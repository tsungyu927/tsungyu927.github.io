const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-2 sm:mb-4 flex items-center gap-3">
      <div className="w-4 h-4 sm:w-6 sm:h-6 flex justify-center items-center rounded-full bg-secondary">
        <div className="w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-primary opacity-40" />
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold text-primary opacity-40">
        {children}
      </h2>
    </div>
  );
};

export default Header;
