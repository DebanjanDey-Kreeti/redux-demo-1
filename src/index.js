import { createStore, applyMiddleware } from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware"

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
  else if(action.type === "E") {
    throw new Error("Sob Howrah r bus Sealdah hoye jay na!");
  }
  return state;
};

const logger = (store) => (next) => (action) => {
  console.log("Action fired", action);
  // action.type = "DEC";
  next(action);
}

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
}); */

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://dummy.restapiexample.com/api/v1/employee/9238")
});