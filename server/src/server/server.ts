import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV === "development";
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
            console.log(`http://localhost:${port}   ඞඞඩ`);
        });
    } catch (e) {
        console.error(e);
    }
})();
