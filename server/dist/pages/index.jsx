"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(require("next/head"));
var image_1 = __importDefault(require("next/image"));
var Home_module_css_1 = __importDefault(require("@/styles/Home.module.css"));
var home_module_sass_1 = __importDefault(require("../styles/home.module.sass"));
var account_1 = __importDefault(require("@/pages/account"));
function Home() {
    var Devmode = function () {
        if (process.env.NODE_ENV === "development") {
            return (<p> development mode </p>);
        }
        else {
            return (<p> development mode </p>);
        }
    };
    return (<div className={home_module_sass_1.default.container}>
        <head_1.default>
            <title>V</title>
        </head_1.default>
      <main className={Home_module_css_1.default.main}>
              <image_1.default src="/image_4.png" alt="Logo" className={Home_module_css_1.default.vercelLogo} width={896} height={345} priority/>
			<p>insert code is : {'  {process.env.NODE_ENV}'}.</p>
			<p>How to insert code is edit index.tsx</p>
          <account_1.default />
          <Devmode />
      </main>
    </div>);
}
exports.default = Home;
