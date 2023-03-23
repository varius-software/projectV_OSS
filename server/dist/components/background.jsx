"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var background_module_sass_1 = __importDefault(require("./background.module.sass"));
function Background() {
    return (<div className={background_module_sass_1.default.Main}>
			<h1>Awesome METAVERSE...</h1>
		</div>);
}
exports.default = Background;
