import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV === "development";
const ss = process.env.test === "envtest";
const port = 4100;
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
            console.log(`${port}で起動中`);
        });
    } catch (e) {
        console.error(e);
    }
})();