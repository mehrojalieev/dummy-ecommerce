import { ProductType } from "../../../types"
import "./CardOfCart.scss"
const CardofCart = ({product}: {product: ProductType}) => {
    console.log(product);
    
  return (
    <div className="cardofcart">
        <div className="card__main-info">
            <div className="product-image">
        <img src={product.images[0]} />
            </div>
        <div className="card-info">
            <h3>{product.title}</h3>
            <p>brand: {product.brand}</p>
            <div className="counter">
                <span className="material-symbols-outlined count-btn">remove</span>
                <span className="count">1</span>
                <span className="material-symbols-outlined count-btn">add</span>
            </div>
        </div>
        </div>
        <div className="card__main-action">
        <span className="price">${product.price}</span>
            <span className="material-symbols-outlined delete-btn">delete</span>
        </div>
    </div>
  )
}

export default CardofCart
