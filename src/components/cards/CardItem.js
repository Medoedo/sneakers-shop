import "./cardItem.scss"
import favouriteActive from "../../resources/images/card/favourite-active.svg"
import favourite from "../../resources/images/card/favourite.svg"
import plusIcon from "../../resources/images/card/plus.svg"
import addedIcon from "../../resources/images/card/added-icon.svg"

import { useDispatch } from "react-redux"
import { toggleCart, toggleFavorite } from "../cardList/sneakersSlice"

const CardItem = (props) => {
    const { id, name, price, src, favorite, inCart } = props;

    const dispatch = useDispatch();

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

    return (
        <div className="card">
            <button
                onClick={() => dispatch(toggleFavorite({ id: id, changes: { favorite: !favorite } }))}
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
                    onClick={() => dispatch(toggleCart({ id: id, changes: { inCart: !inCart } }))}
                    className={cartClass}
                >
                    <img src={cartIcon} alt="add to cart btn" />
                </button>
            </div>
        </div>
    )
}

export default CardItem;