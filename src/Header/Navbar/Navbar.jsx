import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#" className="navbar-link active">خانه</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">درباره ی ما</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">خدمات</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">نمونه کارها</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">تیم</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">لیست کشویی</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">تماس با ما</a></li>
            </ul>
        </nav>
    )
}
