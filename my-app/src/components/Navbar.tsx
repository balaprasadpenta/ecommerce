import logo from "../assets/websitelogo.avif";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2 ">
      <img src={logo} alt="website logo" className="size-12" />
      <input type="text" placeholder="search products" className="bg-red-100" />
      <div className="flex gap-x-2">
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
