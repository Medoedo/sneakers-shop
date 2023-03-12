import { useState } from "react"

import "./cardItem.scss"
import favouriteActive from "../../resources/images/card/favourite-active.svg"
import favourite from "../../resources/images/card/favourite.svg"
import sneakers from "../../resources/images/card/sneakers.svg"
import plusIcon from "../../resources/images/card/plus.svg"
import addedIcon from "../../resources/images/card/added-icon.svg"

const CardItem = () => {
    const [fav, setFav] = useState(false);
    const [cart, setCart] = useState(false);


    let favoriteClass = "card__favBut";
    let favoriteIcon = favourite;

    let cartClass = "card__cartBut"
    let cartIcon = plusIcon;

    if(fav) {
        favoriteClass += " card__favBut-active";
        favoriteIcon = favouriteActive;
    } 

    if(cart) {
        cartClass += " card__cartBut-active";
        cartIcon = addedIcon;
    } 

    const onToggleFav = () => {
        setFav(el => !el)
    }

    const onToggleCart = () => {
        setCart(el => !el)
    }

    return (
        <div className="card">
            <button onClick={() => onToggleFav()} className={favoriteClass}>
                <img src={favoriteIcon} alt=""/>
            </button>
            <img src={sneakers} className="card__image" alt=""/>
            <p className="card__title">Nike Blazer Mid Suede Men's Sneakers</p>
            <div className="card__priceBlock">
                <div>
                    <span>Price:</span>
                    <p>30$</p>
                </div>
                <button onClick={() => onToggleCart()} className={cartClass}>
                    <img src={cartIcon} alt="add to cart btn"/>
                </button>
            </div>
        </div>
    )
}

export default CardItem;