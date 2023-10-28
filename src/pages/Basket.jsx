/* eslint-disable react/prop-types */
import Footer from "../components/HomePage/Footer/Footer";
// import '../App.css'
import { useGlobalContext } from "../context";


export default function Basket() {
  const { basket, count } = useGlobalContext()
  return (
    <div>
      <div className="basket_text main">
        <h2>Корзина</h2>
      </div>
      <div className="basket main">
        {basket.map((item) => {
          const { id, title, price, img } = item;
          return (
            <div key={id} className="basket_items">
              <img className="basket_img" src={img} alt="img" />
              <h1>{title}</h1><br />
              <h3>{price} ₽</h3>
              {/* <h4> {count}</h4> */}
        
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
