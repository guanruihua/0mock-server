"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const body_parser_1 = (0, tslib_1.__importStar)(require("body-parser"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
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