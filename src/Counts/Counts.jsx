import React from 'react'
import './counts.css'
import Counts_img from '../assets/img/counts-img.jpg'
import CountsBox from './CountsBox'

export default function Counts() {

    const countsDatas = [
        { id: 1, icon: "smile", counter: 65, text: "مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم." },
        { id: 2, icon: "richtext", counter: 85, text: "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد" },
        { id: 3, icon: "clock", counter: 35, text: "سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد" },
        { id: 4, icon: "award", counter: 20, text: "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند" }
    ];

    return (
        <section className="counts">
            <div className="container">
                <div className="counts__wrapper">
                    <div className="counts__picture">
                        <img src={Counts_img} alt="Counts Image" className="counts__img" />
                    </div>

                    <div className="counts__body">
                        <h3 className="counts__title">شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                        <p className="counts__text">خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                        <div className="counts__boxes">
                            {countsDatas.map((countsData) => {
                                return <CountsBox icon_box={countsData.icon} counter={countsData.counter} text={countsData.text} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
