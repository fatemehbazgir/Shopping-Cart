import empty from "../images/empty-cart.svg";

import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <img src={empty} alt="" />
        <p>!سبد خرید شما خالی است</p>
      </div>
    );
  }
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
