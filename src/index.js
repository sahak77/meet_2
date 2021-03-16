import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux'
import {rootReducer} from './redux/rootReducer'
import Thunk from "redux-thunk";
import { Provider } from 'react-redux'

// our created Middleware
import {Middleware} from "./redux/middleware";


const store = createStore(
  rootReducer, 
  compose( // helps work applyMiddleware and redux devtool together
    applyMiddleware( // adding Middleware on your project
      Thunk, // asynchronous
      Middleware // if you typeing spam words on input it finds and return error 
    ))
  )  
  

 

// window.store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* << makes Redux store available to any components  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
