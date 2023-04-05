"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const react_1 = __importDefault(require("react"));
function countterReducer({ state = { value: 1 }, action }) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}
let storePal = (0, toolkit_1.createStore)(countterReducer);
function Returnstatus() {
    return (<>
        {storePal}
      </>);
}
exports.default = Returnstatus;
