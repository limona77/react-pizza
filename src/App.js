import "./scss/app.scss";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";
import React from "react";

import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
