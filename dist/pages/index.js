"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Home() {
    var Devmode = function () {
        if (process.env.NODE_ENV === "development") {
            return (<p> development mode </p>);
        }
        else {
            return (<p> development mode </p>);
        }
    };
    return (<div>
    </div>);
}
exports.default = Home;
