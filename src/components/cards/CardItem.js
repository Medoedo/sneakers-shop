import "./cardItem.scss"
import favouriteActive from "../../resources/images/card/favourite-active.svg"
import favourite from "../../resources/images/card/favourite.svg"
import plusIcon from "../../resources/images/card/plus.svg"
import addedIcon from "../../resources/images/card/added-icon.svg"

import { useDispatch } from "react-redux"
import { toggleCart, toggleFavorite } from "../cardList/sneakersSlice"
import {changeSum, selectAll} from "../header/cartSlice"

import {store} from "../../store/store"

import { useHttp } from "../../hook/http.hook"

const CardItem = (props) => {
    const { id, name, price, src, favorite, inCart } = props;

    const dispatch = useDispatch();
    const { request } = useHttp()

    const cart = selectAll(store.getState())

    let favoriteClass = "card__favBut";
    let favoriteIcon = favourite;

    let cartClass = "card__cartBut"
    let cartIcon = plusIcon;

    if (favorite) {
        favoriteClass += " card__favBut-active";
        favoriteIcon = favouriteActive;
    }

    if (inCart) {
        cartClass += " card__cartBut-active";
        cartIcon = addedIcon;
    }

    const onToggleCart = () => {
        const sneakers = {
            id: id,
            name: name,
            price: price,
            src: src,
            favorite: favorite,
            inCart: !inCart
        }

        if(cart[0] !== undefined) {
            if(!inCart) {
                let newSum = +cart[0].sum + +price;
                dispatch(changeSum({id: 1, changes: {sum: newSum}}))
                request("http://localhost:3001/cart/1", "PUT", JSON.stringify({id: 1, sum: newSum}))
            } else if(cart[0].sum !== 0) {
                let newSum = +cart[0].sum - +price;
                dispatch(changeSum({id: 1, changes: {sum: newSum}}))
                request("http://localhost:3001/cart/1", "PUT", JSON.stringify({id: 1, sum: newSum}))
            }
        }

        dispatch(toggleCart({ id: id, changes: { inCart: !inCart }}));
        request(`http://localhost:3001/sneakers/${id}`, "PUT", JSON.stringify(sneakers))
    }

    const onToggleFavorite = () => {
        const sneakers = {
            id: id,
            name: name,
            price: price,
            src: src,
            favorite: !favorite,
            inCart: inCart
        }

        dispatch(toggleFavorite({ id: id, changes: { favorite: !favorite } }));
        request(`http://localhost:3001/sneakers/${id}`, "PUT", JSON.stringify(sneakers))
    }

    return (
        <div className="card">
            <button
                onClick={onToggleFavorite}
                className={favoriteClass}
            >
                <img src={favoriteIcon} alt="" />
            </button>
            <img src={src} className="card__image" alt="" />
            <p className="card__title">{name}</p>
            <div className="card__priceBlock">
                <div>
                    <span>Price:</span>
                    <p>{price}$</p>
                </div>
                <button
                    onClick={onToggleCart}
                    className={cartClass}
                >
                    <img src={cartIcon} alt="add to cart btn" />
                </button>
            </div>
        </div>
    )
}

export default CardItem;