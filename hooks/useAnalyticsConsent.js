// hooks/useAnalyticsConsent.js
import { useEffect } from 'react';

export const useAnalyticsConsent = (consent) => {
    useEffect(() => {
        if (consent) {
            // Load GA script
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-${process.env.GOOGLE_ANALYTIC_CODE}`;
            script.async = true;
            document.head.appendChild(script);

            // Init GA
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', `G-${process.env.GOOGLE_ANALYTIC_CODE}`);
        }
    }, [consent]);
};
