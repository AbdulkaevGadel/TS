import { combineReducers, configureStore } from "@reduxjs/toolkit";

let reducers = combineReducers({

});

let store = configureStore({ reducer: reducers });

// window.store = store;

export default store;
