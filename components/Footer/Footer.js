export default function Footer() {
    return (
        <footer className="ct-footer footer-dark">

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title"> Μενού</h5>
                            <ul>
                                <li><a href=""> Αρχική</a></li>
                                <li><a href="about"> Σχετικά με εμάς</a></li>
                                <li><a href="menu">Μενού</a></li>
                                <li><a href="blog">Blog</a></li>
                                <li><a href="contact">Επικοινωνία</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title"> Χρήσιμοι Σύνδεσμοι</h5>
                            <ul>
                                <li><a href="yourpizza"> Φτιάξε τη δική σου πίτσα!</a></li>
                                <li><a href="policy"> Πολιτική Απορρήτου</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 footer-widget">
                            <h5 className="widget-title">Social Media</h5>
                            <ul className="social-media">
                                <li><a target="_blank" href="https://www.facebook.com/dino.pizza.vasilikou"
                                       className="facebook"> <i
                                    className="fab fa-facebook-f"></i> </a></li>
                                <li><a target="_blank" href="https://www.instagram.com/dinopizza_vasilikou/"
                                       className="pinterest">
                                    <i className="fab fa-instagram"></i> </a></li>
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
                        <p> Created by <a target="_blank" href="https://www.nickport.com/">Nick Spanos </a></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
