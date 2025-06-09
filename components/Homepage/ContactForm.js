import Link from "next/link";
import {useTranslations} from "next-intl";

export function ContactForm() {
    const messages = useTranslations('Homepage');
    return (
        <div className="contact-wrapper">
            <div className="">
                <div className="section section-padding">
                    <div className="container">

                        <div className="contact-info">

                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="ct-info-box">
                                        <i className="flaticon-location"></i>
                                        <h5> Βρείτε μας εδώ {messages('contact.findUs')} </h5>
                                        <Link target="_blank" href="https://maps.app.goo.gl/s7GeKyEpES415HJP8">
                                            <span>Διεύθυνση: {messages('contact.addressLabel')}</span> {messages('contact.address')}</Link>
                                        <Link target="_blank"
                                              href="tel:+302221055959"><span>{messages('contact.phone1')}</span> 2221055959</Link>
                                        <Link target="_blank"
                                              href="tel:+302221052609"><span>{messages('contact.phone2')}</span> 2221052609</Link>
                                        <Link target="_blank" href="tel:+306978404210"><span>{messages('contact.mobile')}</span> 6978404210</Link>
                                        <Link target="_blank"
                                              href="mailto: dinopizzavasilikou@gmail.com"><span>{messages('contact.email')}</span>
                                            dinopizzavasilikou@gmail.com</Link>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="ct-info-box">
                                        <i className="flaticon-online-booking"></i>
                                        <h5>  {messages('contact.workingHours')}</h5>
                                        <span>  {messages('contact.workingHoursText')}</span>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="section pt-0">
                    <div className="container">

                        <div className="section-title-wrap text-center">
                            <h2 className="title"> {messages('contact.formTitle')} </h2>
                            <p className="subtitle "> {messages('contact.formText')} </p>
                        </div>

                        <form className="text-center" id="formContact">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input type="text" placeholder={messages('contact.fields.firstName')} className="form-control" name="name"/>
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="text" placeholder={messages('contact.fields.lastName')} className="form-control" name="surname"  />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="email" placeholder={messages('contact.fields.email')} className="form-control" name="email"
                                    />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder={messages('contact.fields.subject')} className="form-control" name="subject"
                                    />
                                </div>
                                <div className="form-group col-lg-12">
                            <textarea name="message" className="form-control" placeholder={messages('contact.fields.message')}
                                      rows="8"></textarea>
                                </div>
                            </div>
                            <button className="btn-custom primary" >{messages('contact.sendButton')}</button>
                        </form>


                    </div>
                </div>
            </div>

        </div>
    )
}
