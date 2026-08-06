// Structured data for the restaurant. Rendered on the homepage so Google can show
// rich results (name, hours, address, price range, menu link) in search.
// Values sourced from the contact page / footer; update here if they change.

const SITE_URL = "https://dinopizza.gr";

export default function RestaurantJsonLd({ locale = "el" }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": `${SITE_URL}/#restaurant`,
        name: "Dino Pizza",
        url: `${SITE_URL}/${locale}`,
        image: `${SITE_URL}/images/og.jpg`,
        logo: `${SITE_URL}/img/logo.webp`,
        telephone: "+306978840421",
        email: "info@dinopizza.gr",
        priceRange: "€€",
        servesCuisine: ["Pizza", "Greek", "Italian"],
        acceptsReservations: "True",
        hasMenu: `${SITE_URL}/${locale}/menu`,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Αγίου Γεωργίου 24",
            addressLocality: "Βασιλικό",
            addressRegion: "Εύβοια",
            postalCode: "34002",
            addressCountry: "GR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 38.42764527428394,
            longitude: 23.667265276465905,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: "18:00",
                closes: "23:30",
            },
        ],
        sameAs: [
            "https://www.instagram.com/dinopizza_vasilikou/",
            "https://www.facebook.com/dino.pizza.vasilikou"
            // Add your real social profile URLs here (Facebook, Instagram, etc.)
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
