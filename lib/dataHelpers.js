import data from "../data/products.json";
import {notFound} from "next/navigation";

export function findCategoryBySlug(slug, locale) {
    return data.categories.find(cat => cat.slug?.[locale] === slug);
}


export function findProductBySlug(categorySlug, productSlug, locale) {
    console.log(`Searching for product: ${productSlug} in category: ${categorySlug} for locale: ${locale}`);
    // Βρες την κατηγορία
    const category = data.categories.find(
        (cat) => cat.slug?.[locale] === categorySlug
    );

    if (!category) return null;

    let foundProduct = null;

    // 1️⃣ Έλεγχος σε category.products
    if (category.products?.length) {
        foundProduct = category.products.find(
            (p) => p.slug?.[locale] === productSlug
        );
    }

    // 2️⃣ Έλεγχος σε subcategories
    if (!foundProduct) {
        for (const sub of category.subcategories || []) {
            foundProduct = sub.products.find(
                (p) => p.slug?.[locale] === productSlug
            );
            if (foundProduct) break;
        }
    }

    if (!foundProduct) notFound();

    // 🔁 Επιστροφή localized αντικειμένου
    return {
        name: foundProduct.name?.[locale],
        description: foundProduct.description?.[locale],
        slug: foundProduct.slug?.[locale],
        sizes: foundProduct.sizes || [],
        price: foundProduct.price ?? null, // για κατηγορίες χωρίς sizes
        image: foundProduct.image || null,
    };
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



