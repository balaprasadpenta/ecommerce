import useProducts from "@/hooks/useProducts";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const { data, isPending, isError, error, isFetching } =
    useProducts(searchTerm);

  if (!searchTerm) {
    return <p>Search products</p>;
  }

  if (isPending) {
    return <p>is Loading ...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {isFetching && <p>Updating...</p>}

      <div>
        {data.products.map((product) => (
          <div key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full"
            />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
