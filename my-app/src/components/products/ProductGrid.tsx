import useProducts from "@/hooks/useProducts";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const { data, isPending, isError, error, isFetching } =
    useProducts(searchTerm);

  if (!searchTerm) {
    return null;
  }

  if (isPending) {
    return <p>is Loading ...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filteredProducts.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div>
      {isFetching && <p>Updating...</p>}

      <div>
        {filteredProducts.map((product) => (
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
