import express, { Request, Response } from "express";

const router = express.Router();
const server = express();

server.get("/", (req: Request, res: Response) => {
    let a = {
        test: "test222"
    };
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(a);
});

module.exports = server;