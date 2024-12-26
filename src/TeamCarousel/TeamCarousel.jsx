import React from 'react'
import './teamCarousel.css'
import teamCarouselImg from '../assets/img/testimonials/testimonials-1.jpg'

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function TeamCarousel(props) {

    return (
        <div className="team-carousel">
            <div className="container">
                <div className="team-carousel__wrapper">
                    <div className="team-carousel__person">
                        <div className="team-carousel__profile">
                            <img src={teamCarouselImg} alt="The picture of team" className="team-carousel__img" />
                        </div>
                        <h4 className="team-carousel__name">{props.teamName}</h4>
                        <h6 className="team-carousel__rank">{props.rank}</h6>
                    </div>

                    <div className="team-carousel__message">
                        <p className="team-carousel__text">
                            <BiSolidQuoteAltLeft />
                            {props.text}
                            <BiSolidQuoteAltRight />
                        </p>
                    </div>

                    <div className="team-carousel__circles">
                        <div className="team-carousel__circle"></div>
                        <div className="team-carousel__circle"></div>
                        <div className="team-carousel__circle active"></div>
                        <div className="team-carousel__circle"></div>
                        <div className="team-carousel__circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

TeamCarousel.defaultProps = {
    picture: {teamCarouselImg},
    teamName: "ساول گودمن",
    rank: "مدیرعامل",
    text: "پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد."
};

export default TeamCarousel
