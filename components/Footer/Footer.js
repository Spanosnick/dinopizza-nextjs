import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Footer() {
    const messages = useTranslations('Footer');
    return (
        <footer className="ct-footer footer-dark">

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title">  {messages('menu')}</h5>
                            <ul>
                                <li><Link href="">  {messages('home')}</Link></li>
                                <li><Link href="/about"> {messages('aboutUs')}</Link></li>
                                <li><Link href="/menu"> {messages('menu')}</Link></li>
                                <li><Link href="/blog"> {messages('blog')}</Link></li>
                                <li><Link href="/contact"> {messages('contact')}</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title">{messages('usefulLinks')}</h5>
                            <ul>
                                <li><Link href="yourpizza"> {messages('createPizza')}</Link></li>
                                <li><Link href="policy">  {messages('privacy')}</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 footer-widget">
                            <h5 className="widget-title">Social Media</h5>
                            <ul className="social-media">
                                <li><Link target="_blank" href="https://www.facebook.com/dino.pizza.vasilikou"
                                       className="facebook"> <i
                                    className="fab fa-facebook-f"></i> </Link></li>
                                <li><Link target="_blank" href="https://www.instagram.com/dinopizza_vasilikou/"
                                       className="pinterest">
                                    <i className="fab fa-instagram"></i> </Link></li>
                            </ul>
                            <div className="footer-offer">
                                <p>  {messages('socialMediaText')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container ">
                    <div className="footer-copyright ">
                        <p> Created by <Link target="_blank" href="https://www.nickport.com/">Nick Spanos </Link></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
