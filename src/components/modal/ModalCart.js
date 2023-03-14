import { useSelector, useDispatch } from "react-redux"
import { toggleModal, selectAll } from "../cardList/sneakersSlice"

import {store} from "../../store/store"

import emptyCart from "../../resources/images/empty-cart.jpg"
import arrow from "../../resources/images/arrow-for-goBack.svg"
import arrowLeft from "../../resources/images/arrow-left.svg"

import CartItem from "../cartItem/CartItem"

import "./modalCart.scss"


const ModalCart = () => {
    const items = selectAll(store.getState());
    const {showModal} = useSelector(state => state.sneakers);
    const dispatch = useDispatch();

    if(showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }

    const renderCards = (data) => {
        if (data.length === 0) return data

        // eslint-disable-next-line
        const cards = data.map(({ id, ...props }) => {
            if (props.inCart === true) {
                return <CartItem
                key={id}
                id={id}
                {...props}
                />
            }
        })

        return cards.filter(item => {
            return item !== undefined;
        });
    }

    const elements = renderCards(items);

    return (
        <div className={showModal ? "modalCart modalCart-show" : "modalCart"}>
            <div className="modalCart__container">
                <div className="modalCart__content">
                    <div className="modalCart__header">
                        <button onClick={() => dispatch(toggleModal())} className="btn">
                            <img src={arrowLeft} alt=""/>
                        </button>
                        <h3 className="modalCart__title">Cart</h3>
                    </div>
                    {elements.length === 0 ? <EmptyCart /> : elements}
                </div>
            </div>
        </div>
    )
}

const EmptyCart = () => {
    const dispatch = useDispatch();

    return (
        <div className="hereNothing modalSize">
            <img className="hereNothing__sticker modalSize__image" src={emptyCart} alt=""/>
            <h3 className="hereNothing__title">Your cart is empty</h3>
            <p className="hereNothing__text modalSize__text">Add at least 1 pair of sneakers to your order</p>
            <button onClick={() => dispatch(toggleModal())} className="goBackBtn">
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