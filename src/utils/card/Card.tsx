import { connect, useDispatch, useSelector } from 'react-redux';
import { ProductType } from '../../types'
import './Card.scss'
import { FaStar } from "react-icons/fa";
import { loadCarts, RemoveCart } from '../../redux/actions/cart-action';
import { Link } from 'react-router-dom';


const Card = ({product}: {product: ProductType}) => {
  const dispatch = useDispatch()

  const CartProducts = useSelector((state: any) => state.cart.cart)

  console.log(CartProducts);
  
  const handleAddToCart = () => {
    dispatch(loadCarts(product) as any)
  }

  const handleRemoveFromCart = () => {
    dispatch(RemoveCart(product) as any)
  }
    
  return (
    <div className='card'>
        <div className="product-image">
      <img src={product.images[0]} alt="" />
        </div>
      <Link to={`/product-detail/${product.id}`} className='product-name'>{product.title.slice(0, 16)}</Link>
      <strong className='price'>${product.price ? product.price : 10}</strong>
      <div className="star-items">
       <i><FaStar/></i>
       <i><FaStar/></i>
       <i><FaStar/></i>
       <i><FaStar/></i>
       <i><FaStar/></i>
      </div>
      {
        CartProducts.filter((f: ProductType) => f.id === product.id).length > 0 ? 
        <div>
          <button onClick={handleRemoveFromCart} className='in-cart add-to-cart'>+ Remove From Cart</button>
        </div>
        : <button onClick={handleAddToCart} className='add-to-cart'>+ Add To Cart </button>
      }
      
    </div>
  )
}

export default connect(null, {loadCarts})(Card)
