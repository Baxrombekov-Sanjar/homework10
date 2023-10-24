import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
             <Link to="signup">
              <button>Sign up</button>
            </Link>
    </div>
  );
}
