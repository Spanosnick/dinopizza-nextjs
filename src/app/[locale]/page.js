import {Fragment} from "react";
import Script from "next/script";
import {HeroSection} from "@/components/Homepage/HeroSection";
import Link from "next/link";
import {HomepageCategories} from "@/components/Homepage/Categories";
import {Testimonials} from "@/components/Homepage/Testimonials";
import {Hiring} from "@/components/Homepage/Hiring";
import {InstagramPhotos} from "@/components/Homepage/InstagramPhotos";
import {ContactForm} from "@/components/Homepage/ContactForm";

export default function Home() {
    return (
        <Fragment>
            <HeroSection />
            <HomepageCategories/>
            <Testimonials/>
            <Hiring/>
            <InstagramPhotos/>
            <ContactForm/>
        </Fragment>
    );
}
