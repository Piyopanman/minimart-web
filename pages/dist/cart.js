"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var router_1 = require("next/router");
var Layout_1 = require("../components/Layout");
var recoil_1 = require("recoil");
var cartItem_1 = require("../recoil/atoms/cartItem");
var react_1 = require("react");
var _id_1 = require("./products/[id]");
var Item_1 = require("../components/Item");
var CartPage = function () {
    var router = router_1.useRouter();
    var cartItemNum = recoil_1.useRecoilValue(cartItem_1.cartItemNumState);
    var _a = react_1.useState([]), cartItems = _a[0], setCartItems = _a[1];
    var _b = react_1.useState(0), totalPrice = _b[0], setTotalPrice = _b[1];
    react_1.useEffect(function () {
        var func = function () { return __awaiter(void 0, void 0, void 0, function () {
            var items, total, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, JSON.parse(localStorage.getItem(_id_1.CART_ITEMS))];
                    case 1:
                        items = _b.sent();
                        setCartItems(items);
                        total = 0;
                        for (_i = 0, _a = cartItems; _i < _a.length; _i++) {
                            item = _a[_i];
                            total += item.product.price * item.quantity;
                            console.log(total);
                        }
                        setTotalPrice(total);
                        return [2 /*return*/];
                }
            });
        }); };
        func();
    }, [cartItems]);
    var submit = function () {
        alert("注文しました");
        localStorage.removeItem(_id_1.CART_ITEMS);
        router.push("/");
    };
    return (React.createElement(Layout_1.Layout, { cartItemNum: cartItemNum }, cartItems === null || cartItems === void 0 ? void 0 :
        cartItems.map(function (item) { return (React.createElement(Item_1["default"], { key: item.product.id, cartItem: item })); }),
        React.createElement("h1", null,
            "\u5408\u8A08\u91D1\u984D\uFF1A",
            totalPrice,
            "\u5186"),
        React.createElement("button", { onClick: submit }, "\u6CE8\u6587\u3059\u308B")));
};
exports["default"] = CartPage;
