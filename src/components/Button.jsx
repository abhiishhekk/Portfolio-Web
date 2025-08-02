const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md dark:bg-[#393838] transition-all active:scale-95 dark:text-white mx-auto ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="btn-ping_dot relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;