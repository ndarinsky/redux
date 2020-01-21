import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NoteAppContainer from "./components/NoteAppContainer";
import * as serviceWorker from "./serviceWorker";
import reducer from "./redux/reducers";
import createStore from "./redux/store";

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
  <NoteAppContainer store={store} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
