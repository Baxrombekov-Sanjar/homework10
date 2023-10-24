/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function NewProduct() {
  const { product, removeItem } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div
      className="main main__products-item"
      style={{
        paddingLeft: "116px",
        paddingRight: "116px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      {product.map((item) => {
        const { id, title, price, img } = item;
        return (
          <div key={id}>
            <img src={img} alt="product" />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button onClick={() => navigate(`/single/${id}`)}>Info</button>
            <button className="remove" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
