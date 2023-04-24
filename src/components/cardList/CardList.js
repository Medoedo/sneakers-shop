import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sneakersFetch, selectAll } from "./sneakersSlice";

import { store } from "../../store/store"

import CardItem from "../cards/CardItem";
import CardSkeleton from "../skeleton/CardSkeleton";
import "./cardList.scss"

const CardList = () => {
    const items = selectAll(store.getState())
    const { sneakersLoadingStatus, searchTerm } = useSelector(state => state.sneakers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sneakersFetch());

    }, []);

    const renderCards = (data) => {
        console.log(data)
        if (data.length === 0) return data

        return data.map(({ id, ...props }) => {
            return <CardItem
                key={id}
                id={id}
                {...props}
            />
        })
    }

    const filterData = (data) => {
        if(searchTerm.length === 0) return data;
        return data.filter(item => item.name.indexOf(searchTerm) > -1)
    }

    const elements = renderCards(filterData(items))

    return (
        <div className="store">
            {sneakersLoadingStatus === "loading" ? <CardSkeleton cards={4} /> : null}
            {elements}
        </div>
    )
}

export default CardList;