"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Item = function (_a) {
    var cartItem = _a.cartItem, onIncrement = _a.onIncrement, onDecrement = _a.onDecrement;
    var _b = react_1.useState(cartItem.quantity), itemCount = _b[0], setItemCount = _b[1];
    var incrementItem = function () {
        onIncrement(cartItem);
    };
    var decrementItem = function () {
        onDecrement(cartItem);
    };
    return (React.createElement("div", { key: cartItem.product.id },
        React.createElement("h1", null, cartItem.product.name),
        React.createElement("img", { src: cartItem.product.imageUrl, alt: "item.product.id" }),
        React.createElement("p", null,
            cartItem.product.price,
            "\u5186"),
        React.createElement("p", null,
            cartItem.quantity,
            "\u500B"),
        React.createElement("button", { onClick: incrementItem }, " + "),
        React.createElement("button", { onClick: decrementItem }, " - ")));
};
exports["default"] = Item;
