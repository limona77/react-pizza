import "./scss/app.scss";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";
import React from "react";

import AppRoutes from "./routes/routes";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <AppRoutes />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
