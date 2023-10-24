/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useGlobalContext } from "../context";

export default function NewProduct() {
  const { product, removeItem,like, setLike, addToBasket  } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div
      className="main main__products-item2"
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
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart 
              style={{color: "#fff"}}
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}
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
            <button className="basketBtn" onClick={() => addToBasket(id)}>Basket</button>
            <button className="remove" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
