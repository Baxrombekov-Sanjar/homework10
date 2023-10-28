import Footer from "../components/HomePage/Footer/Footer";
import { useGlobalContext } from "../context";

export default function Favourites() {
  const { favourites } = useGlobalContext();
  return (
    <div>
      <div className="basket_text main">
        <h2>Избраное  </h2>
      </div>
      <div className="basket main">
        {favourites.map((item) => {
          const { id, title, price, img } = item;
          return (
            <div key={id} className="basket_items">
              <img className="basket_img" src={img} alt="img" />
              <h1>{title}</h1><br />
              <h3>{price} ₽</h3>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
