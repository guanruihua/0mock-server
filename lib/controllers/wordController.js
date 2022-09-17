"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.word = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const config_1 = require("../config");
function word(req, res) {
    let lorem = (new lorem_ipsum_1.LoremIpsum()).generateWords(Math.min(parseInt(req.params[0]), config_1.MAX_WORDS));
    req.params[1] === ',' && (lorem = lorem.split(' '));
    res.json({ "data": lorem });
}
exports.word = word;
//# sourceMappingURL=wordController.js.map