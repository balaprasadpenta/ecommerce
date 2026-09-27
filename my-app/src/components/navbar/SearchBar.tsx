import { setSearchTerm } from "@/store/searchSlice";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => {
        dispatch(setSearchTerm(e.target.value));
      }}
      placeholder="search Products..."
      className="border px-2 py-2 rounded-lg"
    />
  );
};

export default SearchBar;
