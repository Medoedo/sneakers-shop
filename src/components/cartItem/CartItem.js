import { useDispatch } from "react-redux"
import { useHttp } from "../../hook/http.hook"
import { toggleCart } from "../cardList/sneakersSlice"

import deleteCross from "../../resources/images/card/plus.svg"
import "./cartItem.scss"

const CartItems = ({ name, price, src, inCart, id, favorite }) => {
    const {request} =useHttp();
    const dispatch = useDispatch();

    const onToggleCart = () => {
        const sneakers = {
            id,
            name,
            price,
            src,
            favorite,
            inCart: !inCart
        }
        // console.log("del")

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
                <button className="btn cartItem__deleteBtn">
                    <img onClick={() => onToggleCart()} src={deleteCross} alt="" />
                </button>
            </div>
        </div>
    )
}

export default CartItems;