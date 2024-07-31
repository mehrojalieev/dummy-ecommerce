import { Link, NavLink } from "react-router-dom"
import "./Nav.scss"
const Nav = () => {
  return (
    <nav>
        <div className="nav-wrapper container">
            <Link className="logo-link" to={'/'}>LO<span>GO</span>HERE</Link>
            <ul className="nav-menu">
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/all-products"} className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"} className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"} className={({isActive}) => isActive ? "item-link item-link--active" : "item-link"}>Contact</NavLink>
                </li>
            </ul>

            <div className="nav-actions">
                    <Link className="favorite-link" to={'/'}>
                        <span className="material-symbols-outlined">favorite</span>
                    </Link>
                    <Link className="cart-link" to={'/cart'}>
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                    <Link to={'/login'} className="login-link">Login <span className="material-symbols-outlined">login</span></Link>
                <div className="auth-aciton">

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
