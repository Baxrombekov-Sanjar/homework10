// import { useGlobalContext } from "../context";
import Footer from "./HomePage/Footer/Footer";
import Header from "./HomePage/Header/Header";
import Main from "./HomePage/Main/Main";

/* eslint-disable react/prop-types */
export default function Dashboard() {
  // const user = useGlobalContext();
  return (
    <div>
      {/* welcome {user.name} */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
