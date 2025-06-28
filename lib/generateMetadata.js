export async function getPageMetadata(locale, pageSlug, dynamicData = {}) {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    const pageData = messages?.[pageSlug];

    const defaultTitle = 'Dino Pizza!!! | Παραδοσιακή γεύση';
    const defaultDescription = 'Απολαύστε!!! την καλύτερη πίτσα στο Βασιλικό Ευβοίας!';

    return {
        title: pageData?.metaTitle || defaultTitle,
        description: pageData?.metaDescription || defaultDescription,
        metadataBase: new URL ('https://dinopizza.gr'),
        alternates: {
            canonical: `/${pageSlug}`,
            languages: {
                el: `/el/${pageSlug}`,
                en: `/en/${pageSlug}`,
            },
        },
        openGraph: {
            title: pageData?.metaTitle || defaultTitle,
            description: pageData?.metaDescription || defaultDescription,
            url: `https://dinopizza.gr`,
            siteName: 'Dino Pizza',
            images: [
                {
                    url: '/images/og.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Dino Pizza',
                },
            ],
            locale,
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                nocache: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'google',
            yandex: 'yandex',
            yahoo: 'yahoo',
        }

    };
}
