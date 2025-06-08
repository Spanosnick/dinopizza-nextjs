// app/head.js — only used for <head> content
import React from 'react'

export default function Head() {
    return (
        <>
            <div className="ct-preloader">
                <div className="ct-preloader-inner">
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div id="loader" className="d-none">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
