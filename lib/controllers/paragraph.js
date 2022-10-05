"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const loadApis_1 = require("../lib/loadApis");
const config_1 = require("../lib/config");
// eslint-disable-next-line
function callback(param, req, res) {
    let lorem = (new lorem_ipsum_1.LoremIpsum()).generateParagraphs(Math.min(parseInt(req.params[0]), config_1.MAX_PARAGRAPH));
    req.params[1] === ',' && (lorem = lorem.split('\r\n'));
    res.json({
        "data": lorem
    });
}
exports.callback = callback;
(0, loadApis_1.loadApis)([{
        get: /\/(\d+)(?:p|paragraph|paragraphs)(,*)$/,
        callback,
    }]);
//# sourceMappingURL=paragraph.js.map