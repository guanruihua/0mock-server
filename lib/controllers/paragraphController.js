"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paragraph = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const config_1 = require("../config");
function paragraph(req, res) {
    let lorem = (new lorem_ipsum_1.LoremIpsum()).generateParagraphs(Math.min(parseInt(req.params[0]), config_1.MAX_PARAGRAPH));
    req.params[1] === ',' && (lorem = lorem
        .split('\r\n')
    // .map(s => s.trim() + '.')
    // .filter(i => i !== '.')
    );
    res.json({
        // "data": {}
        "data": lorem
    });
}
exports.paragraph = paragraph;
//# sourceMappingURL=paragraphController.js.map