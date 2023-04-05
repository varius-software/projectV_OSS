export const devmode = () => {
    let dev = 'dev';
    let pud = 'pud';
    if (process.env.NODE_ENV === "development") {
        return dev
    } else {
        return pud
    }
}