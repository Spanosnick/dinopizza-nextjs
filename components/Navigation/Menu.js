import Link from "next/link";

export default function renderMenu(category,locale) {
    if (!category.subcategories && category.showProducts === false) {

        return (
            <li key={category.id} className="menu-item">
                <Link href={`/menu/${category.slug[locale]}`}>{category.name[locale]}</Link>
            </li>
        );
    } else if(!category.subcategories && category.showProducts === true)  {

        return (
            <li key={category.id} className="menu-item menu-item-has-children">
                <Link href={`/menu/${category.slug[locale]}`}>{category.name[locale]}</Link>
                <ul className="submenu">
                    {category.products.map(product => (
                        <li key={product.id} className="menu-item">
                            <Link
                                href={`/menu/${category.slug[locale]}/${product.slug[locale]}`}>
                                {product.name[locale]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        );
    }

    if (category.subcategories) {
        return (<li key={category.id} className="menu-item menu-item-has-children">
            <Link href={`/menu/${category.slug[locale]}`}>{category.name[locale]}</Link>
            <ul className="submenu">
                {category.subcategories.map(sub => (
                    <li key={sub.id} className="menu-item menu-item-has-children">
                        <Link href={`/menu/${category.slug[locale]}/${sub.slug[locale]}`}>{sub.name[locale]}</Link>
                        <ul className="submenu">
                            {sub.products.map(product => (
                                <li key={product.id} className="menu-item">
                                    <Link
                                        href={`/menu/${category.slug[locale]}/${sub.slug[locale]}/${product.slug[locale]}`}>
                                        {product.name[locale]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </li>)
    }


}
