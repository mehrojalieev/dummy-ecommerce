import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";


const rootReducer = combineReducers({
    carts: cartReducer
})


export {rootReducer}