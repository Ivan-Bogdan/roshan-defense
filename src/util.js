import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers, composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(rootSaga);

const ConnectApp = connect((state) => {
    return state.toObject();
})(App)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConnectApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
