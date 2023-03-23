"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(require("next/head"));
var image_1 = __importDefault(require("next/image"));
//import { Inter } from 'next/font/google'
var Home_module_css_1 = __importDefault(require("@/styles/Home.module.css"));
var store_1 = __importDefault(require("@/status/store"));
function Home() {
    return (<>
      <head_1.default>
        <title>V : {process.env.NODE_ENV} mode</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </head_1.default>
      <main className={Home_module_css_1.default.main}>
              <image_1.default src="/image.jpg" alt="Logo" className={Home_module_css_1.default.vercelLogo} width={500} height={500} priority/>
          <store_1.default key={1}/>
			<p>insert code is : {'  {process.env.NODE_ENV}'}.</p>
			<p>How to insert code is edit index.tsx</p>
      </main>
    </>);
}
exports.default = Home;
