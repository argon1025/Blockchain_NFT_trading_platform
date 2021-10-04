import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Redux Modules
import store from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
//Redux Persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Router
import { BrowserRouter, Route } from "react-router-dom";

// Containers
import * as Container from "./containers";

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route exact path="/">
            <Container.IntroductionContainer />
          </Route>
          <Route exact path="/metamasklogin">
            <Container.Web3LoginContainer />
          </Route>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
