import {Fragment} from "react";

export function MobileNavigation() {
    return (
        <Fragment>
            <aside className="main-aside">

                <div className="aside-scroll">
                    <ul>
                        <li className="menu-item">
                            <a href=""> Αρχική</a>
                        </li>


                        <li className="menu-item menu-item-has-children">
                            <a href="menu"> Μενού</a>
                            <ul className="submenu">
                                <li className="menu-item">
                                    <a href="menu">Ολόκληρο το μενού</a>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="menu#pizza">Πίτσες</a>
                                    <ul className="submenu">
                                        <li className="menu-item menu-item-has-children">
                                            <a href="menu#pizza">Special</a>
                                            <ul className="submenu">
                                                <li className="menu-item"><a href="menu/pizza/dino-special">Dino
                                                    Special</a></li>
                                                <li className="menu-item"><a href="menu/pizza/ala-krem">Αλα Κρεμ</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/chicken">Με Κοτόπουλο</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/cold-cut">Αλλαντικών</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/barbeque">Μπάρμπεκιου</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/chicken-barbeque">Κοτόπουλο
                                                    Μπάρμπεκιου</a></li>
                                                <li className="menu-item"><a href="menu/pizza/chicken-ala-krem">Κοτόπουλο
                                                    Αλα Κρέμ</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="menu#pizza">Πικάντικες</a>
                                            <ul className="submenu">
                                                <li className="menu-item"><a href="menu/pizza/vezoubios">Βεζούβιος</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/spicy">Πικάντικη</a></li>
                                                <li className="menu-item"><a href="menu/pizza/mexican">Μεξικάνικη</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/politiki">Πολίτικη</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="menu#pizza">Vegeterian</a>
                                            <ul className="submenu">
                                                <li className="menu-item"><a href="menu/pizza/margarita">Μαργαρίτα</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/village">Χωριάτικη</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/agrotiki">Αγροτική</a>
                                                </li>
                                                <li className="menu-item"><a href="menu/pizza/four-cheese">Με 4
                                                    τυριά</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="menu#pizza">Γλυκές</a>
                                            <ul className="submenu">
                                                <li className="menu-item"><a href="menu/pizza/sweet">Γλυκιά Πίτσα</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="yourpizza">Φτιάξε τη δική σου</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu-item menu-item-has-children">
                                    <a href="menu#pasta">Ζυμαρικά Φούρνου</a>
                                    <ul className="submenu">
                                        <li className="menu-item"><a href="menu/pasta/napoliten">Ναπολιτέν</a></li>
                                        <li className="menu-item"><a href="menu/pasta/carbonara">Καρμπονάρα</a></li>
                                        <li className="menu-item"><a href="menu/pasta/ala-krem">Αλα Κρεμ</a></li>
                                        <li className="menu-item"><a href="menu/pasta/special">Special</a></li>
                                        <li className="menu-item"><a href="menu/pasta/four-cheese">Με 4 τυριά</a></li>
                                        <li className="menu-item"><a href="menu/pasta/bolonez">Μπολονέζ</a></li>
                                        <li className="menu-item"><a href="menu/pasta/chicken">Κοτομακαρονάδα</a></li>
                                        <li className="menu-item"><a href="menu/pasta/dino">Dino</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="menu#pastaitaliana">Ζυμαρικά Ιταλιάνα</a>
                                    <ul className="submenu">
                                        <li className="menu-item"><a href="menu/pasta/carbonara-italian">Καρμπονάρα</a>
                                        </li>
                                        <li className="menu-item"><a href="menu/pasta/polo">Polo (Κοτόπουλο)</a></li>
                                        <li className="menu-item"><a href="menu/pasta/funchi">Funchi (Με μανιτάρια)</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="menu#salad">Σαλάτες</a>
                                </li>
                                <li className="menu-item">
                                    <a href="menu#penirli">Πεϊνιρλί</a>
                                </li>
                                <li className="menu-item">
                                    <a href="menu#kaltsone">Καλτσονε</a>
                                </li>
                                <li className="menu-item">
                                    <a href="menu#glosses">Γλώσσες</a>
                                </li>
                                <li className="menu-item">
                                    <a href="menu#strountel">Στρουντελ</a>
                                </li>
                                <li className="menu-item">
                                    <a href="menu#drinks">Αναψυκτικά - Μπύρες</a>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item ">
                            <a href="about">Σχετικά με εμάς </a>
                        </li>

                        <li className="menu-item  ">
                            <a href="blog"> Blog</a>
                        </li>
                        <li className="menu-item">
                            <a href="contact"> Επικοινωνία</a>
                        </li>
                    </ul>

                </div>

            </aside>
            <div className="aside-overlay aside-trigger"></div>
        </Fragment>
    )
}
