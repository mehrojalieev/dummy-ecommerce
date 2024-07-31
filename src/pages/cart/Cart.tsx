import { useSelector } from "react-redux"
import CardofCart from "./card-of-cart/CardofCart";
import { ProductType } from "../../types";
import "./Cart.scss"
const Cart = () => {
    const CartData = useSelector((state: any) => state?.carts?.cart)
    console.log(CartData);
    
  return (
    <div className="cart container">
        <div className="cart-header">
            <h2>Cart</h2>
        </div>


        {
            CartData?.length > 0 ?
        <div className="cart__contents-wrapper">
            <div className="cart__cards-wrapper">
                {
                    CartData?.map((product: ProductType, index:number ) =>
                        <CardofCart product={product} key={index}/>

                    )
                }
            </div>

            <div className="cards__action-box">
                    <h3 className="checkout-title">Checkout Shopping</h3>
                    <div className="box-actions">
                        <h4>Discount</h4>
                        <strong>$0</strong>
                    </div>
                    <div className="box-actions">
                        <h4>Total</h4>
                        <strong>${CartData?.reduce((total: number, product: ProductType) => total + product.price, 0)}</strong>
                    </div>
                    <div className="promocode-action">
                        <input type="text" placeholder="Enter Promocode" />
                        <button>Apply</button>
                    </div>
                    <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    :
        <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <span className="material-symbols-outlined">shopping_cart</span>
        </div>
        }

    </div>
  )
}

export default Cart
