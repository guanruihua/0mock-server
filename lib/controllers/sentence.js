"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentence = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const config_1 = require("../lib/config");
const lib_1 = require("../lib");
// eslint-disable-next-line
function sentence(param, req, res) {
    const lorem = (new lorem_ipsum_1.LoremIpsum()).generateSentences(Math.min(parseInt(req.params[0]), config_1.MAX_SENTENCE));
    if (req.params[1] === ',') {
        return lorem
            .split('.')
            .map((s) => s.trim() + '.')
            .filter((i) => i !== '.');
    }
    return lorem;
}
exports.sentence = sentence;
(0, lib_1.loadApis)([{
        get: /\/(\d+)(?:s|sentence|sentences)(,*)$/,
        callback: sentence
    }]);
//# sourceMappingURL=sentence.js.map