import emptyCart from "../../resources/images/empty-cart.jpg"
import arrow from "../../resources/images/arrow-for-goBack.svg"
import CartItem from "../cartItem/CartItem"

import "./modalCart.scss"


const ModalCart = () => {


    return (
        <div className="modalCart">
            <div className="modalCart__container">
                <div className="modalCart__content">
                    <h3 className="modalCart__title">Cart</h3>
                    {/* <EmptyCart/> */}
                    <CartItem/>
                </div>
            </div>
        </div>
    )
}

const EmptyCart = () => {

    return (
        <div className="hereNothing modalSize">
            <img className="hereNothing__sticker modalSize__image" src={emptyCart} alt=""/>
            <h3 className="hereNothing__title">Your cart is empty</h3>
            <p className="hereNothing__text modalSize__text">Add at least 1 pair of sneakers to your order</p>
            <button to="/" className="goBackBtn">
                <img src={arrow} alt=""/>
                Go to shop
            </button>
        </div>
    )
}

// const PlacedOrder = () => {

//     return (
//         <div className="hereNothing modalSize">
//             <img className="hereNothing__sticker modalSize__image" src={emptyCart} alt=""/>
//             <h3 className="hereNothing__title">The order has been placed</h3>
//             <p className="hereNothing__text modalSize__text">Add at least 1 pair of sneakers to your order</p>
//             <button to="/" className="goBackBtn">
//                 <img src={arrow} alt=""/>
//                 Go to shop
//             </button>
//         </div>
//     )
// }

export default ModalCart;