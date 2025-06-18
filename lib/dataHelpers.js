import data from "../data/products.json";

export function findCategoryBySlug(slug, locale) {
    return data.categories.find(cat => cat.slug?.[locale] === slug);
}

export function findProductBySlug(categorySlug, productSlug, lang) {
    const category = findCategoryBySlug(categorySlug, lang);
    if (!category) return null;

    for (const sub of category.subcategories || []) {
        const product = sub.products.find(p => p.slug?.[locale] === productSlug);
        if (product) return product;
    }

    return null;
}


export function getSlugInLocale(slug, fromLocale, toLocale) {
    for (const cat of data.categories) {
        if (cat.slug[fromLocale] === slug) {
            return cat.slug[toLocale];
        }
    }
    return null;
}


export function getLocalizedCategorySlug(currentSlug, fromLocale, toLocale) {
    for (const cat of data.categories) {
        console.log('HELLO IAM HERE', cat.slug[fromLocale], currentSlug, cat.slug[toLocale]);
        if (cat.slug[fromLocale] === currentSlug) {

            return cat.slug[toLocale];
        }
    }
    return null;
}

export function getLocalizedProductSlug(categorySlug, productSlug, fromLocale, toLocale) {
    const category = data.categories.find(cat => cat.slug[fromLocale] === categorySlug);
    if (!category) return null;

    for (const sub of category.subcategories || []) {
        for (const product of sub.products || []) {
            if (product.slug[fromLocale] === productSlug) {
                return product.slug[toLocale];
            }
        }
    }

    return null;
}



