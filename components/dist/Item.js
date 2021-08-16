"use strict";
exports.__esModule = true;
var Item = function (_a) {
    var cartItem = _a.cartItem;
    return (React.createElement("div", { key: cartItem.product.id },
        React.createElement("h1", null, cartItem.product.name),
        React.createElement("img", { src: cartItem.product.imageUrl, alt: "item.product.id" }),
        React.createElement("p", null,
            cartItem.product.price,
            "\u5186"),
        React.createElement("p", null,
            cartItem.quantity,
            "\u500B")));
};
exports["default"] = Item;
