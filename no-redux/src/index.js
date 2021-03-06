import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NoteAppContainer from "./components/NoteAppContainer";
import reducer from "./redux/reducers";
import createStore from "./redux/store";
import Provider from "./redux/provider";

const loggingMiddleware = ({getState}) => next => action => {
  console.info('before', getState());
  console.info('action', action);
  const result = next(action);
  console.info('after', getState());
  return result;
};

const thunkMiddleware = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

const applyMiddleware = (...middlewares) => store => {
  if (middlewares.length === 0) {
    return dispatch => dispatch;
  }
  if (middlewares.length === 1) {
    return middlewares[0](store);
  }
  const boundMiddlewares = middlewares.map(middleware =>
    middleware(store)
  )
  return boundMiddlewares.reduce((a, b) =>
    next => a(b(next))
  )
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <NoteAppContainer  />
  </Provider>,
  document.getElementById("root")
);

