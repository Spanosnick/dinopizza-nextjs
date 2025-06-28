'use client';
import React, {useState} from "react";
import {Loading} from "@/components/Commons/Loading";
import {sendSubscriptionEmail} from "@/src/actions/SendSubscriptionEmail";
import {useTranslations} from "next-intl";

export function SubscriptionForm() {
    const messages = useTranslations('about');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({
        success: false,
        message: ''
    });

    async function handleSubmitSubscription(formData) {
        setIsLoading(true);
        const result = await sendSubscriptionEmail(formData);
        if (result.success) {
            setStatus({
                success: true,
                message: messages('formSuccessMessage')
            });
        } else {
            setStatus({
                success: false,
                message: messages('formErrorMessage'),
                error: result.message
            });
        }


        setIsLoading(false);
    }
    if (isLoading) {
        return  <Loading />
    }

    return (
        <section
            className="section bg-center bg-cover dark-overlay mt-5"
            style={{ backgroundImage: "url('/img/bg/1.jpg')" }}
        >
            <div className="container">
                <div className="ct-newsletter">
                    <div className="section-title-wrap section-header">
                        <h2 className="title"> {messages('newsLetterTitle')}</h2>
                        <p className="subtitle">
                            {messages('newsLetterSubTitle')}
                        </p>
                    </div>

                    <form action={handleSubmitSubscription}>
                        <input type="email" className="form-control" placeholder="Email" name="email"  />
                        <p className={status.success === true ?`bg-success text-white my-2` : 'bg-warning text-white my-2'}>{status.message} </p>
                        <button type="submit" className="btn-custom primary">
                            {messages('newsLetterCta')} <i className="far fa-paper-plane"></i>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}
