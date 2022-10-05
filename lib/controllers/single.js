"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postParams = exports.getParams = exports.random = void 0;
const loadApis_1 = require("../lib/loadApis");
// eslint-disable-next-line
function random(params, req, res) {
    const randomSource = req.params[0].split(',');
    res.json({ "data": randomSource[Math.floor(Math.random() * randomSource.length)] });
}
exports.random = random;
// eslint-disable-next-line
function getParams(params, req, res) {
    res.send(req.query);
}
exports.getParams = getParams;
// eslint-disable-next-line
function postParams(params, req, res) {
    res.json({ ...req.query, ...req.body });
}
exports.postParams = postParams;
(0, loadApis_1.loadApis)([
    {
        get: /\/random,(.+?)$/,
        callback: random
    },
    {
        get: /\/get\/(?:vrg|virtualGet)$/,
        callback: getParams
    },
    {
        get: /\/post\/(?:vrp|virtualPost)/,
        callback: postParams
    }
]);
//# sourceMappingURL=single.js.map