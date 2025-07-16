
import {AllMenu} from "@/components/About/AllMenu";
import {Suspense} from "react";
import {Loading} from "@/components/Commons/Loading";
import {getPageMetadata} from "@/lib/generateMetadata";

export async function generateMetadata({params}) {
    const { locale } = await params
    return getPageMetadata(locale, 'MenuPage');
}

export default function Menu() {
    return <AllMenu/>
}
