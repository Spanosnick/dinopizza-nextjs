'use client'
import React, {useEffect} from 'react';
import {usePathname, Link} from '@/src/i18n/navigation';
import {useLocale} from 'next-intl';
import {getLocalizedCategorySlug, getLocalizedProductSlug} from "@/lib/dataHelpers";

const locales = ['en', 'el'];


function LanguageChanger() {
    const pathname = usePathname();
    const currentLocale = useLocale();
    const parts = pathname.split('/').filter(Boolean); // ['en', 'menu', 'pizzas', 'ala-creme']

    const [section, categorySlug, productSlug] = parts;

    useEffect(() => {
        // go to the up with scroll
        window.scrollTo(0, 0);
    }, [parts]);

    return (
        <div id="language-container">
            <div
                className="d-flex justify-content-between languageBtn"
                data-bs-toggle="collapse"
                data-bs-target="#languageCollapse"
                aria-expanded="false"
                aria-controls="languageCollapse"
            >
                <div>
                    <span className={`flag-icon flag-icon-${currentLocale}`}></span>
                </div>
                <div></div>
            </div>
            <div className="collapse" id="languageCollapse">
                {locales.map((locale) => {
                    if (locale === currentLocale) return null;

                    let href = `/`;

                    if (section === 'menu' && categorySlug) {
                        const localizedCategory = getLocalizedCategorySlug(categorySlug, currentLocale, locale);
                        href += `/menu/${localizedCategory}`;


                        if (productSlug) {
                            const localizedProduct = getLocalizedProductSlug(categorySlug, productSlug, currentLocale, locale);
                            href += `/${localizedProduct}`;
                        }
                    } else {
                        if (section){
                            href = `/${section}`;
                        }

                    }


                    return (
                        <Link key={locale} href={href} locale={locale} scroll>
              <span className="">
                <span className={`flag-icon flag-icon-${locale} mx-1`}></span>
              </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default LanguageChanger;
