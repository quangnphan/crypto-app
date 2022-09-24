import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
