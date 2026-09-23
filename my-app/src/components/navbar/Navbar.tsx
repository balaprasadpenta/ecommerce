import logo from "../../assets/websitelogo.avif";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-2 bg-gray-50">
      <div className="flex items-center justify-center max-w-2/3 ">
        <img src={logo} alt="website logo" className="size-12" />
        <input
          type="text"
          placeholder="search products..."
          className="md:block hidden bg-gray-100 max-w-xl min-w-xs h-8 rounded-full border-2 px-4 py-1  "
        />
      </div>
      <div className="flex gap-x-6 max-w-1/3">
        <span className="md:hidden sm:block">
          <IconSearch stroke={2} />
        </span>
        <span>
          <IconHeart stroke={2} />
        </span>
        <span>
          <IconShoppingCart stroke={2} />
        </span>
        <span>
          <IconUser stroke={2} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
