import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden text-center">
      <Link to={`/products/${props.product.id}`}>
        <img
          className="inline"
          src={props.product.image}
          alt={props.product.category}
          width="150"
          height="100"
        />
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${props.product.id}`}>
            {props.product.title}
          </Link>
        </h3>
        <div className="font-bold mb-3">$ {props.product.price}</div>
        <div className="mb-3">{props.product.description}</div>
        <Link
          to={`/products/${props.product.id}`}
          className="bg-blue-500 text-white p-2 justify-center w-36 inline"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
