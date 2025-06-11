import Link from "next/link";
import {useTranslations} from "next-intl";

export function Hiring() {
    const messages = useTranslations('Homepage');
    return (
            <section className="careerBanner">
                <div className="careerInfo">
                    <h3>{messages('hiring.title')} </h3>
                    <h4>{messages('hiring.text')} </h4>
                    <Link href="career" className="btn-custom-second"> {messages('hiring.button')}</Link>
                </div>
            </section>
    )
}
