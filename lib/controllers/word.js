"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.word = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const lib_1 = require("../lib");
const lib_2 = require("../lib");
// eslint-disable-next-line
function word(param, req, res) {
    let lorem = (new lorem_ipsum_1.LoremIpsum()).generateWords(Math.min(parseInt(req.params[0]), lib_1.MAX_WORDS));
    if (req.params[1] === ',')
        return lorem.split(' ');
    return lorem;
}
exports.word = word;
(0, lib_2.loadApis)([{
        get: /\/(\d+)(?:w|word|words)(,*)$/,
        callback: word
    }]);
//# sourceMappingURL=word.js.map