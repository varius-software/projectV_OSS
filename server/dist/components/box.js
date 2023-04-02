"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = function (_a) {
    var children = _a.children, w = _a.w, display = _a.display, bgColor = _a.bgColor, h = _a.h, m = _a.m, p = _a.p, jc = _a.jc, ai = _a.ai, textSize = _a.textSize;
    return (<div style={{
            backgroundColor: bgColor,
            color: '#000',
            height: h,
            width: w,
            display: display,
            justifyContent: jc,
            alignItems: ai,
            padding: p,
            margin: m,
            fontSize: textSize
        }}>
            {children}
        </div>);
};
exports.Box = Box;
