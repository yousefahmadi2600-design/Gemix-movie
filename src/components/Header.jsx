import { Search, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed right-0 left-0 z-50 flex items-center border-b border-b-gray-400 px-14 py-4 backdrop-blur-md">
      <div className="text-primary pr-10 text-lg font-semibold">GEMIX</div>
      <div className="flex-1">
        <ul className="space-x-5">
          <NavLink to={"/login"}>Home</NavLink>
          <NavLink to={"/login"}>Movies</NavLink>
          <NavLink to={"/login"}>Series</NavLink>
          <NavLink to={"/login"}>Explore</NavLink>
          <NavLink to={"/login"}>My space</NavLink>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-200 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-300">
          <Search className="" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-200 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-300">
          <User2 className="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
