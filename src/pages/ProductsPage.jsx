import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>loading...</p>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
