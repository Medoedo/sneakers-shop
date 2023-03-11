import Header from "../header/Header";
import CardList from "../cardList/CardList";
import search from "../../resources/images/search-icon.svg"

import "./mainPage.scss"

const MainPage = () => {

    return (
        <>
            <Header/>
            <div className="subHeader">
                <h2 className="subHeader__title">All sneakers</h2>
                <div className="search_panel">
                    <img src={search} alt=""/>
                    <input placeholder="Search..."/>
                </div>
            </div>
            <CardList/>
        </>
    )
}

export default MainPage;