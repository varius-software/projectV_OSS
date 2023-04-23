import { Html, Head, Main, NextScript } from 'next/document'
//import style from './docs.module.sass'
import version from '../../package.json'
import Link from "next/link";
export default function Document({ title = "| project V", description = "This is Photo Application!!!!" }) {
    return (
        <Html>
            <Head/>
            <div style={{backgroundColor: "#000",
                color: "#fff",
                padding: 20,
                display: "flex",
                alignItems: "center"}}>
                <div style={{
                    width: "50%",
                }}>
                    <Link href="/" style={{
                        textDecoration: "none",
                        color: "#fff",
                    }}>
                        <h1>projectV<span> - </span> for web3 developers</h1>
                    </Link>
                </div>
                <div style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-end",
                }}>
                    <h2>v - {version.version}</h2>
                    <span style={{margin: 20}}> </span>
                    <button style={{
                        width: 110,
                        height: 44,
                        borderRadius: 10
                    }}>aaa</button>
                </div>
            </div>
            <header>
            </header>
            <body>
            <Main />
            <NextScript />
            <div style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: 34,
            }}>
                <div style={{width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
                    <p>@ 2023 - VARIUS dev team / Nknight AMAMIYA</p>
                </div>
                <br/>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20
                }}>
                    <p>other links</p>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    height: 300
                }}>
                    <div>
                        a
                    </div>
                </div>
            </div>
            </body>
        </Html>
    )
}