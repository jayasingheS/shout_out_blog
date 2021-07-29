import rootReducers from "./reducers";
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

export function configureStore(){
    const store = createStore(rootReducers,compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store;
}
