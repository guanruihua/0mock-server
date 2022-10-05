"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApis = void 0;
const rh_color_1 = require("rh-color");
const app_1 = require("./app");
/**
 * @description 通过接口配置数组, 生成接口
 * @param list: ApiUnit[]
 */
function loadApis(list) {
    list.forEach((item) => {
        const { get, post, callback, useCallbackResult = true } = item;
        console.log((0, rh_color_1.color)((get ? 'get:' : 'post:'), get ? 'Cyan' : 'Yellow'), (0, rh_color_1.color)(get || post, 'Green'));
        try {
            if (get) {
                if (!useCallbackResult) {
                    app_1.app.get(get, (req, res) => callback({}, req, res));
                    return;
                }
                else {
                    app_1.app.get(get, (req, res) => {
                        res.send(callback(req.query, req, res));
                    });
                }
            }
            if (post) {
                if (!useCallbackResult) {
                    app_1.app.post(post, (req, res) => callback({}, req, res));
                }
                else {
                    app_1.app.post(post, (req, res) => {
                        res.json(callback(Object.assign(req.query, req.body || {}), req, res));
                    });
                }
            }
        }
        catch (error) {
            console.log('error', error);
        }
    });
}
exports.loadApis = loadApis;
//# sourceMappingURL=loadApis.js.map