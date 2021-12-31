import { useState } from "react";
import styling from "./ProductCard.module.css";

function ProductCard({ product_name, description, image_url, price }) {
  const [count, setCount] = useState(0);

  const handleAdd = (val) => {
    if (count + val < 0) {
      setCount(0);
    } else {
      setCount(count + val);
    }
  };

  return (
    <div className={styling.card}>
      <h3>{product_name}</h3>
      <img src={image_url} alt={product_name} />
      <p>{description}</p>
      <h4>₹{price}</h4>
      <div>
        <button
          onClick={() => {
            handleAdd(1);
          }}
        >
          +
        </button>
        {count}
        <button
          onClick={() => {
            handleAdd(-1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
