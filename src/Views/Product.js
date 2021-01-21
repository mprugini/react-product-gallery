import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Product() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    content = (
      <div className="text-center">
        <h1 className="font-bold text-2xl">{product.data.title}</h1>
        <div>
          <img
            className="inline"
            src={product.data.image}
            alt={product.data.category}
            width="150"
            height="100"
          />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
