import Header from "../header/Header";
import CardSkeleton from "../skeleton/CardSkeleton";

import arrowLeft from "../../resources/images/arrow-left.svg"

const ShopPage = () => {

    return (
        <>
            <Header/>
            <div className="subHeader js-start">
                <button className="card__cartBut">
                    <img src={arrowLeft} alt=""/>
                </button>
                <h2 className="ml-20 mb-3">My purchases</h2>
            </div>
            <div className="store">
                <CardSkeleton cards={3}/>
            </div>
        </>
    )
}

export default ShopPage;