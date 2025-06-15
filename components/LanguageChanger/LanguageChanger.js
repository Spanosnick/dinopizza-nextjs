'use client'
import React from 'react';
import {useRouter, usePathname,Link} from '@/src/i18n/navigation';
import {useLocale} from 'next-intl';

const locales = ['en', 'el'];


function LanguageChanger() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    return (
        <div id="language-container">
            <div className="d-flex justify-content-between languageBtn " data-bs-toggle="collapse"
                 data-bs-target="#languageCollapse" aria-expanded="false" aria-controls="languageCollapse">
                <div><span className={`flag-icon flag-icon-${currentLocale}`}></span>
                </div>
                <div></div>
            </div>
            <div className="collapse" id="languageCollapse">

                {locales.map((locale) => {
                    return (
                        <Link
                            key={locale}
                            href={pathname}
                            locale={locale}
                        >
                              <span className="" > <span
                                  className={`flag-icon flag-icon-${locale} mx-1`}></span>
            </span>
                        </Link>
                    );
                })}
        </div>
</div>
);
}

export default LanguageChanger;
