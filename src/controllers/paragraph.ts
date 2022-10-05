import { Request, Response } from 'express'
import { LoremIpsum } from 'lorem-ipsum'
import { loadApis } from '../lib/loadApis'
import { MAX_PARAGRAPH } from '../lib/config'

// eslint-disable-next-line
export function callback(param: Record<string, any>, req: Request, res: Response): void {
	let lorem: any = (new LoremIpsum()).generateParagraphs(Math.min(parseInt(req.params[0]), MAX_PARAGRAPH))
	req.params[1] === ',' && (lorem = lorem.split('\r\n'))

	res.json({
		"data": lorem
	})
}

loadApis([{
	get: /\/(\d+)(?:p|paragraph|paragraphs)(,*)$/,
	callback,
}])