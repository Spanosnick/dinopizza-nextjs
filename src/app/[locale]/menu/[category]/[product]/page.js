import data from '@/data/products.json';
import { findProductBySlug} from "@/lib/dataHelpers";
import Image from "next/image";
import {SizeSelector} from "@/components/Products/SizeSelector";
import {useTranslations} from "next-intl";
import Link from "next/link";


export async function generateStaticParams() {
    const paths = [];

    data.categories.forEach((category) => {
        // Πρώτα ελέγχει αν τα προϊόντα είναι απευθείας στην κατηγορία
        if (category.products?.length) {
            category.products.forEach((product) => {
                Object.keys(product.slug).forEach((locale) => {
                    paths.push({
                        locale,
                        category: category.slug[locale],
                        product: product.slug[locale],
                    });
                });
            });
        }

        // Μετά ελέγχει για προϊόντα μέσα σε subcategories
        category.subcategories?.forEach((subcategory) => {
            subcategory.products?.forEach((product) => {
                Object.keys(product.slug).forEach((locale) => {
                    paths.push({
                        locale,
                        category: category.slug[locale],
                        product: product.slug[locale],
                    });
                });
            });
        });
    });

    return paths;
}


export default function ProductPage({params}) {
    const {locale, category,product} = params;
    const {id,name,description,slug,sizes,price,image} = findProductBySlug(category, product, locale);
    console.log(price)
    const messages = useTranslations('ProductDetails');
    return (<div className="section product-single">
        <div className="container">

            <div className="row">
                <div className="col-md-5">
                    <div className="product-thumb">
                        <Image src={image} width={500} height={500} alt={slug}/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="product-content">
                        <h2 className="title">{name} </h2>
                        <p> {description}</p>
                        <SizeSelector sizes={sizes} price={price} />
                        <Link href="/menu" className="order-item btn-custom btn-sm shadow-none w-100"> {messages('menuCta')}  </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>)

}
