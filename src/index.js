import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';



const initialState = {isLeftMenu: false, lenLeftMenu: 12}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'MENU_SHOW':
      return {...state, isLeftMenu: true, lenLeftMenu: 9}
    case 'MENU_HIDE':
      return {...state, isLeftMenu: false, lenLeftMenu: 12}
    default:
      return state
  }
}


const store = createStore(reducer)





ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root'))


