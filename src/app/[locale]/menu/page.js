import Image from "next/image";
import Link from "next/link";

import {AllMenu} from "@/components/About/AllMenu";



export default function Menu() {
    return (
        <>
            <div className="subheader dark-overlay dark-overlay-2"
                 style={{backgroundImage: "url('../assets/img/subheader.webp')"}}>
                <div className="container">
                    <div className="subheader-inner">
                        <h1> Μενού </h1>
                    </div>
                </div>
            </div>
            <AllMenu/>
        </>
    )
}
