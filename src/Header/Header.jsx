import React, { useState } from 'react'
import './header.css'
import Navbar from './Navbar/Navbar.jsx'
import Box from './Box/Box.jsx'
import logoImage from '../assets/img/logo.png'
import picture1 from './Box/picture1.svg'
import picture2 from './Box/picture2.svg'

import { FaBars } from 'react-icons/fa'

export default function Header() {

    const [listItems, setListItems] = useState([
        { id: 1, picture: picture1, text: "متن نمایشی" },
        { id: 2, picture: picture2, text: "نمودار کیفی" },
        { id: 3, picture: picture1, text: "نمونه کارها" },
        { id: 4, picture: picture1, text: "عملکرد های پایانی" },
        { id: 5, picture: picture2, text: "اطلاعات ذخیره شده" },
    ])


    return (
        <div className="header-container">
            <header className="header-top">
                <div className="container">
                    <div className="header-top__wrapper">
                    <div className="right">
                        <a className="header-logo" href="#">
                            <img src={logoImage} alt="Website Logo" className="header-logo__img" />
                            <span className="header-top__name">KASUKA</span>
                        </a>
                    </div>

                    <div className="center">
                        <Navbar />
                    </div>

                    <div className="left">
                        <a href="#about" id="about">شروع</a>
                        <div className="menu-icon"><FaBars /></div>
                    </div>
                    </div>
                </div>
            </header>

            <div className="header-text">
                <h1 className="text__title">راه حل های قدرتمند دیجیتال با</h1>
                <span className="text__title-name">Kasuka</span>
                <h2 className="text-title-detail">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
            </div>

            <div className="header-boxs">
                {listItems.map((item) => {
                    return <Box image={item.picture} text={item.text} />
                })}
            </div>
        </div>
    )
}
