import Header from "./components/Header";

import AppRoutes from "./routes/routes";

import "./scss/app.scss";

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
