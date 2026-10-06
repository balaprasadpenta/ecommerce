import useProducts from "@/hooks/useProducts";
import { Button } from "../../../@/components/ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const SearchResults = () => {
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const { data, isFetching } = useProducts(searchTerm);

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filteredProducts.length === 0) {
    return <p>No products found</p>;
  }
  return (
    <div>
      {isFetching && <p>Updating...</p>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white transition:duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-square overflow-hidden bg-[#F7F7F5]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain p-6 transition:duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="line-clamp-3 text-base font-semibild text-[#111111]">
                {product.title}
              </h3>
              <div className="flex justify-between">
                <span className="text-lg font-bold text-[#111111]">
                  {product.price}
                </span>
                <Button className="rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#333333]">
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
