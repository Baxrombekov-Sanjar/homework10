import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import AddCard from "./components/AddCard";
import SinglePage from "./components/SinglePage";
import ProtectRoute from "./components/ProtectRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/single/:id" element={<SinglePage />} />
        <Route path="/add" element={<AddCard />} />
        <Route
          path="/dash"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
