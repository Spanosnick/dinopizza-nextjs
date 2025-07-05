"use client";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import Link from "next/link";
import Cookies from 'js-cookie';

export function HomepagePopUp() {
    const [openClass, setOpenClass] = useState('');
    const messages = useTranslations('introModal');

    function togglePopup() {
        Cookies.set('promoModalSeen', 'true', { expires: 30, sameSite: 'lax', path: '/' });
        if (openClass === 'show') {
            setOpenClass('hide');
        } else {
            setOpenClass('show');
        }
    }

    useEffect(() => {
        if (!Cookies.get('promoModalSeen')) setOpenClass('show');

    }, []);


    return (
        <div id="promoModal" className={`modal-container  ${openClass}`}>
            <div className="modal">
                <div className="modal__media"
                     style={{backgroundImage: 'url(/img/og.webp)'}}>
                </div>

                <div className="modal__content">
                    <h2>{messages('title')} 🍕</h2>
                    <p>  {messages('text1')} </p>
                    <p>   {messages('text2')}</p>
                    <Link href="/menu#pizzas"  onClick={togglePopup} className="btn-custom primary">  {messages('cta')}</Link>
                </div>
            </div>
        </div>

    )
}
