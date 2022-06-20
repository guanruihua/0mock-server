import { Application } from 'express'
import { image } from './imageController'
import { word } from './wordController'
import { random } from './randomController'
import { sentence } from './sentenceController'
import { paragraph } from './paragraphController'
import * as virtualGet from './virtualGet'
import * as virtualPost from './virtualPost'

export default function controller(app: Application): void {
	app.get(/\/(\d+)(?:p|paragraph|paragraphs)(,*)$/, paragraph)
	app.get(/\/(\d+)(?:w|word|words)(,*)$/, word)
	app.get(/\/(\d+)(?:s|sentence|sentences)(,*)$/, sentence)
	app.get(/\/(\d+)x(\d+)\.(jpg|png)(?:,([a-zA-Z0-9]+?),([a-zA-Z0-9]+?))*$/, image)
	app.get(/\/random,(.+?)$/, random)

	app.post(/\/post\/(?:vrp|virtualPost)/, virtualPost.singleReturnParams)
	app.post('/post', virtualPost.singleReturnParams)
	app.get(/\/get\/(?:vrg|virtualGet)$/, virtualGet.singleReturnParams)
	app.get('/get', virtualGet.singleReturnParams)
}