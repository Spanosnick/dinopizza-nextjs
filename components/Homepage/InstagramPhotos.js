import Script from "next/script";

export function InstagramPhotos() {
    return (
        <div className="text-center">
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
            <div className="elfsight-app-70e9526f-7406-45ff-b247-e6c80708e297" data-elfsight-app-lazy></div>
        </div>
    )
}
