// src/actions/cartActions.ts
import { Dispatch } from 'redux';
import { ProductType } from '../../types';


const addToCart = (cart: ProductType) => {
    return {
        type: "ADD_TO_CART",
        payload: { cart }
    };
};

const loadCarts = (cart: ProductType) => {
    return async (dispatch: Dispatch) => {
        console.log(cart);
        dispatch(addToCart(cart));
    };
};


  const removeFromCart = (cart: ProductType) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: { cart }
    };
  }  

  const RemoveCart = (cart: ProductType) => {
    return async (dispatch: Dispatch) => {
        dispatch(removeFromCart(cart))
    }
  }

export { loadCarts, RemoveCart  };
