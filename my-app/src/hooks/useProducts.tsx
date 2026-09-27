import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/api/api";

const useProducts = (searchTerm: string) => {
  return useQuery({
    queryKey: ["Products", searchTerm],
    queryFn: () => searchProducts(searchTerm),
    enabled: searchTerm.trim().length > 0,
  });
};

export default useProducts;
