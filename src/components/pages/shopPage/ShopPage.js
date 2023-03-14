import { useEffect } from "react";
import { selectAll, sneakersFetch } from "../../cardList/sneakersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {store} from "../../../store/store"

import CardItem from "../../cards/CardItem";
import Header from "../../header/Header";

import arrowLeft from "../../../resources/images/arrow-left.svg"
import smile from "../../../resources/images/stiker-for-fav.png"
import arrowForGoBack from "../../../resources/images/arrow-for-goBack.svg"

import "./shopPage.scss"

const ShopPage = () => {
    const items = selectAll(store.getState());
    const {sneakersLoadingStatus} = useSelector(state => state.sneakers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sneakersFetch());
    // eslint-disable-next-line
    }, []);

    const renderCards = (data) => {
        if (data.length === 0) return data

        // eslint-disable-next-line
        const cards = data.map(({ id, ...props }) => {
            if (props.inCart === true) {
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
                items.length === 0 && sneakersLoadingStatus === "idle" ?
                    <div className="hereNothing">
                        <img className="hereNothing__sticker" src={smile} alt="" />
                        <h3 className="hereNothing__title">You have no orders</h3>
                        <p className="hereNothing__text">Place at least 1 order</p>
                        <Link to="/" className="goBackBtn">
                            <img src={arrowForGoBack} alt="" />
                            Go to shop
                        </Link>
                    </div>
                    :
                    <>
                        <div className="subHeader js-start">
                            <button className="card__cartBut">
                                <img src={arrowLeft} alt="" />
                            </button>
                            <h2 className="ml-20 mb-3">My purchases</h2>
                        </div>
                        <div className="store">
                            {elements}
                        </div>
                    </>
            }
        </>
    )
}

export default ShopPage;