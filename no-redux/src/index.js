import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NoteAppContainer from "./components/NoteAppContainer";
import reducer from "./redux/reducers";
import createStore from "./redux/store";
import Provider from "./redux/provider";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <NoteAppContainer  />
  </Provider>,
  document.getElementById("root")
);

