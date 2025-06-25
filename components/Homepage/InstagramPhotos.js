'use client';
import Script from "next/script";
import {useEffect, useState} from "react";

export function InstagramPhotos() {
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
        <div className="text-center">
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
            <div className="elfsight-app-70e9526f-7406-45ff-b247-e6c80708e297" data-elfsight-app-lazy></div>
        </div>
    )
}
