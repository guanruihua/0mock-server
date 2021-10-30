import { createCanvas } from 'canvas'
import { IMAGE_MAX_HEIGTH, IMAGE_MAX_WIDTH } from '../config'

exports.image = (req: any, res: any): void => {
	
	let [width, height, format, bgColor, textColor] = Object.values(req.params)

	width = Math.min(parseInt(width), IMAGE_MAX_WIDTH)
	height = Math.min(parseInt(height), IMAGE_MAX_HEIGTH)
	typeof bgColor === 'undefined' && (bgColor = '#333333')
	isHexColor(bgColor) && (bgColor = `#${bgColor}`)
	typeof textColor === 'undefined' && (textColor = '#ffffff')
	isHexColor(textColor) && (textColor = `#${textColor}`)


	const canvas = createCanvas(width, height)
	const ctx = canvas.getContext('2d')

	ctx.fillStyle = bgColor
	ctx.fillRect(0, 0, width, height)

	let fontSize = width / 10
	ctx.fillStyle = textColor
	ctx.font = `${fontSize}px Sans`

	let text = `${width} x ${height}`
	let textWidht = ctx.measureText(text).width;

	ctx.fillText(text, width / 2 - textWidht / 2, height / 2)

	res.setHeader('Content-Type', `image/${format}`)
	if (format === 'png') {
		canvas.pngStream().pipe(res)
	} else {
		canvas.jpegStream().pipe(res)
	}
}

function isHexColor(hex: any): boolean {
	return typeof hex === 'string'
		&& hex.length === 6
		&& !isNaN(Number('0x' + hex))
}