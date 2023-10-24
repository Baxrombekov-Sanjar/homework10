import Footer from "../components/HomePage/Footer/Footer";
import Header from "../components/HomePage/Header/Header";
import { useGlobalContext } from "../context";

export default function Favourites() {
  const { favourites } = useGlobalContext();
  return (
    <div>
      <Header/>
      <div className="liked main">
        <h2>Избраное</h2>
        {favourites.map((item) => {
          const { id, title, price } = item;
          return (
            <div key={id}>
              <h3>{title}: {price} ₽</h3>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  )
}
