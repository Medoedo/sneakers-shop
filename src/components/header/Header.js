import "./header.scss"

import { Link, NavLink } from "react-router-dom"
import cart from "../../resources/images/header/cart.svg"
import favourite from "../../resources/images/header/favourite.svg"
import userIcon from "../../resources/images/header/user.svg"
import icon from "../../resources/images/header/favicon.ico"

const Header = () => {

    return (
        <header className="header">
            <div className="header__body">
                <div className="header__logo">
                    <div className="header__icon">
                        <Link to="/">
                            <img src={icon} alt=""/>
                        </Link>
                    </div>
                    <div className="header__text">
                        <h2>My Sneakers</h2>
                        <p>Shop of the best sneakers</p>
                    </div>
                </div>
                <ul className="header__nav">
                    <li className="header__item basket">
                        <img src={cart} alt=""/>
                        <p id="price">0$</p>
                    </li>
                    <li className="header__item">
                        <NavLink 
                            to="/favorite"
                            style={{ 
                                backgroundImage: `url("../../resources/images/header/favourite-active.svg")` 
                              }}>
                            <span/>
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <Link to="/shop">
                            <img src={userIcon} alt=""/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;