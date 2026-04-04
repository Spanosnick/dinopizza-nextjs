import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {Loading} from "@/components/Commons/Loading";
import {Suspense} from "react";

export function HomepageCategories() {
    const messages = useTranslations('Homepage');
    const locale = useLocale();
    return (
        <Suspense fallback={<Loading />}>
        <div className="ct-categories">
            <div className="ct-category">
                <div className="ct-category-bg"  style={{backgroundImage: "url('/img/categories-lg/4.webp')"}}></div>
                <div className="ct-category-content">
                    <div className="ct-category-content-inner">

                        <div className="section-title-wrap section-header">
                            <h5 className="custom-primary"> {messages('pizzaMenu.title')}</h5>
                            <h2 className="title">  {messages('pizzaMenu.header')}</h2>
                            <p className="subtitle"> {messages('pizzaMenu.text')}</p>
                        </div>


                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pizza/dino-special`}>{messages('pizzaMenu.items.dinoSpecial.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pizzaMenu.items.dinoSpecial.description')} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pizza/ala-krem`}>{messages('pizzaMenu.items.alaCream.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p>{messages('pizzaMenu.items.alaCream.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pizza/chicken`}>  {messages('pizzaMenu.items.withChicken.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pizzaMenu.items.withChicken.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pizza/cold-cut`}>  {messages('pizzaMenu.items.withColdCuts.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p>{messages('pizzaMenu.items.withColdCuts.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pizza/barbeque`}> {messages('pizzaMenu.items.barbeque.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pizzaMenu.items.barbeque.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pizza/chicken-barbeque`}>  {messages('pizzaMenu.items.chickenBarbeque.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pizzaMenu.items.chickenBarbeque.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 text-center">
                                <Link href="menu#pizzas" className="btn-custom"> {messages('pizzaMenu.seeAll')}</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="ct-category">
                <div className="ct-category-content">
                    <div className="ct-category-content-inner">

                        <div className="section-title-wrap section-header">
                            <h5 className="custom-primary">{messages('pastaMenu.title')}</h5>
                            <h2 className="title">  {messages('pastaMenu.header')}</h2>
                            <p className="subtitle">{messages('pastaMenu.text')} </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pasta/napoliten`}> {messages('pastaMenu.items.napoliten.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pastaMenu.items.napoliten.description')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pasta/carbonara`}> {messages('pastaMenu.items.carbonara.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pastaMenu.items.carbonara.description')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pasta/ala-krem`}> {messages('pastaMenu.items.alaCream.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pastaMenu.items.alaCream.description')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pasta/special`}> {messages('pastaMenu.items.special.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pastaMenu.items.special.description')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pasta/four-cheese`}> {messages('pastaMenu.items.with4Cheeses.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pastaMenu.items.with4Cheeses.description')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <Link href={`/${locale}/menu/pasta/bolonez`}> {messages('pastaMenu.items.bolonez.name')}</Link>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p> {messages('pastaMenu.items.bolonez.description')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 text-center">
                                <Link href="menu#pasta" className="btn-custom"> {messages('pastaMenu.seeAll')} </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ct-category-bg" style={{backgroundImage: "url('/img/categories-lg/5.webp')"}}></div>


            </div>
        </div>
        </Suspense>
    )
}
