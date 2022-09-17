"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleReturnPostParams = exports.singleReturnGetParams = void 0;
const imageController_1 = require("./imageController");
const wordController_1 = require("./wordController");
const randomController_1 = require("./randomController");
const sentenceController_1 = require("./sentenceController");
const paragraphController_1 = require("./paragraphController");
function singleReturnGetParams(req, res) {
    res.send(req.query);
}
exports.singleReturnGetParams = singleReturnGetParams;
function singleReturnPostParams(req, res) {
    res.json({ ...req.query, ...req.body });
}
exports.singleReturnPostParams = singleReturnPostParams;
function controller(app) {
    app.get(/\/(\d+)(?:p|paragraph|paragraphs)(,*)$/, paragraphController_1.paragraph);
    app.get(/\/(\d+)(?:w|word|words)(,*)$/, wordController_1.word);
    app.get(/\/(\d+)(?:s|sentence|sentences)(,*)$/, sentenceController_1.sentence);
    app.get(/\/(\d+)x(\d+)\.(jpg|png)(?:,([a-zA-Z0-9]+?),([a-zA-Z0-9]+?))*$/, imageController_1.image);
    app.get(/\/random,(.+?)$/, randomController_1.random);
    app.post(/\/post\/(?:vrp|virtualPost)/, singleReturnPostParams);
    app.post('/post', singleReturnPostParams);
    app.get(/\/get\/(?:vrg|virtualGet)$/, singleReturnGetParams);
    app.get('/get', singleReturnGetParams);
}
exports.default = controller;
//# sourceMappingURL=index.js.map