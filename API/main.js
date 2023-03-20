const http = require("http");
const express = require("express");

const app = express();
const portNumber = 8000;

app.get( "/", (req, res) => {
	res.status(200).send("otowakka");	
});

app.get("/api",(req,res) => {
	res.status(200).send({id:1, text:"aaaa"});
});

app.listen(portNumber);
// コンソールにポート番号を表示
console.log(`PortNumber is ${portNumber}`);
