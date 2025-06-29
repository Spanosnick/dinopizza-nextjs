'use client';
import toggleActiveClass, {calculatePizza, selectPizzaSize} from "@/commons/utils";
import React, {useEffect} from "react";
import {useTranslations} from "next-intl";
import {availableToppings} from "@/commons/contants";


export function YourPizzaSelect() {
    const messages = useTranslations('yourpizza');


    useEffect(() => {
        toggleActiveClass()
    }, [])
    return (
        <>
        <div className="price-wrapper">
            <p className="product-price" id="customPizzaPrice"></p>
        </div>
        <p> {messages('description')} </p>
        <div className="customize-variations">

            <div className="customize-size-wrapper">
                <h5>  {messages('sizeLabel')} </h5>
                <div className="customize-size " onClick={() => selectPizzaSize('medium')}>
                    {messages('size.medium')}
                </div>
                <div className="customize-size" onClick={() => selectPizzaSize('mediumPhil')}>
                    {messages('size.mediumPhil')}
                </div>
                <div className="customize-size" onClick={() => selectPizzaSize('large')}>
                    {messages('size.large')}
                </div>
                <div className="customize-size" onClick={() => selectPizzaSize('largePhil')}>
                    {messages('size.largePhil')}
                </div>
            </div>

            <div className="accordion with-gap" id="variationsExample">
                <div className="card">
                    <div className="card-header" data-bs-toggle="collapse" role="button"
                         data-bs-target="#crustAccordion" aria-expanded="false"
                         aria-controls="crustAccordion">
                        <i className="flaticon-pizza-slice"></i> {messages('availableToppings')}
                    </div>
                    <div id="crustAccordion" className="collapse"
                         data-parent="#variationsExample">
                        <div className="card-body">
                            <div
                                className="d-flex justify-content-start flex-wrap availableItems">

                                {availableToppings.map((item, index) => {
                                    return (<div className="custom-control custom-radio mx-2" key={item}>
                                        <input type="checkbox" value={item}
                                               id={item} name={item}
                                               className="custom-control-input" onClick={calculatePizza}/>
                                        <label className="custom-control-label px-2"
                                               htmlFor={item}>  {messages(`items.${item}`)} </label>
                                    </div>)
                                })}

                    </div>

                </div>
            </div>
        </div>
        </div>

</div>
</>
)
}
