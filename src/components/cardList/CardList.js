import CardItem from "../cards/CardItem";
import CardSkeleton from "../skeleton/CardSkeleton";
import "./cardList.scss"

const CardList = () => {

    return (
        <div className="store">
            <CardSkeleton cards={8}/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
    )
}

export default CardList;