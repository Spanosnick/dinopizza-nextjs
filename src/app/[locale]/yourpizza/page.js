import React from 'react'
import Image from "next/image";
import {getPageMetadata} from "@/lib/generateMetadata";
import {useTranslations} from "next-intl";
import {YourPizzaSelect} from "@/components/YourPizza/YourPizzaSelect";


export async function generateMetadata({params}) {
    const {locale} = await params
    return getPageMetadata(locale, 'yourpizza');
}

export default function YourPizza() {
    const messages = useTranslations('yourpizza');


    return (
        <>
            <div className="subheader dark-overlay dark-overlay-2"
                 style={{backgroundImage: "url('/img/subheader.webp)"}}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1> {messages('title')} </h1>
                    </div>
                </div>
            </div>
            <div className="section product-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">

                            <div className="product-thumb">
                                <Image src="/img/prods/2.png" alt={messages('metaDescription')} height={200} width={400}/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="product-content">
                                <h2 className="title"> {messages('pageTitle2')}</h2>
                                <YourPizzaSelect/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
