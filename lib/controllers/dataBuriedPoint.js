"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataBuriedPoint = exports.dataBuriedPoint = exports.DataBuriedPoint = void 0;
const canvas_1 = require("canvas");
const loadApis_1 = require("../lib/loadApis");
/**
 * @description: Data buried point 数据埋点 集合
 */
exports.DataBuriedPoint = [];
/**
 * @description: Data buried point 数据埋点 集合
 */
// eslint-disable-next-line
function dataBuriedPoint(params, req, res) {
    const query = req.query || {};
    if (query && !(JSON.stringify(query) === '{}')) {
        exports.DataBuriedPoint.push(query);
    }
    const canvas = (0, canvas_1.createCanvas)(1, 1);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 1, 1);
    res.setHeader('Content-Type', `image/png`);
    canvas.pngStream().pipe(res);
}
exports.dataBuriedPoint = dataBuriedPoint;
/**
 * @description: 获取 Data buried point 数据埋点
 */
// eslint-disable-next-line
function getDataBuriedPoint(params, req, res) {
    return { dataBuriedPoints: exports.DataBuriedPoint };
}
exports.getDataBuriedPoint = getDataBuriedPoint;
(0, loadApis_1.loadApis)([
    {
        get: '/dbp',
        callback: dataBuriedPoint,
        useCallbackResult: false
    },
    {
        get: '/getDBP',
        callback: getDataBuriedPoint,
    }
]);
//# sourceMappingURL=dataBuriedPoint.js.map