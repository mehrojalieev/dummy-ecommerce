import { combineReducers } from "redux";
import { loadCartReducer } from "./cart-reducer";


const rootReducer = combineReducers({
    carts: loadCartReducer
})


export {rootReducer}