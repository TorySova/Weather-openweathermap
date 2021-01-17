import { applyMiddleware, combineReducers, createStore } from "redux";
import {weatherReducer} from "./weatherReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    weather: weatherReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 