import Footer from "../components/HomePage/Footer/Footer";
import Products from "../components/Products/Products";
import { useGlobalContext } from "../context";

export default function AllProducts() {
  const {goToaddCard} = useGlobalContext()
  return (
    <div>
      <Products goToaddCard={goToaddCard}/>
      <Footer/>
    </div>
  )
}