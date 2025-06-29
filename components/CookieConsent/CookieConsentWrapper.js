'use client'
import CookieConsent from 'react-cookie-consent';
import { useEffect, useState } from 'react';
import {useAnalyticsConsent} from "@/hooks/useAnalyticsConsent";
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

    useAnalyticsConsent(consentGiven);

    return (
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
                alert("nay!");
            }}
            hideOnAccept
            ariaAcceptLabel={messages('acceptAll')}
            ariaDeclineLabel={messages('rejectAll')}
        >
            {messages('description')}
        </CookieConsent>
    );
};
