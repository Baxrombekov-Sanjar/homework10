import "./Category.css";
import product1 from "../../../assets/image (1).png";

export default function Category() {
  return (
    <main className="main">
      <section className="main__category">
        <p className="categories">
          Главная <i className="fa-solid fa-chevron-right"></i> Каталог{" "}
          <i className="fa-solid fa-chevron-right"></i>{" "}
          <span>Молоко, сыр, яйцо</span>
        </p>
        <h2>Молоко, сыр, яйцо</h2>
        <div className="main__category-body">
          <div className="main__category-left">
            <div>Фильтр</div>
            <div>
              <p>Цена</p>
              <button>Очистить</button>
            </div>
            <div>
              <input type="number" value={1} />
              -
              <input type="number" value={100} />
            </div>
          </div>
          <div className="main__category-right">
            <div className="main__category-products">
              <div>
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
                <img src={product1} alt="product" />
                <b>69,99 ₽</b>
                <p>
                  Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное
                  ...
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
                <img src={product1} alt="product" />
                <b>69,99 ₽</b>
                <p>
                  Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное
                  ...
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
            <button className="more">Показать ещё</button>
            <div className="carusel">
              <p>
              <span>
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              <i className="fa-solid fa-chevron-left"></i> <span className="first">1</span> 2 3 4 5 6 7 8
              <i className="fa-solid fa-chevron-right"></i>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
