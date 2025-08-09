
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import RootLayout from "./layouts/RootLayout";
import { useAuth } from "./context/AuthContext";


import Contact from "./pages/Contact";
import SingleImage from "./pages/SingleImage";
import Profile from "./pages/Profile";
import OnlineUsers from "./pages/OnlineUsers";

function App() {
  const { user } = useAuth();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute user={user}>
          <RootLayout />
        </PrivateRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "singleImage/:id", element: <SingleImage /> },
        { path: "profile", element: <Profile /> },
        { path: "users", element: <OnlineUsers /> },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/signUp", element: user ? <Navigate to="/" /> : <Signup /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
