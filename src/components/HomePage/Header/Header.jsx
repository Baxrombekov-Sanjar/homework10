import logo from "../../../assets/logo (5).svg";
import { useGlobalContext } from "../../../context";
import userUz from '../../../assets/avatar.svg'
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useGlobalContext();
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to='/dash'>
        <img src={logo} alt="logo1" />
        </Link>
        <div className="header__nav-search">
          <button>
            <i className="fa-solid fa-bars"></i>
            Каталог
          </button>
          <div className="search">
            <input type="text" name="seachProduct" placeholder="Найти товар" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="header__nav-option">
          <div className="icon">
            <Link to="/favourites">
              <i className="fa-regular fa-heart"></i>
              <p>Избранное</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/allproducts">
              <i className="fa-solid fa-cube"></i>
              <p>продукты</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/basket">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Корзина</p>
            </Link>
          </div>
          <div>
            <img src={userUz} alt="user" />
            <span>{user.name}</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
