import "./Footer.css";
import logo2 from "../../../assets/logo (6).svg";
import social from "../../../assets/Social.png";
import disagn from "../../../assets/logo-zasovskiy-small-black.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo2} alt="logo2" />
      <ul className="footer__list">
        <li>О компании</li>
        <li>Контакты</li>
        <li>Вакансии</li>
        <li>Статьи</li>
        <li>Политика обработки персональных данных</li>
      </ul>
      <img src={social} alt="social" />
      <div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <p>8 800 777 33 33</p>
        </div>
        <div className="design">
          <span>Дизайн</span>
          <img src={disagn} alt="disagn" />
        </div>
      </div>
    </footer>
  );
}
