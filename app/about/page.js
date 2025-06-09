'use client'
import React from 'react'
import Image from "next/image";

export default function About() {
    return (
        <>
            <div
                className="subheader dark-overlay dark-overlay-2"
                style={{ backgroundImage: "url('/img/subheader.webp')" }}
            >
                <div className="container">
                    <div className="subheader-inner">
                        <h1>Σχετικά με εμάς</h1>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <Image src="/img/auth.webp" width={700} height={500} alt="img" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Η ιστορία μας</h5>
                                <h2 className="title">Είμαστε δίπλα σας απο το 2005</h2>
                                <p className="subtitle">
                                    Καλώς ήρθατε στην πιτσαρία μας, την αγαπημένη γωνιά γεύσης στο <b>Βασιλικό Χαλκίδας!</b> Από το 2005,
                                    προσφέρουμε με μεράκι και αγάπη παραδοσιακές πίτσες...
                                </p>
                                <p className="subtitle">Η πιτσαρία μας έχει κερδίσει την εμπιστοσύνη των πελατών μας...</p>
                                <p className="subtitle">
                                    Σας ευχαριστούμε για την προτίμησή σας και σας προσκαλούμε να ανακαλύψετε τις μοναδικές γεύσεις μας...
                                </p>

                                <a href="/menu" className="btn-custom">
                                    Δείτε το μενού μας
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2 d-none"
                style={{ backgroundImage: "url('/img/subheader-2.webp')" }}
            >
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title text-white">Μερικά απο τα επιτεύγματά μας</h2>
                        <p className="subtitle text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>

                    <div className="row">
                        {/* Repeatable Stat Items */}
                        {[
                            { icon: 'flaticon-employee', number: '5,100', label: 'Πελάτες' },
                            { icon: 'flaticon-pizza-slice', number: '45,000', label: 'Πίτσες' },
                            { icon: 'flaticon-cheese', number: '2,000', label: 'Καλτσόνε' },
                            { icon: 'flaticon-soda', number: '666', label: 'Παναγίες Μπέσια' },
                        ].map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="ct-infographic-item">
                                    <i className={item.icon}></i>
                                    <h4>{item.number}</h4>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <section
                className="section bg-center bg-cover dark-overlay mt-5"
                style={{ backgroundImage: "url('/img/bg/1.jpg')" }}
            >
                <div className="container">
                    <div className="ct-newsletter">
                        <div className="section-title-wrap section-header">
                            <h2 className="title">Κάνε εγγραφή στο Newsletter</h2>
                            <p className="subtitle">
                                Κάνοντας εγγραφή στο Newsletter θα βρείτε όλες τις τελευταίες ενημερώσεις...
                            </p>
                        </div>

                        <form method="post">
                            <input type="email" className="form-control" placeholder="Email" />
                            <button type="submit" className="btn-custom primary">
                                Εγγραφή <i className="far fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
