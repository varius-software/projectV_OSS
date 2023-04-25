import Link from "next/link";

// this is 404 page
export default function PageError () {

    // must chege bg and text color then release
    const Devmode = process.env.NEXT_PUBLIC_TEST === 'DEV'? "#000": "#fff";
    const DevmodeBack = process.env.NEXT_PUBLIC_TEST === 'DEV'? "#fff000": "#000";

    // Devmode URL
    let DevmodeURL = "http://localhost:4100";
    return (
        <div>
            <div style={{
                height: 350,
                backgroundColor: DevmodeBack,
                color: Devmode,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h1>Oops! Not fount page...</h1>
            </div>
            <div style={{
                height: 200,
                backgroundColor: DevmodeBack,
                color: Devmode,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Link href={"/"} style={{
                    textDecoration: "none",
                    fontSize: 30,
                    color: Devmode,
                }}>
                    back to home
                </Link>
            </div>
        </div>
    );
}