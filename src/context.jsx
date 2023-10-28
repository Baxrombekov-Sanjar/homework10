/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import getStore from "./utils/get";
import productData from "./utils/data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const id = uid();
  const img = "https://picsum.photos/200/300";

  //   useStates

  const [count, setCount] = useState(Number(getStore()));
  const [user, setUser] = useState("");
  const [product, setProduct] = useState(getStore("products"));
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [basket, setBasket] = useState(getStore("basket"));
  const [favourites, setFavourites] = useState(getStore("favourites"));
  const [like, setLike] = useState(false);
  const [users, setUsers] = useState(getStore("users"));
  const [defaultProducts, setDefaultProducts] = useState(
    getStore("defaultProducts")
  );

  //   CRUD
  const handeSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("форма пусто");
    } else {
      const newItem = { id: id, name: user };
      setUsers([...user, newItem]);
      navigate("/dash");
      setUser("");
    }
  };

  const handeSubmit2 = (e) => {
    e.preventDefault();
    if (name && price) {
      const newItem = {
        id: id,
        title: name,
        price: price,
        img: img,
        liked: like,
      };
      setProduct([...product, newItem]);
      setName("");
      setPrice("");
    } else {
      alert("error");
    }
  };
  const removeItem = (id) => {
    const newitem = product.filter((item) => item.id !== id);
    const newitem2 = defaultProducts.filter((item) => item.id !== id);
    setProduct(newitem, newitem2);
  };
  const addToBasket = (id) => {
    const newItem = product.find((item) => item.id === id);
    if (basket.id === product.id) {
      setCount((count) => (count += 1));
      setBasket([...basket, newItem]);
    } else {
      setBasket([...basket, newItem]);
    }
  };
  const addToBasket2 = (id) => {
    const newItem2 = defaultProducts.find((item) => item.id === id);
    console.log(defaultProducts);
    setBasket([...basket, newItem2]);
  };
  const addToFavourites = (id) => {
    const newItem = product.find((item) => item.id === id);
    setLike(!like);
    setFavourites([...favourites, newItem]);
  };
  function goToaddCard() {
    navigate("/add");
    console.log(15);
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("products", JSON.stringify(product));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("favourites", JSON.stringify(favourites));
    localStorage.setItem("defaultProducts", JSON.stringify(defaultProducts));
    localStorage.setItem("count", JSON.stringify(count));
  }, [users, product, basket, favourites, count, defaultProducts]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        product,
        setProduct,
        name,
        setName,
        price,
        setPrice,
        basket,
        setBasket,
        users,
        setUsers,
        handeSubmit,
        handeSubmit2,
        removeItem,
        addToBasket,
        goToaddCard,
        like,
        setLike,
        favourites,
        setFavourites,
        addToFavourites,
        count,
        setCount,
        productData,
        setDefaultProducts,
        defaultProducts,
        addToBasket2
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
