"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentence = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const config_1 = require("../config");
function sentence(req, res) {
    let lorem = (new lorem_ipsum_1.LoremIpsum()).generateSentences(Math.min(parseInt(req.params[0]), config_1.MAX_SENTENCE));
    req.params[1] === ',' && (lorem = lorem
        .split('.')
        .map((s) => s.trim() + '.')
        .filter((i) => i !== '.'));
    res.json({ "data": lorem });
}
exports.sentence = sentence;
//# sourceMappingURL=sentenceController.js.map