
import {Fragment} from "react";
import Script from "next/script";

export default function Home() {
    return (
        <Fragment>
            <div className="banner banner-1 banner-4 light-banner">

                <div className="banner-item">
                    <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2"
                        style={{backgroundImage: "url('/img/banner/7.webp')"}}>
                        <div className="container">

                            <h2 className="title"> Ποιότητα & Γεύση</h2>
                            <p className="subtitle">
                                Γευτείτε την παράδοση με κάθε μπουκιά - φρέσκια, χειροποίητη πίτσα φτιαγμένη με τα
                                καλύτερα
                                υλικά. </p>
                            <a href="menu" className="btn-custom primary"> Δείτε το μενού</a>
                        </div>

                    </div>
                </div>

            </div>



            <div className="section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30 my-2">
                                <h5 className="custom-primary"> Σχετικά με εμάς</h5>
                                <h2 className="title">Dino Pizza </h2>
                                <p className="subtitle">
                                    Καλώς ήρθατε στην πιτσαρία μας, την αγαπημένη γωνιά γεύσης στο <span>Βασιλικό Χαλκίδας!</span> Από
                                    το 2005, προσφέρουμε με μεράκι και αγάπη παραδοσιακές πίτσες που γίνονται με τις πιο
                                    φρέσκες και
                                    ποιοτικές πρώτες ύλες.
                                    <br/>
                                    <br/>
                                    Στόχος μας είναι να <span> δημιουργήσουμε γεύσεις  </span>που θυμίζουν οικογενειακές
                                    στιγμές και να
                                    σας προσφέρουμε μια μοναδική γαστρονομική εμπειρία, όπου μπορείτε να απολαύσετε το
                                    γεύμα σας με
                                    φίλους και οικογένεια, ακόμα και από την άνεση του σπιτιού σας. </p>

                                <a href="about" className="btn-custom"> Η ιστορία μας</a>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper my-2">
                            <img className="img-fluid" src="/img/auth.webp" alt="img"/>
                        </div>

                    </div>
                </div>
            </div>



            <div className="ct-categories">


                <div className="ct-category">
                    <div className="ct-category-bg"  style={{backgroundImage: "url('/img/categories-lg/4.webp')"}}></div>
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">

                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary"> Μενού Πίτσας</h5>
                                <h2 className="title"> Το πάθος μας για το τέλειο!</h2>
                                <p className="subtitle">Εδώ θα βρείτε την αυθεντική γεύση της παραδοσιακής πίτσας,
                                    φτιαγμένη με τα πιο
                                    φρέσκα υλικά και μεράκι. Από την κλασική Μαργαρίτα μέχρι τις πιο ευφάνταστες
                                    γεύσεις, οι πίτσες μας
                                    είναι έτοιμες να σας ταξιδέψουν γευστικά.</p>
                            </div>


                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pizza/dino-special"> DINO SPECIAL</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σάλτσα, σουτζούκι, πεπερόνε, ζαμπόν, μανιτάρια, μπέικον, λουκάνικα
                                                φρανκφούρτης, πιπεριά,
                                                κεφαλοτύρι, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pizza/ala-krem"> ΑΛΑ ΚΡΕΜ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Κρέμα γάλακτος, μανιτάρια, μπέικον, ντομάτα, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pizza/chicken"> ΜΕ ΚΟΤΟΠΟΥΛΟ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σάλτσα, κοτόπουλο, κρεμμύδι, ντομάτα, κεφαλοτύρι, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pizza/cold-cut"> ΑΛΛΑΝΤΙΚΩΝ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σάλτσα, πεπερόνε, ζαμπόν, σαλάμι αέρος, μπέικον, λουκάνικο φρανκφούρτης,
                                                μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pizza/barbeque"> ΜΠΑΡΜΠΕΚΙΟΥ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σάλτσα, ζαμπόν, μπέικον, σως μπάρμπεκιου, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pizza/chicken-barbeque"> ΚΟΤΟΠΟΥΛΟ ΜΠΑΡΜΠΕΚΙΟΥ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σάλτσα, κοτόπουλο, μπέικον, σως μπάρμπεκιου, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 text-center">
                                    <a href="menu/index.php#pizzas" className="btn-custom">Δες όλες τις πίτσες εδώ</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="ct-category">
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">

                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary"> Μενού Ζυμαρικών</h5>
                                <h2 className="title">Αυθεντικές Γεύσεις</h2>
                                <p className="subtitle"> Τα ζυμαρικά μας παρασκευάζονται με τις καλύτερες πρώτες ύλες
                                    και συνδυάζονται
                                    με αυθεντικές σάλτσες για να σας προσφέρουν ένα γαστρονομικό ταξίδι στην καρδιά της
                                    ελληνικής
                                    παράδοσης. </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pasta/napoliten">ΝΑΠΟΛΙΤΕΝ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σπαγγέτι, κεφαλοτύρι, σάλτσα ντομάτας, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pasta/carbonara">ΚΑΡΜΠΟΝΑΡΑ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σπαγγέτι, κεφαλοτύρι, ζαμπόν, κρέμα γάλακτος, πιπεριά, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pasta/ala-krem">ΑΛΑ ΚΡΕΜ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σπαγγέτι, κεφαλοτύρι, κρέμα γάλακτος, μπέικον, μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pasta/special">SPECIAL</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σπαγγέτι, κεφαλοτύρι, σάλτσα ντομάτας, μανιτάρια, ζαμπόν, πιπεριές,
                                                μείγμα τυριών</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pasta/four-cheese">ΜΕ 4 ΤΥΡΙΑ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σπαγγέτι, κεφαλοτύρι, κρέμα γάλακτος, ροκφόρ, γκούντα, ένταμ,
                                                μοτσαρέλα</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ct-mini-menu-item">
                                        <div className="ct-mini-menu-top">
                                            <a href="menu/pasta/bolonez">ΜΠΟΛΟΝΕΖ</a>
                                        </div>
                                        <div className="ct-mini-menu-bottom">
                                            <p>Σπαγγέτι, κεφαλοτύρι, κιμάς μοσχαρίσιος, σάλτσα ντομάτας, μείγμα
                                                τυριών</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 text-center">
                                    <a href="menu/index.php#pasta" className="btn-custom">Δες όλα τα ζυμαρικά εδώ </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="ct-category-bg" style={{backgroundImage: "url('/img/categories-lg/5.webp')"}}></div>


                </div>

            </div>
            <section className="section testimonials">
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h5 className="custom-primary">Οι πελάτες μας</h5>
                        <h2 className="title"> Δείτε τι είπαν για εμάς</h2>
                    </div>
                    <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
                    <div className="elfsight-app-dcceabdb-f9e1-4e4c-98b8-afcd8649ac6d" data-elfsight-app-lazy></div>
                </div>
            </section>


            <img className="img-fluid" src="/img/waveup.svg"/>
            <section className="careerBanner">
                <div className="careerInfo">
                    <h3>To Dino Pizza αναζητά διανομέα! </h3>
                    <h4>Αν σου αρέσει η επαφή με τον κόσμο,απολαμβάνεις να κάνεις τα πάντα με το μηχανάκι και
                        θες να έχεις ευελιξία στο ωράριο σου, τότε έλα και εσύ στην ομάδα του Dino Pizza. </h4>
                    <a href="career" className="btn-custom-second">Δες Λεπτομέρειες</a>
                </div>
            </section>
            <img className="img-fluid" src="/img/wavedown.svg"/>


            <div className="text-center">
                <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
                <div className="elfsight-app-70e9526f-7406-45ff-b247-e6c80708e297" data-elfsight-app-lazy></div>
            </div>



            <div className="contact-wrapper">

                <div className="">
                    <div className="section section-padding">
                        <div className="container">

                            <div className="contact-info">

                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-location"></i>
                                            <h5> Βρείτε μας εδώ </h5>
                                            <a target="_blank" href="https://maps.app.goo.gl/s7GeKyEpES415HJP8">
                                                <span>Διεύθυνση:</span> Αγίου Γεωργίου 24, Βασιλικό 340 02</a>
                                            <a target="_blank"
                                               href="tel:+302221055959"><span>Σταθερό 1:</span> 2221055959</a>
                                            <a target="_blank"
                                               href="tel:+302221052609"><span>Σταθερό 2:</span> 2221052609</a>
                                            <a target="_blank" href="tel:+306978404210"><span>Κινητό:</span> 6978404210</a>
                                            <a target="_blank"
                                               href="mailto: dinopizzavasilikou@gmail.com"><span>Email:</span>
                                                dinopizzavasilikou@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-online-booking"></i>
                                            <h5> Ώρες Λειτουργίας</h5>
                                            <span> Δευτέρα - Κυριακή: 18:00 - 23:30</span>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="section pt-0">
                        <div className="container">

                            <div className="section-title-wrap text-center">
                                <h2 className="title"> Φόρμα Επικοινωνίας </h2>
                                <p className="subtitle ">Έχετε κάποια ερώτηση ή χρειάζεστε περισσότερες πληροφορίες για
                                    τις υπηρεσίες
                                    μας; Είμαστε εδώ για να βοηθήσουμε! Συμπληρώστε τη φόρμα επικοινωνίας παρακάτω και
                                    ένας εκπρόσωπός
                                    μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατό. </p>
                            </div>

                            <form className="text-center" id="formContact">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Όνομα " className="form-control" name="name"
                                               value=""/>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Επώνυμο " className="form-control"
                                               name="surname"
                                               value=""/>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" placeholder="Email  " className="form-control" name="email"
                                               value=""/>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" placeholder="Θέμα " className="form-control" name="subject"
                                               value=""/>
                                    </div>
                                    <div className="form-group col-lg-12">
                            <textarea name="message" className="form-control" placeholder="Μήνυμα "
                                      rows="8"></textarea>
                                    </div>
                                </div>
                                <button className="btn-custom primary" onClick="defaultForm(event,'')">Αποστολή
                                    Μηνύματος
                                </button>
                            </form>


                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}
