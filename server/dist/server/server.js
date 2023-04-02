"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
//import cgiExpress from "cgi-express";
const dev = process.env.NODE_ENV === "production";
const port = "4100";
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
(async () => {
    try {
        await app.prepare();
        const server = (0, express_1.default)();
        server.all("*", (req, res) => {
            return handle(req, res);
        });
        server.listen(port, () => {
            console.log(`running http://localhost:${port}`);
            //cgiExpress.execute(server);
        });
    }
    catch (e) {
        console.error(e);
    }
})();
