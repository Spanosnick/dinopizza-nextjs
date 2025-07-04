'use client';
import {useTranslations} from "next-intl";
import Script from "next/script";
import {Suspense, useEffect, useState} from "react";
import {Loading} from "@/components/Commons/Loading";

export function Testimonials() {
    const messages = useTranslations('Homepage');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This runs only on the client
        if (process.env.NODE_ENV === "production") {
            setIsClient(true);
        }
    }, []);

    if (!isClient) {
        return null; // Don't render anything in development or during SSR
    }
    return (
        <Suspense fallback={<Loading />}>
        <section className="section testimonials">
            <div className="container">
                <div className="section-title-wrap section-header text-center">
                    <h5 className="custom-primary">{messages('clients.title')}</h5>
                    <h2 className="title"> {messages('clients.text')}</h2>
                </div>
                <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
                <div className="elfsight-app-dcceabdb-f9e1-4e4c-98b8-afcd8649ac6d" data-elfsight-app-lazy></div>
            </div>
        </section>
        </Suspense>
    )
}
