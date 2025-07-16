import productsData from '@/data/products.json';
import Category from "@/components/Products/Category";
import {Suspense} from "react";
import {Loading} from "@/components/Commons/Loading";

export function AllMenu() {
    return (<div className="section section-padding menu-v2">
            <div className="container">
                {productsData.categories.map(category => {
                    return   <Suspense key={category.id} fallback={<Loading/>}> <Category category={category}  /> </Suspense>
                })
                }
            </div>
        </div>

    )
}
