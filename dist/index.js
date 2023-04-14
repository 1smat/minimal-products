"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("tiny"));
// this.app.use(hpp());
// this.app.use(helmet());
// this.app.use(compression());
app.use(body_parser_1.default.json());
// Add headers before the routes are defined
app.get("/products", (req, res) => {
    const subdomain = req.query.sub;
    const products = [
        {
            _id: "0",
            title: "Iphone X",
            desc: "White 64gb",
            message: `Some logic with ${subdomain} subdomain on server`
        },
        {
            _id: "1",
            title: "Iphone 11",
            desc: "Black 128gb",
            message: `Some logic with ${subdomain} subdomain on server`
        },
        {
            _id: "2",
            title: "Iphone 12",
            desc: "Midnight 256gb",
            message: `Some logic with ${subdomain} subdomain on server`
        }
    ];
    res.send(products);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
