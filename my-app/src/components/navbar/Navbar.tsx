import logo from "../../assets/websitelogo.avif";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "../../../@/components/ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import SearchBar from "./SearchBar";
import ProductGrid from "../products/ProductGrid";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-6 gap-x-6 bg-gray-50 w-full">
      <div>
        <img src={logo} alt="website logo" className="size-12 shrink-0" />
      </div>

      <div className="hidden sm:block max-w-full mx-auto ">
        <SearchBar />
        <ProductGrid />
      </div>

      <div className="sm:hidden flex flex-row justify-between items-center">
        <Button variant="ghost" className={`active(true): `}>
          <IconSearch stroke={2} className="size-5" />
        </Button>
        <Button>
          <IconMenu2 stroke={2} />
        </Button>
      </div>

      <div className="gap-x-6 max-w-xl hidden sm:flex">
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
