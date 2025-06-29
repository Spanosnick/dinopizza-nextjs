import React, {Fragment} from 'react'
import {getPageMetadata} from "@/lib/generateMetadata";
import {useTranslations} from "next-intl";

export async function generateMetadata({params}) {
    const {locale} = await params
    return getPageMetadata(locale, 'policy');
}

export default function Policy() {
    const messages = useTranslations('policy');

    return (
        <Fragment>
            <div className="subheader dark-overlay dark-overlay-2"
                style={{backgroundImage: 'url(/img/subheader.webp)'}}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1>{messages('header')}</h1>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="post-content">

                                <h2>{messages('sections.introduction.title')}</h2>
                                <p>{messages('sections.introduction.content')}</p>

                                <h2>{messages('sections.informationCollection.title')}</h2>
                                <p>{messages('sections.informationCollection.content')}</p>
                                <ul>
                                    <li>{
                                        messages(
                                            'sections.informationCollection.list.personalData')}</li>
                                    <li>{messages('sections.informationCollection.list.usageData')}</li>
                                </ul>

                                <h2>{messages('sections.informationUse.title')}</h2>
                                <p>{messages('sections.informationUse.content')}</p>
                                <ul>
                                    <li>{messages('sections.informationUse.list.services')}</li>
                                    <li>{messages('sections.informationUse.list.communication')}</li>
                                    <li>{messages('sections.informationUse.list.improvement')}</li>
                                </ul>

                                <h2>{messages('sections.informationDisclosure.title')}</h2>
                                <p>{messages('sections.informationDisclosure.content')}</p>

                                <h2>{messages('sections.informationProtection.title')}</h2>
                                <p>{messages('sections.informationProtection.content')}</p>

                                <h2>{messages('sections.yourRights.title')}</h2>
                                <p>{messages('sections.yourRights.content')}</p>
                                <ul>
                                    <li>{messages('sections.yourRights.list.access')}</li>
                                    <li>{messages('sections.yourRights.list.correction')}</li>
                                    <li>{messages('sections.yourRights.list.objection')}</li>
                                    <li>{messages('sections.yourRights.list.restriction')}</li>
                                    <li>{messages('sections.yourRights.list.portability')}</li>
                                </ul>

                                <h2>{messages('sections.cookies.title')}</h2>
                                <p>{messages('sections.cookies.content')}</p>

                                <h2>{messages('sections.policyChanges.title')}</h2>
                                <p>{messages('sections.policyChanges.content')}</p>

                                <h2>{messages('sections.contact.title')}</h2>
                                <p>{messages('sections.contact.content')}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
