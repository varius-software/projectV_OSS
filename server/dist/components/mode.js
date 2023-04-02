"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devmode = void 0;
const devmode = () => {
    let dev = 'dev';
    let pud = 'pud';
    if (process.env.NODE_ENV === "development") {
        return dev;
    }
    else {
        return pud;
    }
};
exports.devmode = devmode;
