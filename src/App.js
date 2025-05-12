import "./scss/app.scss";
import Header from "./components/Header";

import React from "react";

import AppRoutes from "./routes/routes";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <AppRoutes searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
