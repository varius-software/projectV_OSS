"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var react_1 = __importDefault(require("react"));
function countterReducer(_a) {
    var _b = _a.state, state = _b === void 0 ? { value: 1 } : _b, action = _a.action;
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}
var storePal = (0, toolkit_1.createStore)(countterReducer);
function Returnstatus() {
    return (<>
        {storePal}
      </>);
}
exports.default = Returnstatus;
