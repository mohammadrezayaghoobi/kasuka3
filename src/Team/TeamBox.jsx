import React from 'react'
import './team.css'

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function TeamBox(props) {
    return (
        <div className="team-box">
            <div className="team-box__top">
                <div className="team-box__socialBox">
                    <a href="#" className="team-box__social"><FaTwitter /></a>
                    <a href="#" className="team-box__social"><FaFacebook /></a>
                    <a href="#" className="team-box__social"><FaInstagram /></a>
                    <a href="#" className="team-box__social"><FaLinkedin /></a>
                </div>
                <img src={props.source} alt="Team Pictures" className="team-box__img" />
            </div>
            <div className="team-box__bottom">
                <h4 className="team-box__name">{props.names}</h4>
                <h6 className="team-box__rank">{props.ranks}</h6>
            </div>
        </div>
    )
}
