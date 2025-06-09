import Image from "next/image";
import Link from "next/link";

export function Navigation() {
    return (
            <header className="main-header header-1 ">
                <div className="top-header">
                    <div className="container">
                        <div className="top-header-inner">

                            <div className="top-header-contacts">
                                <ul className="top-header-nav">
                                    <li><Link className="p-0 mx-1" href="tel:+302221055959"><i
                                        className="fas fa-phone mr-2"></i> 2221055959
                                    </Link>
                                    </li>
                                    <li><Link className=" p-0 mx-1" href="tel:+306978404210"><i
                                        className="fas fa-phone mr-2"></i> 6978404210</Link>
                                    </li>
                                    <li className="locationMarker"><Link className=" p-0 mx-1"
                                                                         href="https://maps.app.goo.gl/s7GeKyEpES415HJP8"
                                                                         target=""><i
                                        className="fas fa-map-marker"></i> Αγίου
                                        Γεωργίου 24, Βασιλικό 340 02 </Link>
                                    </li>
                                </ul>
                            </div>

                            <ul className="top-header-nav header-cta">
                                <li><Link href='/yourpizza'> Φτιάξε τη δική σου πίτσα!</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <nav className="navbar">
                        <Link className="navbar-brand " href=""> <Image src="/img/logo.webp" width={200} height={300}
                                                                        alt="logo"/> </Link>
                        <ul className="navbar-nav ">
                            <li className="menu-item">
                                <Link href="/">Αρχική </Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/menu">Μενού</Link>
                                <ul className="submenu">
                                    <li className="menu-item menu-item-has-children">
                                        <Link href="/menu#pizza">Πίτσες</Link>
                                        <ul className="submenu">
                                            <li className="menu-item menu-item-has-children">
                                                <Link href="/menu#pizza">Special</Link>
                                                <ul className="submenu">
                                                    <li className="menu-item"><Link href="/menu/pizza/dino-special">Dino
                                                        Special</Link></li>
                                                    <li className="menu-item"><Link href="/menu/pizza/ala-krem">Αλα
                                                        Κρεμ</Link>
                                                    </li>
                                                    <li className="menu-item"><Link href="/menu/pizza/chicken">Με
                                                        Κοτόπουλο</Link>
                                                    </li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/cold-cut">Αλλαντικών</Link>
                                                    </li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/barbeque">Μπάρμπεκιου</Link>
                                                    </li>
                                                    <li className="menu-item"><Link href="/menu/pizza/chicken-barbeque">Κοτόπουλο
                                                        Μπάρμπεκιου</Link></li>
                                                    <li className="menu-item"><Link href="/menu/pizza/chicken-ala-krem">Κοτόπουλο
                                                        Αλα Κρέμ</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link href="/menu#pizza">Πικάντικες</Link>
                                                <ul className="submenu">
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/vezoubios">Βεζούβιος</Link>
                                                    </li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/spicy">Πικάντικη</Link></li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/mexican">Μεξικάνικη</Link>
                                                    </li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/politiki">Πολίτικη</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link href="/menu#pizza">Vegeterian</Link>
                                                <ul className="submenu">
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/margarita">Μαργαρίτα</Link>
                                                    </li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/village">Χωριάτικη</Link>
                                                    </li>
                                                    <li className="menu-item"><Link
                                                        href="/menu/pizza/agrotiki">Αγροτική</Link>
                                                    </li>
                                                    <li className="menu-item"><Link href="/menu/pizza/four-cheese">Με 4
                                                        τυριά</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <Link href="/menu#pizza">Γλυκές</Link>
                                                <ul className="submenu">
                                                    <li className="menu-item"><Link href="/menu/pizza/sweet">Γλυκιά
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
                                        <Link href="/menu#pasta">Ζυμαρικά Φούρνου</Link>
                                        <ul className="submenu">
                                            <li className="menu-item"><Link
                                                href="/menu/pasta/napoliten">Ναπολιτέν</Link></li>
                                            <li className="menu-item"><Link
                                                href="/menu/pasta/carbonara">Καρμπονάρα</Link></li>
                                            <li className="menu-item"><Link href="/menu/pasta/ala-krem">Αλα Κρεμ</Link>
                                            </li>
                                            <li className="menu-item"><Link href="/menu/pasta/special">Special</Link>
                                            </li>
                                            <li className="menu-item"><Link href="/menu/pasta/four-cheese">Με 4
                                                τυριά</Link></li>
                                            <li className="menu-item"><Link href="/menu/pasta/bolonez">Μπολονέζ</Link>
                                            </li>
                                            <li className="menu-item"><Link
                                                href="/menu/pasta/chicken">Κοτομακαρονάδα</Link></li>
                                            <li className="menu-item"><Link href="/menu/pasta/dino">Dino</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link href="/menu#pastaitaliana">Ζυμαρικά Ιταλιάνα</Link>
                                        <ul className="submenu">
                                            <li className="menu-item"><Link
                                                href="/menu/pasta/carbonara-italian">Καρμπονάρα</Link>
                                            </li>
                                            <li className="menu-item"><Link href="/menu/pasta/polo">Polo
                                                (Κοτόπουλο)</Link></li>
                                            <li className="menu-item"><Link href="/menu/pasta/funchi">Funchi (Με
                                                μανιτάρια)</Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item">
                                        <Link href="/menu#salad">Σαλάτες</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/menu#penirli">Πεϊνιρλί</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/menu#kaltsone">Καλτσονε</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/menu#glosses">Γλώσσες</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/menu#strountel">Στρουντελ</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/menu#drinks">Αναψυκτικά - Μπύρες</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item">
                                <Link href="about">Σχετικά με εμάς </Link>
                            </li>

                            <li className="menu-item  ">
                                <Link href="blog"> Blog</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="contact"> Επικοινωνία</Link>
                            </li>
                        </ul>
                        <div className="header-controls">

                            <div className="aside-toggler aside-trigger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>
    )
}
