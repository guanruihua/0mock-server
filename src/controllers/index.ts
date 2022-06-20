import { Application } from 'express'
import { image } from './imageController'
import { word } from './wordController'
import { random } from './randomController'
import { sentence } from './sentenceController'
import { paragraph } from './paragraphController'

export function singleReturnGetParams(req: any, res: any): void {
	res.send(req.query)
}

export function singleReturnPostParams(req: any, res: any): void {
	res.json({ ...req.query, ...req.body })
}

export default function controller(app: Application): void {
	app.get(/\/(\d+)(?:p|paragraph|paragraphs)(,*)$/, paragraph)
	app.get(/\/(\d+)(?:w|word|words)(,*)$/, word)
	app.get(/\/(\d+)(?:s|sentence|sentences)(,*)$/, sentence)
	app.get(/\/(\d+)x(\d+)\.(jpg|png)(?:,([a-zA-Z0-9]+?),([a-zA-Z0-9]+?))*$/, image)
	app.get(/\/random,(.+?)$/, random)

	app.post(/\/post\/(?:vrp|virtualPost)/, singleReturnPostParams)
	app.post('/post', singleReturnPostParams)
	app.get(/\/get\/(?:vrg|virtualGet)$/, singleReturnGetParams)
	app.get('/get', singleReturnGetParams)
}