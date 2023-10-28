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
import SharredLayout from "./components/SharredLayout";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/" element={<SharredLayout /> }>
          <Route path="/favourites" element={
           <ProtectRoute>
                <Favourites />
              </ProtectRoute>} />
          <Route path="/allproducts" element={
        <ProtectRoute>
          <AllProducts />
      </ProtectRoute>} />
          <Route path="/basket" element={
          <ProtectRoute>
          <Basket />
        </ProtectRoute>} 
          />
          <Route path="/single/:id" element={
        <ProtectRoute>
        <SinglePage />
      </ProtectRoute>
        } />
          <Route path="/add" element={
            <ProtectRoute>
              <AddCard />
            </ProtectRoute>} />
          <Route
            path="/dash"
            element={
              <ProtectRoute>
                <Dashboard />
              </ProtectRoute>
            }
          />
        </Route>
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
