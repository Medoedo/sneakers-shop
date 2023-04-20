import Header from "../../header/Header";
import CardList from "../../cardList/CardList";
import Slider from "react-slick";

import search from "../../../resources/images/search-icon.svg"
import leftArrow from "../../../resources/images/arrow-left.svg"
import slideImg from "../../../resources/images/slider/Slide.png"

import "./slick.scss"; 
import "./slick-theme.scss";
import "./mainPage.scss"

const MainPage = () => {

    return ( 
        <>
            <Header/>
            <MainSlider/>
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

const LeftArrow = ({onClick, className}) => {
    return (
        <div
            className={className}
            onClick={onClick}>
            <img src={leftArrow} alt="arrow"/>
        </div>
    )
}

const RigthArrow = ({onClick, className}) => {
    return (
        <div
            className={className}
            onClick={onClick}>
                <img src={leftArrow} alt="arrow" style={{transform: "translate(-50%, -50%) rotate(180deg)"}}/>
        </div>
    )
}

const MainSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RigthArrow />,
        prevArrow: <LeftArrow />
    };

    return (
        <div >
            <Slider {...settings}>
                <div className="slide">
                    <img src={slideImg} alt="slide"/>
                </div>
                <div className="slide">
                    <img src={slideImg} alt="slide"/>
                </div>
                <div className="slide">
                    <img src={slideImg} alt="slide"/>
                </div>
            </Slider>
        </div>
    )
}

export default MainPage;