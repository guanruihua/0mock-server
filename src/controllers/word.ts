import { Request, Response } from 'express'
import { LoremIpsum } from 'lorem-ipsum'
import { MAX_WORDS } from '../lib'
import { loadApis } from '../lib'

// eslint-disable-next-line
export function word(param: Record<string, any>, req: Request, res: Response) {

	let lorem: any = (new LoremIpsum()).generateWords(Math.min(parseInt(req.params[0]), MAX_WORDS))
	if (req.params[1] === ',') return lorem.split(' ')

	return lorem
}

loadApis([{
	get: /\/(\d+)(?:w|word|words)(,*)$/,
	callback: word
}])
