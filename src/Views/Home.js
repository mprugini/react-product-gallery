import React from "react";
import Loader from "../components/Loader";
import ProductCard from '../components/ProductCard';
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
  const url = "https://fakestoreapi.com/products";

  let products = useAxiosGet(url);

  let content = null;

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
        <div key={product.id}>
            <ProductCard product={product} />
        </div>
    ));
  }
  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
