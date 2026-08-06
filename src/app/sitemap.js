import data from "@/data/products.json";

const BASE_URL = "https://dinopizza.gr";
const LOCALES = ["el", "en"];

// Build the <loc> + hreflang alternates for one logical page.
// `paths` maps each locale to its localized path segment (leading slash, no locale prefix).
function entry(paths, { changeFrequency = "weekly", priority = 0.7 } = {}) {
    const languages = {};
    for (const locale of LOCALES) {
        languages[locale] = `${BASE_URL}/${locale}${paths[locale]}`;
    }
    return {
        url: `${BASE_URL}/${LOCALES[0]}${paths[LOCALES[0]]}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: { languages },
    };
}

// Static routes share the same slug across locales.
const STATIC_ROUTES = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/menu", priority: 0.9, changeFrequency: "weekly" },
    { path: "/yourpizza", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/career", priority: 0.4, changeFrequency: "monthly" },
    { path: "/policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
    const routes = [];

    // Static pages (same slug in every locale)
    for (const { path, priority, changeFrequency } of STATIC_ROUTES) {
        const paths = Object.fromEntries(LOCALES.map((l) => [l, path]));
        routes.push(entry(paths, { priority, changeFrequency }));
    }

    // Menu categories + products (locale-specific slugs from products.json)
    for (const category of data.categories) {
        const catPaths = Object.fromEntries(
            LOCALES.map((l) => [l, `/menu/${category.slug[l]}`])
        );
        routes.push(entry(catPaths, { priority: 0.8, changeFrequency: "weekly" }));

        const addProduct = (product) => {
            const productPaths = Object.fromEntries(
                LOCALES.map((l) => [
                    l,
                    `/menu/${category.slug[l]}/${product.slug[l]}`,
                ])
            );
            routes.push(
                entry(productPaths, { priority: 0.7, changeFrequency: "weekly" })
            );
        };

        // Products directly on the category
        category.products?.forEach(addProduct);
        // Products nested in subcategories
        category.subcategories?.forEach((sub) => sub.products?.forEach(addProduct));
    }

    return routes;
}
