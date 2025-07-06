import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {getPageMetadata} from "@/lib/generateMetadata";
export async function generateMetadata({params}) {
    const { locale } = await params
    return getPageMetadata(locale, 'careers');
}

export default function Careers() {
    const messages = useTranslations('careers')
    return (
        <div className="contact-wrapper careerInner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h3>{messages('hiringDelivery')} </h3>
                        <p> {messages('hiringText')}</p>
                        <b>  {messages('hiringBenefits')}</b>
                        <ul>
                            <li> {messages('benefit1')}</li>
                            <li>  {messages('benefit2')}</li>
                            <li>  {messages('benefit3')}</li>
                        </ul>
                        <p><b> {messages('phoneNumber')} <Link href="tel:+3069788404210">69788404210</Link></b></p>
                        <p><b> {messages('email')}<Link
                            href="mailto:dinopizzavasilikou@gmail.com">dinopizzavasilikou@gmail.com</Link></b></p>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <Image className="img-fluid" src="/img/career/team.jpg" width={500} height={500} alt="Career Image"/>
                    </div>
                </div>

            </div>

        </div>
    )
}
