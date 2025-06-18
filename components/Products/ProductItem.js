import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({product,locale,categorySlug}) {
    let finalPrices;
    if (product.sizes && product.sizes.length > 0) {
        finalPrices = product.sizes.map(size => `${size.price}€`).join(' | ');
    } else {
        finalPrices = product.price;
    }
    let link = `/menu/${categorySlug}/${product.slug[locale]}`;

    return (
        <div className="col-lg-4 col-md-6">
            <div className="product">
                <Link className="product-thumb" href={link}>
                    <Image src={`/${product.image}`} alt={product.name[locale]} width={500} height={500} />
                </Link>
                <div className="product-body">
                    <div className="product-desc">
                        <h4><Link  href={link}>{product.name[locale]}</Link></h4>
                        <p>{product.description[locale]}</p>
                    </div>
                    <div className="product-controls">
                        <p className="product-price">{finalPrices} </p>
                        <Link  href={link}
                           className="order-item btn-custom btn-sm shadow-none">Λεπτομέρειες </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

