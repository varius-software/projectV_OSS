import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV === "production";
const port = "https://variussoftware.com";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    try {
        await app.prepare();
        const server = express();
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, () => {
            console.log(`running https://variussoftware.com`);
        });
    } catch (e) {
        console.error(e);
    }
})();
