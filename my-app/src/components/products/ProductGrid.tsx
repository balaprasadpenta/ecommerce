import useProducts from "@/hooks/useProducts";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SearchResults from "../navbar/SearchResults";

const ProductGrid = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const { isPending, isError, error } = useProducts(searchTerm);

  if (!searchTerm) {
    return null;
  }

  if (isPending) {
    return <p>is Loading ...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <SearchResults />
    </div>
  );
};

export default ProductGrid;
