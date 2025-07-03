import React from 'react'
import {getPageMetadata} from "@/lib/generateMetadata";
import {useTranslations} from "next-intl";
import {ContactForm} from "@/components/Homepage/ContactForm";


export async function generateMetadata({params}) {
    const { locale } = await params
    return getPageMetadata(locale, 'contact');
}

export default function Contact() {
    const messages = useTranslations('contact');

    return (
        <>
            <div className="subheader dark-overlay dark-overlay-2"
                 style={{backgroundImage:"url('/img/coming1.webp')"}}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1> {messages('pageTitle')}</h1>
                    </div>
                </div>
            </div>
            <div className="contact-wrapper">
                <div className="">
                    <ContactForm/>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.5983832958723!2d23.667265276465905!3d38.42764527428394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a11420f3dd4131%3A0x78c348f7f6353149!2sDino%20pizza%20Vasilikou!5e0!3m2!1sen!2sgr!4v1751215163405!5m2!1sen!2sgr"
                            width="80%"
                            height="100%"
                            style={{border: 0, margin: '0 auto', display: 'block'}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="section section-padding">
                        <div className="container">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-location"></i>
                                            <h5>{messages('findUs')} </h5>
                                            <a target="_blank"
                                               href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14a11420f3dd4131:0x78c348f7f6353149?sa=X&amp;ved=1t:8290&amp;ictx=111">
                                                <span>{messages('addressLabel')}</span> {messages('address')}</a>
                                            <a href="tel:2221055959"><span>{messages('phone1')} </span> 2221055959</a>
                                            <a href="tel:2221052609"><span>{messages('phone2')} </span>2221052609</a>
                                            <a href="tel:69788404210"> <span>{messages('mobile')} </span>69788404210</a>
                                            <a href="mailto:dinopizzavasilikou@gmail.com">
                                                <span> {messages('email')}</span> dinopizzavasilikou@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-online-booking"></i>
                                            <h5> {messages('workingHours')}</h5>
                                            <span>{messages('workingHoursText')} </span>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
