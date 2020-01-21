import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteApp from './NoteApp';
import * as serviceWorker from './serviceWorker';
import reducer from './redux/reducers'
import createStore from './redux/store'
const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const store = createStore(reducer);

store.dispatch({
  type: CREATE_NOTE
});


console.log(store.getState())

const initialState = {
    nextNoteId: 1,
    notes: {}
  };
  
window.state = initialState;

ReactDOM.render(<NoteApp notes={window.state.notes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
