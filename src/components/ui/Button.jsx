const Button = ({ children }) => {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-200 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-300">
      {children}
    </button>
  );
};

export default Button;
