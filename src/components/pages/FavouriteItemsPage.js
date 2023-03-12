import Header from "../header/Header"
import CardSkeleton from "../skeleton/CardSkeleton";
import { Link } from "react-router-dom";

import arrowLeft from "../../resources/images/arrow-left.svg"
import arrowForGoBack from "../../resources/images/arrow-for-goBack.svg"
import smile from "../../resources/images/sticker-for-cart.png"

const FavouriteItemsPage = () => {
    const items = [];

    return (
        <>
            <Header/>
            {
                items.length === 0 ? 
                <div className="hereNothing">
                    <img className="hereNothing__sticker" src={smile} alt=""/>
                    <h3 className="hereNothing__title">You have no orders</h3>
                    <p className="hereNothing__text">Place at least 1 order</p>
                    <Link to="/" className="goBackBtn">
                        <img src={arrowForGoBack} alt=""/>
                        Go to shop
                    </Link>
                </div>
                :
                <>
                    <div className="subHeader js-start">
                        <button className="card__cartBut">
                            <img src={arrowLeft} alt=""/>
                        </button>
                        <h2 className="ml-20 mb-3">My favorites</h2>
                    </div>
                    <div className="store">
                        <CardSkeleton cards={3}/>
                    </div>
                </>
            }

            
        </>
    )
}

export default FavouriteItemsPage