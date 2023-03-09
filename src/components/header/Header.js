import "./header.scss"

import basket from "../../resources/images/header/basket.svg"
import favorite from "../../resources/images/header/favorite.svg"
import userIcon from "../../resources/images/header/user.svg"
import icon from "../../resources/images/header/favicon.ico"

const Header = () => {

    return (
        <header className="header">
            <div className="header__body">
                <div className="header__logo">
                    <div className="header__icon">
                        <img src={icon} alt=""/>
                    </div>
                    <div className="header__text">
                        <h2>My Sneakers</h2>
                        <p>Shop of the best sneakers</p>
                    </div>
                </div>
                <div className="header__nav">
                    <div className="header__item basket">
                        <img src={basket} alt=""/>
                        <p>0$</p>
                    </div>
                    <div className="header__item">
                        <img src={favorite} alt=""/>
                    </div>
                    <div className="header__item">
                        <img src={userIcon} alt=""/>
                    </div>
                </div>
            </div>
            {/* <hr></hr> */}
        </header>
    )
}

export default Header;