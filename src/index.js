import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Layout from "./js/components/Layout";
import store from "./js/store";

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <Layout />
  </Provider>, app);

/* import { createStore, applyMiddleware } from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true};
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_USERS_FULFILLED": {
      return {...state, fetching: false, fetched: true, users: action.payload};
    }
  }
  return state;
};

const error = (store) => (next) => (action) => {
  try{
    next(action);
  }
  // action.type = "DEC";
  catch(e) {
    console.log("Ah!", e);
  }
  
}

const middleware = applyMiddleware(promise, thunk, logger);
const store = createStore(reducer, middleware);

/* store.subscribe(() => {
  console.log("store changed", store.getState())
}); 

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://dummy.restapiexample.com/api/v1/employee/9238")
}); */
