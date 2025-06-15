import Image from "next/image";
import Link from "next/link";
import productsData from '@/data/products.json';
import {useLocale, useTranslations} from "next-intl";
import renderMenu from "@/components/Navigation/Menu";


export function Navigation() {
    const locale = useLocale();
    const messages = useTranslations('Navigation');

    return (
        <header className="main-header header-1 ">
            <div className="top-header">
                <div className="container">
                    <div className="top-header-inner">

                        <div className="top-header-contacts">
                            <ul className="top-header-nav">
                                <li><Link className="p-0 mx-1" href="tel:+302221055959"><i
                                    className="fas fa-phone mr-2"></i> 2221055959
                                </Link>
                                </li>
                                <li><Link className=" p-0 mx-1" href="tel:+306978404210"><i
                                    className="fas fa-phone mr-2"></i> 6978404210</Link>
                                </li>
                                <li className="locationMarker"><Link className=" p-0 mx-1"
                                                                     href="https://maps.app.goo.gl/s7GeKyEpES415HJP8"
                                                                     target=""><i
                                    className="fas fa-map-marker"></i> Αγίου
                                    Γεωργίου 24, Βασιλικό 340 02 </Link>
                                </li>
                            </ul>
                        </div>

                        <ul className="top-header-nav header-cta">
                            <li><Link href='/yourpizza'> Φτιάξε τη δική σου πίτσα!</Link></li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="container">
                <nav className="navbar">
                    <Link className="navbar-brand " href=""> <Image src={`/img/logo.webp`} width={200} height={300}
                                                                    alt="logo"/> </Link>
                    <ul className="navbar-nav ">
                        <li className="menu-item">
                            <Link href="/"> {messages('home')} </Link>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <Link href="/menu"> {messages('menu')}</Link>
                            <ul className="submenu">
                                {productsData.categories.map(category => renderMenu(category,locale))}
                            </ul>
                        </li>

                        <li className="menu-item">
                            <Link href="about"> {messages('aboutUs')} </Link>
                        </li>

                        <li className="menu-item  ">
                            <Link href="blog">  {messages('blog')}</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="contact">  {messages('contact')}</Link>
                        </li>
                    </ul>
                    <div className="header-controls">

                        <div className="aside-toggler aside-trigger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    )
}
