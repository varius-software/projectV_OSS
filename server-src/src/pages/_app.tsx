import * as React from "react";
import { AppProps } from "next/app"
import "./global.css"
import Head from "next/head";

export default function App ({Component,pageProps}:AppProps) {
    return(
        <>
            <Head>
                <title>My new cool app</title>
            </Head>
            <Component{...pageProps}/>
        </>);
}
