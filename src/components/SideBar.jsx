import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";
import categories from "../constants/list";

import styles from "./SideBar.module.css";

function SideBar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>categoties</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              category.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >{category.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
