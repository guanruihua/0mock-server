"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiServer = void 0;
const config_1 = require("./config");
const rh_color_1 = require("rh-color");
const app_1 = require("./app");
function apiServer(param) {
    const { host = config_1.HOST, port = config_1.PORT, callback } = param || {};
    callback && callback(app_1.app);
    app_1.app.listen(port, host, () => {
        console.log((0, rh_color_1.color)(`listening at http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`, 'Grey'));
    });
}
exports.apiServer = apiServer;
//# sourceMappingURL=apiServer.js.map