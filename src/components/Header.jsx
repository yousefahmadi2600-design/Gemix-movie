import { Search, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "./ui/button";

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
        <Button children={<Search className="" />} />
        <Button children={<User2 className="" />} />
      </div>
    </header>
  );
};

export default Header;
