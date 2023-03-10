import "./cardItem.scss"
import favorite from "../../resources/images/card/favorite-active.svg"

const CardItem = () => {

    return (
        <div className="card">
            <div className="card__favBut">
                <img src={favorite} alt=""/>
            </div>
            <img className="card__image" alt=""/>
            <h2 className="card__title">Title</h2>
            <div className="card__priceBlock">
                <div>
                    <span>Price</span>
                    <p>30$</p>
                </div>
                <button className="card__cartBut"></button>
            </div>
        </div>
    )
}

export default CardItem;