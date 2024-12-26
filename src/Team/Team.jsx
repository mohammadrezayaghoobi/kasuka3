import React from 'react'
import TeamBox from './TeamBox.jsx'
import './team.css'

import teamImg1 from '../assets/img/team/team-1.jpg'
import teamImg2 from '../assets/img/team/team-2.jpg'
import teamImg3 from '../assets/img/team/team-3.jpg'
import teamImg4 from '../assets/img/team/team-4.jpg'

export default function Team() {

    const teamImgs = [
        {id: 1, img: teamImg1, name: "والتر وایت", rank: "مدیر ارشد اجرایی"},
        {id: 2, img: teamImg2, name: "سارا جونسون", rank: "مدیر تولید"},
        {id: 3, img: teamImg3, name: "ویلیام اندرسون", rank: "CTO"},
        {id: 4, img: teamImg4, name: "آماندا جپسون", rank: "حسابدار"}
    ]

    return (
        <div className="Team">
            <div className="container">
                <div className="team__top">
                    <h6 className="team__top-text">تیم</h6>
                    <h3 className="team__top-title">تیم مارا بررسی کنید</h3>
                </div>

                <div className="team__bottom">
                    {teamImgs.map((teamImg) => <TeamBox source={teamImg.img} names={teamImg.name} ranks={teamImg.rank} />)}
                </div>
            </div>
        </div>
    )
}
