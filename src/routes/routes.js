import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

const AppRoutes = ({ searchValue }) => {
  const navigationRoutes = [
    {
      path: "/",
      element: <Home searchValue={searchValue} />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
