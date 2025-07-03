
import {AllMenu} from "@/components/About/AllMenu";
import {Suspense} from "react";
import {Loading} from "@/components/Commons/Loading";



export default function Menu() {
    return (
        <Suspense fallback={<Loading/>}>
            <AllMenu/>
        </Suspense>
    )
}
