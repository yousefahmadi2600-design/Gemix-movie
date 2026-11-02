const Button = ({ children }) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white/10 transition-colors duration-100 hover:cursor-pointer hover:bg-white/20"
      
    >
      {children}
    </button>
  );
};

export default Button;
