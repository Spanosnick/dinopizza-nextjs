'use client'
import CookieConsent from 'react-cookie-consent';
import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import {useTranslations} from "next-intl";


export const CookieConsentWrapper = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const messages = useTranslations('cookies');

    useEffect(() => {
        const existingConsent = localStorage.getItem('gaConsent');
        if (existingConsent === 'true') {
            setConsentGiven(true);
        }
    }, []);

    return (
        <>
        {consentGiven && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_CODE} />}
        <CookieConsent
            location="bottom"
            buttonText={messages('acceptAll')}
            declineButtonText={messages('rejectAll')}
            cookieName="dinoPizzaConsent"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#fff", fontSize: "13px", backgroundColor: "#ff5722" }}
            onAccept={() => {
                localStorage.setItem('gaConsent', 'true');
                setConsentGiven(true);
            }}
            enableDeclineButton
            onDecline={() => {
                setConsentGiven(false);
            }}
            hideOnAccept
            ariaAcceptLabel={messages('acceptAll')}
            ariaDeclineLabel={messages('rejectAll')}
        >
            {messages('description')}
        </CookieConsent>
        </>
    );
};
