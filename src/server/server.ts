import express, { Request, Response } from "express";
import next from "next";

const api = require("../api/api_config");
const dev = process.env.NODE_ENV === "development";
const ss = process.env.test === "envtest";
const port = 4100;
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
(async () => {
    try {
        await app.prepare();
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

server.get("/api/v0.5.0", (req: Request, res: Response) => {
    let a = {
        test: "test",
        test2: {
            test3: "test3",
            test4: [
                "test4",
                "test5",
            ]
        }
    };
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(a);
});

server.use("/api/test", api);