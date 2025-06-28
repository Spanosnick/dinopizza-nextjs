import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {getPageMetadata} from "@/lib/generateMetadata";
import {useTranslations} from "next-intl";
import {SubscriptionForm} from "@/components/About/SubscriptionForm";


export async function generateMetadata({params}) {
    const { locale } = await params
    return getPageMetadata(locale, 'about');
}

export default function About() {
    const messages = useTranslations('about');

    return (
        <>
            <div
                className="subheader dark-overlay dark-overlay-2"
                style={{backgroundImage: "url('/img/subheader.webp')"}}
            >
                <div className="container">
                    <div className="subheader-inner">
                        <h1> {messages('title')}</h1>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <Image src={`/img/auth.webp`} width={700} height={500} alt="Dino Pizza"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h2 className="title"> {messages('hero.title')}</h2>
                                <h5 className="custom-primary"> {messages('hero.subtitle')}</h5>
                                <p className="subtitle">
                                    {messages('hero.firstText')}
                                </p>
                                <p className="subtitle"> {messages('hero.secondText')}</p>
                                <p className="subtitle">
                                    {messages('hero.thirdText')}
                                </p>

                                <Link href="/menu" className="btn-custom">
                                    {messages('hero.button')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SubscriptionForm/>
        </>
    )
}
