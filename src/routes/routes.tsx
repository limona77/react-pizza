import { Route, Routes } from "react-router";
import React from "react";

import Home from "../pages/Home";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "../pages/Cart"),
);
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza" */ "../pages/FullPizza"),
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "../pages/NotFound"),
);

const AppRoutes = () => {
  const navigationRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: (
        <React.Suspense>
          <NotFound />
        </React.Suspense>
      ),
    },
    {
      path: "/cart",
      element: (
        <React.Suspense fallback={<div>Идет загрузка корзины</div>}>
          <Cart />
        </React.Suspense>
      ),
    },
    {
      path: "/pizza/:id",
      element: (
        <React.Suspense>
          <FullPizza />
        </React.Suspense>
      ),
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
