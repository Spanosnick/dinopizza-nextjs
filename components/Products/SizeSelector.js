import {useTranslations} from "next-intl";


export function SizeSelector({sizes, price}) {
    const messages = useTranslations('ProductDetails');
    return (
        <div className="customize-variations">
            <div className="customize-size-wrapper">
                {sizes.length > 0 &&  <h5> {messages('size')} </h5>}
                {sizes.length > 0 && sizes.map((pizza, index) =>
                    (<div className="customize-size" key={index}>
                        {messages(`${pizza.size}`)} {pizza.price}€
                    </div>)
                )
                }
                {price && <h5> {messages('price')}  {price} €</h5>}
            </div>
        </div>
    )
}
