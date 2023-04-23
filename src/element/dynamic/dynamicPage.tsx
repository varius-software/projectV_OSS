import {useRouter} from "next/router";

export default function DynamicPage () {
    return(
        <div>
            <DynamicPageElement />
        </div>
    )
};

const DynamicPageElement = () => {
    const router = useRouter();
    const {id,page} = router.query;
    if (id === undefined || page === undefined)
        return(<DynamicPageElementUndefined>
            <h1>Welcome to V!</h1>
        </DynamicPageElementUndefined>);
    else if (id === "111" || id === "home")
        return(<DynamicPageElementHome/>);
    else
        return(
            <DynamicPageElementUndefined>
                <h1>User and Page not found... :( </h1>
            </DynamicPageElementUndefined>
        );
};

const DynamicPageElementUndefined = ({children}:any) => {
    return(
        <div>
            {children}
        </div>
    )
};

const DynamicPageElementHome = ({children}:any) => {
    return(
        <div>
            <h1>Home</h1>
            <div>
                aa
                aaa
                sssdadd
                <br/>
                aaa
            </div>
        </div>
    )
};