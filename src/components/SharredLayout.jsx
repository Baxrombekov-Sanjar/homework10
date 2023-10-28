
import { Outlet } from "react-router-dom";
import Header from "./HomePage/Header/Header";


export default function SharredLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
