import { useEffect } from "react";
import { Link } from "react-router-dom";
import { selectAll, sneakersFetch } from "../cardList/sneakersSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/store"

import Header from "../header/Header"
import CardItem from "../cards/CardItem";

import arrowLeft from "../../resources/images/arrow-left.svg"
import arrowForGoBack from "../../resources/images/arrow-for-goBack.svg"
import smile from "../../resources/images/sticker-for-cart.png"

const FavouriteItemsPage = () => {
    const items = selectAll(store.getState());
    const {sneakersLoadingStatus} = useSelector(state => state.sneakers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sneakersFetch());
    
    }, []);

    const renderCards = (data) => {
        if (data.length === 0) return data

        const cards = data.map(({ id, ...props }) => {
            if (props.favorite === true) {
                return <CardItem
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
        <>
            <Header />
            {
                elements.length === 0 && sneakersLoadingStatus === "idle" ?
                    <div className="hereNothing">
                        <img className="hereNothing__sticker" src={smile} alt="" />
                        <h3 className="hereNothing__title">You have no favorite products</h3>
                        <p className="hereNothing__text">You have not selected your favorite products</p>
                        <Link to="/" className="goBackBtn">
                            <img src={arrowForGoBack} alt="" />
                            Go to shop
                        </Link>
                    </div>
                    :
                    <>
                        <div className="subHeader js-start">
                            <Link to="/" className="card__cartBut">
                                <img src={arrowLeft} alt="" />
                            </Link>
                            <h2 className="ml-20 mb-3">My favorites</h2>
                        </div>
                        <div className="store">
                            {elements}
                        </div>
                    </>
            }
        </>
    )
}

export default FavouriteItemsPage