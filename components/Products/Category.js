import {useLocale} from "next-intl";
import {Fragment} from "react";
import ProductItem from "@/components/Products/ProductItem";

export default function Category({category}) {
    const locale = useLocale();
    let categoryName = category.name[locale];
    let categoryDescription = category.description[locale];
    let categorySlug = category.slug[locale];

    return (
        <Fragment>
            <div className="menu-category dark-overlay dark-overlay-2"
                 key={category.id} id={category.id}
                 style={{backgroundImage: `url('/img/banner/${category.bannerImg}')`}}>
                <h3> {categoryName}</h3>
                <p>{categoryDescription}</p>
            </div>
            <div className="row">
                {category.subcategories && category.subcategories.map((subcategory) =>
                    subcategory.products.map((product) => (
                        <ProductItem key={product.id} categorySlug={categorySlug} product={product} locale={locale} />
                    ))
                )}

                {category.products && category.products.map((product) => (
                        <ProductItem key={product.id} categorySlug={categorySlug}  product={product} locale={locale} />
                    )
                )}
            </div>
        </Fragment>
    )
}
