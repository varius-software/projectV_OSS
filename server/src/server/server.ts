import express, { Request, Response } from "express";
import next from "next";
<<<<<<< HEAD
=======
//import cgiExpress from "cgi-express";
>>>>>>> 81f21202a4a004b63c50d8f8e7f1cf5acaa21757
const dev = process.env.NODE_ENV === "production";
const port = "4100";
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
<<<<<<< HEAD
            console.log(`running https://variussoftware.com`);
=======
            console.log(`running http://localhost:${port}`);
>>>>>>> 81f21202a4a004b63c50d8f8e7f1cf5acaa21757
            //cgiExpress.execute(server);
        });
    } catch (e) {
        console.error(e);
    }
})();
