"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// console.log(dao)
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.get('/', (req, res) => {
            res.send({ message: 'Hello rh-dev-mock-server ' });
        });
    }
    config() {
        //开启 cors
        this.app.use((0, cors_1.default)());
        //支持  application/json类型 发送数据
        this.app.use((0, body_parser_1.json)());
        //支持 application/x-www-form-urlencoded 发送数据
        this.app.use((0, body_parser_1.urlencoded)({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Content-Type', 'application/json;charset=utf-8');
            next();
        });
        //日志中间件
        this.app.use((0, morgan_1.default)(function (tokens, req, res) {
            const url = tokens.url(req, res);
            if (url.indexOf('/sockjs-node/info?t=') > -1) {
                return;
            }
            return [
                `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)} content-length: ${tokens.res(req, res, 'content-length')} - ${tokens['response-time'](req, res)}ms`
            ];
        }));
    }
}
exports.App = App;
// export default new App().app
exports.app = new App().app;
//# sourceMappingURL=app.js.map