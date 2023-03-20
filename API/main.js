const http = require("http");
const express = require("express");

const app = express();

app.get( "/", (req, res) => {
	res.status(200).send("otowakka");	
});

app.get("/api",(req,res) => {
	res.status(200).send({id:1, text:"aaaa"});
});

// コンソールにポート番号を表示

const server = app.listen(8000, function () {
	console.log("Running on: " + server.address().port);
})
