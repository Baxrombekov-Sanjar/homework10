import "../components/HomePage/Main/Main.css";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
// import { Link } from "react-router-dom";

export default function SignUp() {
  const { setUser } = useGlobalContext();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    setUser({ name: name });
    navigate("/dash");
  };
  return (
    <div className="signup">
      <form className="form" onSubmit={handleSubmit} action="">
        <h3>Регистрация</h3>
        <input
          type="text"
          name="username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username..."
        />
        <button>Регистрация</button>
      </form>
    </div>
  );
}
