import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoute from "./route/web.js";
import connectDB from "./config/connectDB.js";
require("dotenv").config();

let app = express();
//config app


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT || 8088;

// port = undefined => 8088

app.listen(port, () => {
    // call back function
    console.log("Backend nodejs is running on the port: " + port);
});