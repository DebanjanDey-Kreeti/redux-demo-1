import { createStore, applyMiddleware } from "redux";

const reducer = function(state, action) {
  if(action.type === "INC") {
    return state + action.payload;
  }
  else if(action.type === "DEC") {
    return state - action.payload;
  }
  else if(action.type === "MUL") {
    return state * action.payload;
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

const middleware = applyMiddleware(logger,error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
});

store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 25 });
store.dispatch({ type: "DEC", payload: 110 });
store.dispatch({ type: "MUL", payload: -72 });
store.dispatch({ type: "E" });
