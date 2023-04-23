"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var LogSchema = new Schema({
    user_android_id: { type: String, required: true },
    user_device_model: { type: String, required: true },
    user_logs: { type: [String], required: true }
}, { collection: "log" });
exports["default"] = mongoose_1["default"].model("Log", LogSchema); // this
