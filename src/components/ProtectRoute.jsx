/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function ProtectedRoute({ children }) {
  const { user } = useGlobalContext();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
