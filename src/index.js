import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { authInfoSuccess } from "./ducks/auth.duck";
import { db } from "./firebase";
import routeConfiguration from "./routeConfiguration";
import Routes from "./Routes";
import firebase from "firebase";
import Navbar from "./components/NavBar";

const store = configureStore({}, db);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(authInfoSuccess(user));
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes routes={routeConfiguration()} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
});
