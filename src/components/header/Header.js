import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "../cardList/sneakersSlice"
import { Link, NavLink } from "react-router-dom"

import {selectAll, cartFetch} from "./cartSlice"
import {store} from "../../store/store"

import cartImg from "../../resources/images/header/cart.svg"
import cartActive from "../../resources/images/header/cart-active.svg"
import favourite from "../../resources/images/header/favourite.svg"
import favouriteActive from "../../resources/images/header/favourite-active.svg"
import userIcon from "../../resources/images/header/user.svg"
import userIconActive from "../../resources/images/header/user-active.svg"
import icon from "../../resources/images/header/favicon.ico"

import "./header.scss"

const Header = () => {
    const {showModal} = useSelector(state => state.sneakers);
    const cart = selectAll(store.getState())
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartFetch())

    }, [])

    return (
        <>
            <header className="header">
                <div className="header__body">
                    <div className="header__logo">
                        <div className="header__icon">
                            <Link to="/">
                                <img src={icon} alt="" />
                            </Link>
                        </div>
                        <div className="header__text">
                            <h2>My Sneakers</h2>
                            <p>Shop of the best sneakers</p>
                        </div>
                    </div>
                    <ul className="header__nav">
                        <li onClick={() => dispatch(toggleModal())} className="header__item basket">
                            <img src={showModal ? cartActive : cartImg} alt="" />
                            <p id="price">{cart[0] ? cart[0].sum : 0}$</p>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/favorite"
                                className="header__item_fav"
                                style={({ isActive }) => {
                                    return {
                                        backgroundImage: isActive ? `url(${favouriteActive})` : `url(${favourite})`
                                    }
                                }}
                            >
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/shop"
                                style={({ isActive }) => {
                                    return {
                                        backgroundImage: isActive ? `url(${userIconActive})` : `url(${userIcon})`
                                    }
                                }}
                            >
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>

    )
}

export default Header;