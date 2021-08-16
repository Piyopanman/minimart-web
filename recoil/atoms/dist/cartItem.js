"use strict";
exports.__esModule = true;
exports.cartItemNumState = void 0;
var recoil_1 = require("recoil");
var initialState = 0;
exports.cartItemNumState = recoil_1.atom({
    key: "cartItemNumState",
    "default": initialState
});
