import Link from "next/link";

export default function Footer() {
    return (
        <footer className="ct-footer footer-dark">

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title"> Μενού</h5>
                            <ul>
                                <li><Link href=""> Αρχική</Link></li>
                                <li><Link href="about"> Σχετικά με εμάς</Link></li>
                                <li><Link href="menu">Μενού</Link></li>
                                <li><Link href="blog">Blog</Link></li>
                                <li><Link href="contact">Επικοινωνία</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title"> Χρήσιμοι Σύνδεσμοι</h5>
                            <ul>
                                <li><Link href="yourpizza"> Φτιάξε τη δική σου πίτσα!</Link></li>
                                <li><Link href="policy"> Πολιτική Απορρήτου</Link></li>
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
                                <p>Ακολούθησε μας στα social media ώστε να μην χάσεις καμία προσφορά !</p>
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
