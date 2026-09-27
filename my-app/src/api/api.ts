export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const searchProducts = async (
  searchTerm: string,
): Promise<ProductResponse> => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`,
  );

  if (!response.ok) {
    throw new Error("failed to fetch products");
  }

  return response.json();
};
