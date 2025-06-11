import {Fragment} from "react";
import Link from "next/link";

export function MobileNavigation() {
    return (
        <Fragment>
            <aside className="main-aside">
                <div className="aside-scroll">
                    <ul>
                        <li className="menu-item">
                            <Link href=""> Αρχική</Link>
                        </li>


                        <li className="menu-item menu-item-has-children">
                            <Link href="menu"> Μενού</Link>
                            <ul className="submenu">
                                <li className="menu-item">
                                    <Link href="menu">Ολόκληρο το μενού</Link>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <Link href="menu#pizza">Πίτσες</Link>
                                    <ul className="submenu">
                                        <li className="menu-item menu-item-has-children">
                                            <Link href="menu#pizza">Special</Link>
                                            <ul className="submenu">
                                                <li className="menu-item"><Link href="menu/pizza/dino-special">Dino
                                                    Special</Link></li>
                                                <li className="menu-item"><Link href="menu/pizza/ala-krem">Αλα
                                                    Κρεμ</Link>
                                                </li>
                                                <li className="menu-item"><Link href="menu/pizza/chicken">Με
                                                    Κοτόπουλο</Link>
                                                </li>
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/cold-cut">Αλλαντικών</Link>
                                                </li>
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/barbeque">Μπάρμπεκιου</Link>
                                                </li>
                                                <li className="menu-item"><Link href="menu/pizza/chicken-barbeque">Κοτόπουλο
                                                    Μπάρμπεκιου</Link></li>
                                                <li className="menu-item"><Link href="menu/pizza/chicken-ala-krem">Κοτόπουλο
                                                    Αλα Κρέμ</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <Link href="menu#pizza">Πικάντικες</Link>
                                            <ul className="submenu">
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/vezoubios">Βεζούβιος</Link>
                                                </li>
                                                <li className="menu-item"><Link href="menu/pizza/spicy">Πικάντικη</Link>
                                                </li>
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/mexican">Μεξικάνικη</Link>
                                                </li>
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/politiki">Πολίτικη</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <Link href="menu#pizza">Vegeterian</Link>
                                            <ul className="submenu">
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/margarita">Μαργαρίτα</Link>
                                                </li>
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/village">Χωριάτικη</Link>
                                                </li>
                                                <li className="menu-item"><Link
                                                    href="menu/pizza/agrotiki">Αγροτική</Link>
                                                </li>
                                                <li className="menu-item"><Link href="menu/pizza/four-cheese">Με 4
                                                    τυριά</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <Link href="menu#pizza">Γλυκές</Link>
                                            <ul className="submenu">
                                                <li className="menu-item"><Link href="menu/pizza/sweet">Γλυκιά
                                                    Πίτσα</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <Link href="yourpizza">Φτιάξε τη δική σου</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu-item menu-item-has-children">
                                    <Link href="menu#pasta">Ζυμαρικά Φούρνου</Link>
                                    <ul className="submenu">
                                        <li className="menu-item"><Link href="menu/pasta/napoliten">Ναπολιτέν</Link>
                                        </li>
                                        <li className="menu-item"><Link href="menu/pasta/carbonara">Καρμπονάρα</Link>
                                        </li>
                                        <li className="menu-item"><Link href="menu/pasta/ala-krem">Αλα Κρεμ</Link></li>
                                        <li className="menu-item"><Link href="menu/pasta/special">Special</Link></li>
                                        <li className="menu-item"><Link href="menu/pasta/four-cheese">Με 4 τυριά</Link>
                                        </li>
                                        <li className="menu-item"><Link href="menu/pasta/bolonez">Μπολονέζ</Link></li>
                                        <li className="menu-item"><Link href="menu/pasta/chicken">Κοτομακαρονάδα</Link>
                                        </li>
                                        <li className="menu-item"><Link href="menu/pasta/dino">Dino</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <Link href="menu#pastaitaliana">Ζυμαρικά Ιταλιάνα</Link>
                                    <ul className="submenu">
                                        <li className="menu-item"><Link
                                            href="menu/pasta/carbonara-italian">Καρμπονάρα</Link>
                                        </li>
                                        <li className="menu-item"><Link href="menu/pasta/polo">Polo (Κοτόπουλο)</Link>
                                        </li>
                                        <li className="menu-item"><Link href="menu/pasta/funchi">Funchi (Με
                                            μανιτάρια)</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link href="menu#salad">Σαλάτες</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="menu#penirli">Πεϊνιρλί</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="menu#kaltsone">Καλτσονε</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="menu#glosses">Γλώσσες</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="menu#strountel">Στρουντελ</Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="menu#drinks">Αναψυκτικά - Μπύρες</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item ">
                            <Link href="about">Σχετικά με εμάς </Link>
                        </li>

                        <li className="menu-item  ">
                            <Link href="blog"> Blog</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="contact"> Επικοινωνία</Link>
                        </li>
                    </ul>

                </div>
                <div className="aside-overlay aside-trigger"></div>
            </aside>
        </Fragment>
)
}
