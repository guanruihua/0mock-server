import { createCanvas } from 'canvas'
import { Request, Response } from 'express'
import { loadApis } from '../lib/loadApis'
import { IMAGE_MAX_HEIGTH, IMAGE_MAX_WIDTH } from '../lib'

function isHexColor(hex: any): boolean {
	return typeof hex === 'string'
		&& hex.length === 6
		&& !isNaN(Number('0x' + hex))
}

// eslint-disable-next-line
export function image(param: Record<string, any>, req: Request, res: Response): void {

	// eslint-disable-next-line
	let [_width, _height, format, bgColor, textColor]: string[] = Object.values(req.params)

	const width = Math.min(parseInt(_width), IMAGE_MAX_WIDTH)
	const height = Math.min(parseInt(_height), IMAGE_MAX_HEIGTH)

	typeof bgColor === 'undefined' && (bgColor = '#333333')
	isHexColor(bgColor) && (bgColor = `#${bgColor}`)

	typeof textColor === 'undefined' && (textColor = '#ffffff')
	isHexColor(textColor) && (textColor = `#${textColor}`)

	const canvas: any = createCanvas(width, height)
	const ctx = canvas.getContext('2d')

	ctx.fillStyle = bgColor
	ctx.fillRect(0, 0, width, height)

	const fontSize = width / 10
	ctx.fillStyle = textColor
	ctx.font = `${fontSize}px Sans`

	const text = `${width} x ${height}`
	const textWidht = ctx.measureText(text).width;

	ctx.fillText(text, width / 2 - textWidht / 2, height / 2)

	res.setHeader('Content-Type', `image/${format}`)
	if (format === 'png') {
		canvas.pngStream().pipe(res)
	} else {
		canvas.jpegStream().pipe(res)
	}
}

loadApis([
	{
		get: /\/(\d+)x(\d+)\.(jpg|png)(?:,([a-zA-Z0-9]+?),([a-zA-Z0-9]+?))*$/,
		callback: image,
		useCallbackResult: false
	}
])