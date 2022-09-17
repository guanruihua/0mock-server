"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
function random(req, res) {
    const randomSource = req.params[0].split(',');
    res.json({ "data": randomSource[Math.floor(Math.random() * randomSource.length)] });
}
exports.random = random;
//# sourceMappingURL=randomController.js.map