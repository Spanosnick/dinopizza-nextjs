'use client'
import React from 'react';
import {useRouter, usePathname,Link} from '@/src/i18n/navigation';
import {useLocale} from 'next-intl';

const locales = ['en', 'el'];

function changeLanguage(language, path) {
    console.log(`Changing language to ${language} and path to ${path}`);
}

function LanguageChanger() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    return (
        <div id="language-container">
            <div className="d-flex justify-content-between languageBtn " data-bs-toggle="collapse"
                 data-bs-target="#languageCollapse" aria-expanded="false" aria-controls="languageCollapse">
                <div><span className="flag-icon flag-icon-grc"></span>
                </div>
                <div></div>
            </div>
            <div className="collapse" id="languageCollapse">
                <span className="d-none" onClick={() => changeLanguage('greek', '')}> <span
                    className="flag-icon flag-icon-grc mx-1"></span>
            </span>
            <span className="d-none" onClick={() => changeLanguage('english', '')}> <span
                className="flag-icon flag-icon-usa mx-1"></span> </span>

                {locales.map((locale) => {
                    const isActive = locale === currentLocale;

                    return (
                        <Link
                            key={locale}
                            href={pathname}
                            locale={locale}
                            className={`px-3 py-1 rounded ${
                                isActive ? 'bg-black text-white' : 'bg-gray-200 text-black'
                            }`}
                        >
                            {locale.toUpperCase()}
                        </Link>
                    );
                })}
        </div>
</div>
);
}

export default LanguageChanger;
