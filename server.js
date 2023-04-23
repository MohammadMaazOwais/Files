"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var log_router_1 = require("./routers/log_router");
mongoose
    .connect("mongodb+srv://24100185:QL5IXKR4YRIw8yLu@cluster0.g3mhmke.mongodb.net/test")
    .then(function () { return console.log("Connected to MongoDB"); })["catch"](function (err) { return console.log(err); });
var app = express();
app.use(cors());
app.use(express.json());
app.use("/log", log_router_1["default"]);
var server = app.listen(3001, function () {
    console.log("Server is running on port 3001");
});
