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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTableApiConfig = exports.loadApiByConfig = exports.apiServer = exports.Application = void 0;
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
var express_1 = require("express");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return express_1.Application; } });
__exportStar(require("rh-vr-dao"), exports);
const utils_1 = require("./utils");
Object.defineProperty(exports, "loadApiByConfig", { enumerable: true, get: function () { return utils_1.loadApiByConfig; } });
Object.defineProperty(exports, "initTableApiConfig", { enumerable: true, get: function () { return utils_1.initTableApiConfig; } });
function apiServer(param) {
    const { host = config_1.HOST, port = config_1.PORT, callback } = param || {};
    callback && callback(app_1.default);
    app_1.default.listen(port, host, () => {
        console.log(`listening at http://${host}:${port}`);
    });
}
exports.apiServer = apiServer;
//# sourceMappingURL=index.js.map