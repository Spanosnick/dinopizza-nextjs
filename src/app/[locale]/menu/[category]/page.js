import data from '@/data/products.json';
import {findCategoryBySlug} from "@/lib/dataHelpers";
import Category from "@/components/Products/Category";
import {Suspense} from "react";
import {Loading} from "@/components/Commons/Loading";

export async function generateStaticParams() {
    const paths = [];

    data.categories.forEach((category) => {
        Object.keys(category.slug).forEach((locale) => {
            paths.push({
                locale,
                category: category.slug[locale],
            });
        });
    });

    return paths;
}

export default function CategoryPage({params}) {
    const {locale, category} = params;
    const foundCategory = findCategoryBySlug(category, locale);
    if (!foundCategory) {
        return <div>Κατηγορία δεν βρέθηκε</div>;
    }

    return  <Suspense fallback={<Loading />}><Category category={foundCategory}/> </Suspense>

}
