import Header from "../header/Header";

import "./mainPage.scss"

const MainPage = () => {

    return (
        <>
            <Header/>
            <div className="subHeader">
                <h2 className="subHeader__title">All sneakers</h2>
                <input placeholder="Search.." className="search_panel"></input>
            </div>

        </>
    )
}

export default MainPage;