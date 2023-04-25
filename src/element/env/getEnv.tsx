import {useState} from "react";

export default function GetEnv(props: any) {
    // const [mode,setMode] = useState();
    const Devmode = process.env.NEXT_PUBLIC_TEST === 'DEV'? "dev": "prod";
    return (
        <div>
            <p>GetEnv</p>
            <p>{process.env.NEXT_PUBLIC_TEST}</p>
            <p>{Devmode}</p>
        </div>
    );
};