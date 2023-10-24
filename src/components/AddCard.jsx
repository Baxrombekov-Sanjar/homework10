/* eslint-disable react/prop-types */
import { useGlobalContext } from "../context";
import NewProduct from "../pages/NewProduct";
import Footer from "./HomePage/Footer/Footer";
import Header from "./HomePage/Header/Header";
import "./Products/Products.css";

export default function AddCard() {
  const { name, setName, price, setPrice, handeSubmit2} =
    useGlobalContext();
  return (
    <div>
      <Header />
      <div className="main" style={{ paddingTop: "40px" }}>
        <form
          style={{ paddingLeft: "116px", paddingRight: "116px" }}
          action=""
          onSubmit={handeSubmit2}
        >
          <input
            type="text"
            name="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="title"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <button>Add</button>
        </form>
      </div>
      <NewProduct />
      <Footer />
    </div>
  );
}
