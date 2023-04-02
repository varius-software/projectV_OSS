"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const Box = ({ children, w, display, bgColor, h, m, p, jc, ai, textSize }) => {
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
