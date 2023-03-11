import "./cardItem.scss"
import favouriteActive from "../../resources/images/card/favourite-active.svg"
import favourite from "../../resources/images/card/favourite.svg"
import sneakers from "../../resources/images/card/sneakers.svg"
import plusIcon from "../../resources/images/card/plus.svg"

const CardItem = () => {

    return (
        <div className="card">
            {/* card__favBut-active */}
            <div className="card__favBut ">
                <img src={favourite} alt=""/>
            </div>
            <img src={sneakers} className="card__image" alt=""/>
            <p className="card__title">Nike Blazer Mid Suede Men's Sneakers</p>
            <div className="card__priceBlock">
                <div>
                    <span>Price:</span>
                    <p>30$</p>
                </div>
                <button className="card__cartBut">
                    <img src={plusIcon} alt="add to cart btn"/>
                </button>
            </div>
        </div>
    )
}

export default CardItem;