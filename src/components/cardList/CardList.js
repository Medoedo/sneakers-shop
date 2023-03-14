import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sneakersFetch, selectAll } from "./sneakersSlice";

import {store} from "../../store/store"

import CardItem from "../cards/CardItem";
import CardSkeleton from "../skeleton/CardSkeleton";
import "./cardList.scss"

const CardList = () => {
    const items = selectAll(store.getState())
    const {sneakersLoadingStatus} = useSelector(state => state.sneakers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sneakersFetch());
    
    }, []);

    const renderCards = (data) => {
        if(data.length === 0) return data

        return data.map(({ id, ...props }) => {
            return <CardItem
                key={id}
                id={id}
                {...props}

                />
        })
    }

    const elements = renderCards(items)

    return (
        <div className="store">
            {sneakersLoadingStatus === "loading" ? <CardSkeleton cards={4}/> : null}
            {elements}  
        </div>
    )
}

export default CardList;