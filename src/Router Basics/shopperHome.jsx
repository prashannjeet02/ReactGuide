import axios from "axios";
import { useState, useEffect } from "react";

export const ShoppingHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((response) => {
      setProducts(response.data);
    });
  });
  return (
    <div className="container-fluid d-flex flex-wrap">
      {products.map((product) => (
        <div className="card m-2 p-2" style={{ width: 200 }} key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            style={{ height: 140, width: 140 }}
          />
          <div className="card-header overflow-auto" style={{ height: 150 }}>
            <p>{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
