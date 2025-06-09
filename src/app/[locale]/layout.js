import "./globals.css";
import Script from 'next/script'
import React from "react";
import {MobileNavigation} from "@/components/Navigation/MobileNavigation";
import {Navigation} from "@/components/Navigation/Navigation";
import LanguageChanger from "@/components/LanguageChanger/LanguageChanger";
import Footer from "@/components/Footer/Footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';


export const metadata = {
    title: "Dino Pizza",
    description: "Dino Pizza - The best pizza in Vasilikou",
};

export default async function  RootLayout({children,params}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <html lang={locale}>
        <head>
            <link rel="stylesheet" href="/css/style.css"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.webp"/>
            <link rel="icon" type="image/png" href="/img/logo.webp" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/img/logo.webp"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/img/logo.webp"/>
        </head>
        <body >
        <NextIntlClientProvider>
            <MobileNavigation/>
            <Navigation/>
            <LanguageChanger/>
            {children}
        </NextIntlClientProvider>
        <Footer/>
        <Script src="/js/plugins/jquery-3.4.1.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/plugins/popper.min.js"></Script>
        <Script src="/js/plugins/waypoint.js"></Script>
        <Script src="/js/plugins/bootstrap.min.js"></Script>
        <Script src="/js/plugins/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/plugins/jquery.slimScroll.min.js"></Script>
        <Script src="/js/plugins/imagesloaded.min.js"></Script>
        <Script src="/js/plugins/jquery.steps.min.js"></Script>
        <Script src="/js/plugins/jquery.countdown.min.js"></Script>
        <Script src="/js/plugins/isotope.pkgd.min.js"></Script>
        <Script src="/js/plugins/slick.min.js"></Script>
        <Script src="/js/main.js"></Script>
        </body>
        </html>
    );
}
