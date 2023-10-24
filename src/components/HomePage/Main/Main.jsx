/* eslint-disable react/no-unknown-property */
import slider from "../../../assets/Sliders.png";
import "./Main.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import product1 from "../../../assets/image (1).png";
import banner1 from "../../../assets/banner-hover.png";
import banner2 from "../../../assets/banner.png";
import stop from "../../../assets/stop.png";
import spring from "../../../assets/spring.png";
import foods from "../../../assets/foods.png";
import map from "../../../assets/map.png";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useState } from "react";

export default function Main() {
  const [like, setLike] = useState(false);
  console.log(like);
  return (
    <main className="main">
      <section className="main__slider">
        <img src={slider} alt="slider" />
      </section>
      <section className="main__products">
        <div>
          <p>Акции</p>
          <p>
            Все продукты <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="main__promotion-products">
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}
            <img src={product1} alt="product" />
            <b>139,99 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>69,99 ₽</b>
            <p>
              Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное ...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>79,99 ₽</b>
            <p>
              Молоко сгущенное РОГАЧЕВ <br /> Егорка, цельное с сахаром...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>139,99 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
        </div>
      </section>
      <section className="main__products">
        <div>
          <p>Новинки</p>
          <p>
            Все продукты <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="main__promotion-products">
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>139,99 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>69,99 ₽</b>
            <p>
              Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное ...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>79,99 ₽</b>
            <p>
              Молоко сгущенное РОГАЧЕВ <br /> Егорка, цельное с сахаром...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>139,99 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
        </div>
      </section>
      <section className="main__products">
        <div>
          <p>Покупали раньше</p>
          <p>
            Все продукты <MdKeyboardArrowRight />
          </p>
        </div>
        <div className="main__promotion-products">
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>139,99 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>69,99 ₽</b>
            <p>
              Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное ...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}

            <img src={product1} alt="product" />
            <b>79,99 ₽</b>
            <p>
              Молоко сгущенное РОГАЧЕВ <br /> Егорка, цельное с сахаром...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            {like ? (
              <FcLike
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            ) : (
              <AiOutlineHeart
                className="producticon"
                size={25}
                onClick={() => setLike(!like)}
              />
            )}
            <img src={product1} alt="product" />
            <b>139,99 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
        </div>
      </section>
      <section className="main__special">
        <h3>Специальные предложения</h3>
        <div>
          <img src={banner1} alt="banner" />
          <img src={banner2} alt="banner" />
        </div>
      </section>
      <section className="main__ourshops">
        <h3>Наши магазины</h3>
        <div>
          <button>п.Щельяюр</button>
          <button>д.Вертеп</button>
          <button>с.Краснобор</button>
          <button>д.Диюр</button>
        </div>
        <img src={map} alt="map" />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1697545680816!5m2!1sru!2s" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </section>
      <section className="main__articles">
        <div>
          <h3>Статьи</h3>
          <p>
            Все статьи <MdKeyboardArrowRight />
          </p>
        </div>
        <div>
          <div>
            <img src={stop} alt="article" />
            <div className="text">
              <small>05.03.2021</small>
              <h4>
                1 Режим использования масок и <br /> перчаток на территории
                магазинов
              </h4>
              <p>
                Подробная информация о режимах <br /> использования масок и
                перчаток на <br />
                территории магазинов ЛЕНТА. Информация <br /> обновляется каждый
                будний день. Подробнее
              </p>
              <button>Подробнее</button>
            </div>
          </div>
          <div>
            <img src={spring} alt="article" />
            <div className="text">
              <small>05.03.2021</small>
              <h4>Весеннее настроение для каждой</h4>
              <p>
                8 Марта – это не просто Международный <br /> женский день, это
                ещё день тюльпанов, <br /> приятных сюрпризов и праздничных
                тёплых <br /> пожеланий.
              </p>
              <button>Подробнее</button>
            </div>
          </div>
          <div>
            <img src={foods} alt="article" />
            <div className="text">
              <small>22.02.2020</small>
              <h4>
                ЗОЖ или ФАСТФУД. А вы на чьей <br /> стороне? Голосуем!
              </h4>
              <p>
                Голосуйте за любимые категории, выбирайте <br />
                категорию-победителя в мобильном <br /> приложении и получайте
                кешбэк 10% <br />
                баллами в апреле! Подробнее
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
