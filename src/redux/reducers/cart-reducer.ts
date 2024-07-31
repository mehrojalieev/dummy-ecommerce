// src/reducers/cartReducer.ts
import { ProductType } from '../../types';

type CartState = {
    cart: ProductType[];
};

const initialState: CartState = {
    cart: []
};

const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload.cart]
            };
            case "REMOVE_FROM_CART":
                return {
                    cart: state.cart.filter((cart: ProductType) => cart.id !== action.payload.cart.id)
                }
        default:
            return state;
    }
};




export  {cartReducer};
