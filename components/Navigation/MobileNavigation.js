import {Fragment} from "react";
import Link from "next/link";
import productsData from "@/data/products.json";
import renderMenu from "@/components/Navigation/Menu";
import {useLocale, useTranslations} from "next-intl";

export function MobileNavigation() {
    const locale = useLocale();
    const messages = useTranslations('Navigation');
    return (
        <Fragment>
            <aside className="main-aside">
                <div className="aside-scroll">
                    <ul>
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

                </div>
                <div className="aside-overlay aside-trigger"></div>
            </aside>
        </Fragment>
)
}
