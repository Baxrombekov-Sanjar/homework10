/* eslint-disable react/prop-types */
import "./Products.css";
import product1 from "../../assets/image (1).png";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Products({ goToaddCard }) {
  const navigate = useNavigate();
  const { like, setLike, product, removeItem, addToBasket } =
    useGlobalContext();
  return (
    <main className="main">
      <div className="main__products">
        <h2>Все продукты</h2>
        <div
          className="main main__products-item2"
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          {product.map((item) => {
            const { id, title, price, img, liked } = item;
            return (
              <div key={id}>
                {like ? (
                  <FcLike
                    className="producticon"
                    size={25}
                    onClick={() => {
                      setLike(!like);
                      console.log(liked);
                    }}
                  />
                ) : (
                  <AiOutlineHeart
                    style={{ color: "#fff" }}
                    className="producticon"
                    size={25}
                    onClick={() => {
                      setLike(!like);
                      console.log(liked);
                    }}
                  />
                )}
                <img src={img} alt="product" />
                <h3>{price}  ₽</h3>
                <h2>{title}</h2>
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <button onClick={() => navigate(`/single/${id}`)}>Подробнее...</button>
                <button className="basketBtn" onClick={() => addToBasket(id)}>
                В корзину
                </button>
                <button className="remove" onClick={() => removeItem(id)}>
                  Удалить
                </button>
              </div>
            );
          })}
        </div>
        <div className="main__products-item">
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
        </div>
        <button className="more" onClick={() => goToaddCard()}>
          Добавить ещё
        </button>
        <div className="carusel">
          <p>
            <span>
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <i className="fa-solid fa-chevron-left"></i>{" "}
            <span className="first">1</span> <span>2 3 4 5 6 7 8</span>
            <i className="fa-solid fa-chevron-right"></i>
            <span>
              <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
