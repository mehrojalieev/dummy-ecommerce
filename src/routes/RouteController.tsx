import { Route, Routes } from 'react-router'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import SingleProduct from '../pages/single-product/SingleProduct'
import AllProducts from '../pages/all-products/AllProducts'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/all-products' element={<AllProducts/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='product-detail/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default RouteController
