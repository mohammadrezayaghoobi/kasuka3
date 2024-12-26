import React from 'react'
import logo from '../assets/img/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn} from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";

export default function FooterTop() {
    return (
        <div className="footer__top">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__info">
                        <div className="footer__logo">
                            <img src={logo} alt="Kasuka Logo" className="footer__logo-img" />
                            <h3 className="footer__title">KASUKA</h3>
                        </div>
                        <div className="footer__address">
                            <span className="footer__address-text">تهران خیابان آزادی</span>
                            <span className="footer__address-text">تلفن: 01234567895</span>
                            <span className="footer__address-text">ایمیل: info@example.com</span>
                        </div>
                        <div className="footer__socials">
                            <div className="footer__social-box"><a className="footer__social-link" href="#" ><FaTwitter /></a></div>
                            <div className="footer__social-box"><a className="footer__social-link" href="#" ><FaFacebookF /></a></div>
                            <div className="footer__social-box"><a className="footer__social-link" href="#" ><FaInstagram /></a></div>
                            <div className="footer__social-box"><a className="footer__social-link" href="#" ><FaSkype /></a></div>
                            <div className="footer__social-box"><a className="footer__social-link" href="#" ><FaLinkedinIn /></a></div>
                        </div>
                    </div>

                    <div className="footer__links">
                        <div className="footer__link">
                            <h5 className="footer__link-title">لینک های مفید</h5>
                            <ul className="footer__link-list">
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">خانه</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">درباره ی ما</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">خدمات</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">شرایط استفاده از خدمات</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">سیاست حفظ حریم خصوصی</a></li>
                            </ul>
                        </div>
                        <div className="footer__link">
                            <h5 className="footer__link-title">خدمات ما</h5>
                            <ul className="footer__link-list">
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">طراحی وبسایت</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">توسعه وب</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">مدیریت تولید</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">بازار یابی</a></li>
                                <li className="footer__link-item"><FaAngleLeft /><a className="footer__link-item-link" href="#">طراحی گرافیک</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__email">
                        <h3 className="footer__email-title">خبرنامه ما</h3>
                        <p className="footer__email-text">با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                        <div className="footer__email-box">
                            <input type="email" className="footer__email-input" />
                            <button className="footer__email-bottun">دنبال کردن</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
