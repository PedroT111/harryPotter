import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        reduxDevTools
        )
    );

export default store;
