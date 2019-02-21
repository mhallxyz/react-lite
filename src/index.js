import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/reducers'
import thunk from "redux-thunk"
import { logger } from "redux-logger"
import App from "./App";
// this line is new
// we now have some nice styles on our react app
import "index.scss";

const store = createStore(reducers(), applyMiddleware(thunk, logger))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"));
