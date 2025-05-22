import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}
