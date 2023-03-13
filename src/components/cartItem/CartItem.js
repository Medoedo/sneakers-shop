import deleteCross from "../../resources/images/card/plus.svg"
import sneakers from "../../resources/images/card/sneakers.svg"
import "./cartItem.scss"

const CartItems = () => {

    return (
        <div className="cartItem">
            <img src={sneakers} className="cartItem__image" alt="" />
            <div className="cartItem__box">
                <div className="cartItem__content">
                    <p className="cartItem__title">Nike Blazer Mid Suede Men's Sneakers</p>
                    <p className="cartItem__price">30$</p>
                </div>
                <button className="btn cartItem__deleteBtn">
                    <img src={deleteCross} alt="" />
                </button>
            </div>
        </div>
    )
}

export default CartItems;