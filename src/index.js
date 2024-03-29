import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from "./context/UserContext";
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

const composedEnhancers = composeEnhancers(
    applyMiddleware(
        thunk
    )
);
const store = createStore(rootReducer, composedEnhancers);


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <UserProvider>
              <App />
          </UserProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
