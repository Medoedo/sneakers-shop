import { useDispatch } from "react-redux"
import { useHttp } from "../../hook/http.hook"
import { toggleCart } from "../cardList/sneakersSlice"
import {changeSum, selectAll} from "../header/cartSlice"

import {store} from "../../store/store"

import deleteCross from "../../resources/images/card/plus.svg"
import "./cartItem.scss"

const CartItems = ({ name, price, src, inCart, id, favorite }) => {
    const {request} = useHttp();
    const dispatch = useDispatch();

    const cart = selectAll(store.getState())

    const onToggleCart = () => {
        const sneakers = {
            id,
            name,
            price,
            src,
            favorite,
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

        dispatch(toggleCart({ id: id, changes: { inCart: !inCart } }));
        request(`http://localhost:3001/sneakers/${id}`, "PUT", JSON.stringify(sneakers))
    }

    return (
        <div className="cartItem">
            <img src={src} className="cartItem__image" alt="" />
            <div className="cartItem__box">
                <div className="cartItem__content">
                    <p className="cartItem__title">{name}</p>
                    <p className="cartItem__price">{price}$</p>
                </div>
                <button onClick={() => onToggleCart()} className="btn cartItem__deleteBtn">
                    <img src={deleteCross} alt="" />
                </button>
            </div>
        </div>
    )
}

export default CartItems;