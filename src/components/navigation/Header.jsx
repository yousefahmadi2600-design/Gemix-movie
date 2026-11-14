import { Search, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";
import ModalSearch from "../ModalSearch";
import ModalUser from "../ModalUser";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };
  const handleUserClick = () => {
    setIsUserOpen(true);
  };
  return (
    <>
      <header className="text-whit fixed right-0 left-0 z-30 flex items-center border-b border-b-gray-400 bg-white/20 px-14 py-4 backdrop-blur-md">
        <div className="text-primary pr-10 text-lg font-semibold">GEMIX</div>
        <div className="flex-1">
          <ul className="space-x-5">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Movies</NavLink>
            <NavLink to={"/login"}>Series</NavLink>
            <NavLink to={"/login"}>Explore</NavLink>
            <NavLink to={"/login"}>My space</NavLink>
          </ul>
        </div>
        <div className="flex gap-2">
          <Button handleClick={handleSearchClick}>
            <Search className="stroke-gray-800" />
          </Button>
          <Button handleClick={handleUserClick}>
            <User2 className="stroke-gray-800" />
          </Button>
        </div>
      </header>
      {isSearchOpen && <ModalSearch setIsSearchOpen={setIsSearchOpen} />}
      {isUserOpen && <ModalUser setIsUserOpen={setIsUserOpen} />}
    </>
  );
};

export default Header;
