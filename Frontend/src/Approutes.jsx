import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/posts/pages/Feed"
import CreatePost from "./features/posts/pages/CreatePost";
import { useContext } from "react";
import { AuthContext } from "./features/auth/auth.context.jsx";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <ProtectedRoute><Feed /></ProtectedRoute>
  },
  {
    path: "/create-post",
    element: <ProtectedRoute><CreatePost /></ProtectedRoute>
  }
])

