/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import getStore from "./utils/get";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const id = uid();
  const img = "https://picsum.photos/200/300";

  //   useStates
  const [user, setUser] = useState("");
  const [product, setProduct] = useState(getStore("products"));
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [basket, setBasket] = useState(getStore("basket"));

  //   CRUD
  const handeSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("форма пусто");
    } else {
      const newItem = { id: id, name: user };
      setUsers([...users, newItem]);
      navigate("/dash");
      if (user.length > 0) {
        // navigate("/");
      }
      setUser("");
    }
  };

  const handeSubmit2 = (e) => {
    e.preventDefault();
    if (name && price) {
      const newItem = { id: id, title: name, price: price, img: img };
      setProduct([...product, newItem]);
      setName("");
      setPrice("");
    } else {
      alert("error");
    }
  };
  const removeItem = (id) => {
    const newitem = product.filter((item) => item.id !== id);
    setProduct(newitem);
  };
  const addToBasket = (id) => {
    const newItem = product.find((item) => item.id === id);
    setBasket([...basket, newItem]);
  };
  function goToaddCard() {
    navigate("/add");
    console.log(15);
  }

  const [users, setUsers] = useState(getStore("users"));
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("products", JSON.stringify(product));
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [users, product, basket]);

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
