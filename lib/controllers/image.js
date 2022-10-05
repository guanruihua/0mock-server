"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = void 0;
const canvas_1 = require("canvas");
const loadApis_1 = require("../lib/loadApis");
const lib_1 = require("../lib");
function isHexColor(hex) {
    return typeof hex === 'string'
        && hex.length === 6
        && !isNaN(Number('0x' + hex));
}
// eslint-disable-next-line
function image(param, req, res) {
    // eslint-disable-next-line
    let [_width, _height, format, bgColor, textColor] = Object.values(req.params);
    const width = Math.min(parseInt(_width), lib_1.IMAGE_MAX_WIDTH);
    const height = Math.min(parseInt(_height), lib_1.IMAGE_MAX_HEIGTH);
    typeof bgColor === 'undefined' && (bgColor = '#333333');
    isHexColor(bgColor) && (bgColor = `#${bgColor}`);
    typeof textColor === 'undefined' && (textColor = '#ffffff');
    isHexColor(textColor) && (textColor = `#${textColor}`);
    const canvas = (0, canvas_1.createCanvas)(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    const fontSize = width / 10;
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px Sans`;
    const text = `${width} x ${height}`;
    const textWidht = ctx.measureText(text).width;
    ctx.fillText(text, width / 2 - textWidht / 2, height / 2);
    res.setHeader('Content-Type', `image/${format}`);
    if (format === 'png') {
        canvas.pngStream().pipe(res);
    }
    else {
        canvas.jpegStream().pipe(res);
    }
}
exports.image = image;
(0, loadApis_1.loadApis)([
    {
        get: /\/(\d+)x(\d+)\.(jpg|png)(?:,([a-zA-Z0-9]+?),([a-zA-Z0-9]+?))*$/,
        callback: image,
        useCallbackResult: false
    }
]);
//# sourceMappingURL=image.js.map