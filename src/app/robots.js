const BASE_URL = "https://dinopizza.gr";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Nothing sensitive to hide yet; add disallowed paths here if needed.
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
