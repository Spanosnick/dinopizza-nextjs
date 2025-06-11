import {useTranslations} from "next-intl";
import Link from "next/link";
import Image from "next/image";


export function HeroSection() {
    const messages = useTranslations('Homepage');
    return (
        <>
            <div className="banner banner-1 banner-4 light-banner">

                <div className="banner-item">
                    <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2"
                         style={{backgroundImage: "url('/img/banner/7.webp')"}}>
                        <div className="container">

                            <h2 className="title">  {messages('hero.title')}</h2>
                            <p className="subtitle">
                                {messages('hero.subtitle')}</p>
                            <Link href="menu" className="btn-custom primary">  {messages('hero.button')}</Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30 my-2">
                                <h2 className="title">Dino Pizza</h2>
                                <h5 className="custom-primary"> {messages('about.label')}</h5>
                                <p className="subtitle">{messages('about.text')}</p>

                                <Link href="about" className="btn-custom"> {messages('about.title')}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper my-2">
                            <Image className="img-fluid" src={`${process.env.BASE_PATH}/img/auth.webp`} width={600} height={600} alt="Pizza Vasiliko"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
