import { combineReducers, createStore } from "redux";
import {weatherReducer} from "./weatherReducer";

const reducers = combineReducers({
    profile: weatherReducer,

});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 