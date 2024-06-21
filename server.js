const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=> {
    console.long("Loading home...");
    res.send("Hello World");

});

app.listen(PORT, () => {
console.log("🎶Server is running on port" + PORT);

});