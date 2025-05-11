import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import React from "react";
import NotFound from "./pages/NotFound";
import { useNavigate } from "react-router";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
