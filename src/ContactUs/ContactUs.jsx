import React from 'react'
import ContactUsBox from './ContactUsBox.jsx'
import './contactUs.css'

export default function ContactUs() {

    return (
        <div className="contactUs">
            <div className="container">
                <div className="contactUs__head">
                    <h6 className="contactUs__head-text">تماس با ما</h6>
                    <h3 className="contactUs__head-title">با ما تماس بگیرید</h3>
                </div>

                <div className="contactUs__form">
                    <div className="contactUs__boxes">
                        <ContactUsBox icon="geo" title="مکان:" text="تهران خیابان آزادی" />
                        <ContactUsBox icon="envelope" title="ایمیل:" text="info@example.com" />
                        <ContactUsBox icon="phone" title="شماره تماس:" text="0123467889" />
                    </div>
                    <form method="POST" className="contactUs__formes">
                        <div className="contactUs__row-1">
                            <input type="text" className="inp inp__name" placeholder="نام" name="name" required/>
                            <input type="email" className="inp inp__email" placeholder="ایمیل" name="email" required/>
                        </div>

                            <input type="text" className="inp inp__subject" placeholder="عنوان" name="subject" required/>
                            <textarea name="message" className="contactUs__message" id="messageForm1" placeholder="پیام" rows="5" required></textarea>

                            <input type="submit" className="inp__submit" name="sub" value="ارسال پیام"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
