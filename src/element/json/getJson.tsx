export const getServerSideProps = async ():Promise<any> => {
    const rest = await fetch('http://localhost:4100/api/v0.5.0');
    console.log(rest);
    return {
        props: {
            initialCatImageUrl: rest.url,
        }
    };
};