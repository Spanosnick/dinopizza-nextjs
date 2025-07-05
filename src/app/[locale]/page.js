import {Suspense} from "react";
import {HeroSection} from "@/components/Homepage/HeroSection";
import {HomepageCategories} from "@/components/Homepage/Categories";
import {Testimonials} from "@/components/Homepage/Testimonials";
import {Hiring} from "@/components/Homepage/Hiring";
import {InstagramPhotos} from "@/components/Homepage/InstagramPhotos";
import {ContactForm} from "@/components/Homepage/ContactForm";
import {Loading} from "@/components/Commons/Loading";
import {getPageMetadata} from "@/lib/generateMetadata";

export async function generateMetadata({params}) {
    const { locale } = await params
    return getPageMetadata(locale, 'Homepage');
}

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <HeroSection />
            <HomepageCategories/>
            {/*<Testimonials/>*/}
            <Hiring/>
            <InstagramPhotos/>
            <ContactForm/>
        </Suspense>
    );
}
