import { setSearchTerm } from "@/store/searchSlice";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  return (
    <div className="relative w-full ">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
        }}
        placeholder="search Products..."
        className="border px-2 py-1 rounded-full w-full min-w-xs placeholder:text-center relative "
      />
    
    </div>
  );
};

export default SearchBar;
