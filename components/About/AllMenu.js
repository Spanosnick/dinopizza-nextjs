import productsData from '@/data/products.json';
import Category from "@/components/Products/Category";

export function AllMenu() {
    return (<div className="section section-padding menu-v2">
            <div className="container">
                {productsData.categories.map(category => {
                        return <Category category={category} key={category.id} />
                })
                }
            </div>
        </div>

    )
}
