
const express = require("express");
const app = express();
const router = express.Router();
const port = 5001


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

app.get("/", function(req, res){
	res.sendFile('index.html', {root: __dirname});  
});

app.get("/about", function(req, res){
	res.send("About page")
});

app.get("/scripts/allthat.js", function(req, res){
	res.sendFile('/scripts/allthat.js', {root: __dirname});  
})

app.get("images/whale.png", function(req, res){
	res.sendFile('images/whale.png', {root: __dirname});  
})