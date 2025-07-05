import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function ProductItem({product,locale,categorySlug}) {
    const messages = useTranslations('MenuPage');
    let finalPrices;
    if (product.sizes && product.sizes.length > 0) {
        finalPrices = product.sizes.map(size => `${size.price}€`).join(' | ');
    } else {
        finalPrices = product.price + ' €';
    }
    let link = `/menu/${categorySlug}/${product.slug[locale]}`;

    return (
        <div className="col-lg-4 col-md-6">
            <div className="product">
                <Link className="product-thumb" href={link}>
                    <Image src={product.image} alt={product.name[locale]} width={1500} height={1500} />
                    {product?.isNew && <p className='newLabel'>{messages('newProduct')} </p>}
                </Link>
                <div className="product-body">
                    <div className="product-desc">
                        <h4><Link  href={link}>{product.name[locale]}</Link></h4>
                        {product.description && <p> {product.description[locale]}</p> }
                    </div>
                    <div className="product-controls">
                        <p className="product-price">{finalPrices} </p>
                        {product.description &&
                        <Link  href={link}
                           className="order-item btn-custom btn-sm shadow-none"> {messages('detailsCta')} </Link>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

