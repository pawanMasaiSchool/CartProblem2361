import { products } from "../db.json";
import ProductCard from "./ProductCard";
import styling from "./Home.module.css";

function Home() {
  // return <div>Home</div>;
  return (
    <div className={styling.home}>
      {products.map((item) => (
        <ProductCard
          product_name={item.product_name}
          description={item.description}
          image_url={item.image_url}
          price={item.price}
        />
      ))}
    </div>
  );
}

export { Home };
