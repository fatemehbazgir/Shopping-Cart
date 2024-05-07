import { createContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ Children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {Children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
