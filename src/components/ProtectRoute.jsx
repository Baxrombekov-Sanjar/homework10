/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function ProtectedRoute({ children }) {
  const { users } = useGlobalContext();
  if (!users.name) {
    return <Navigate to="/" />;
  }

  return children;
}
