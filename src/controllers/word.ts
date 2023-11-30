import { Request, Response } from 'express'
import { LoremIpsum } from 'lorem-ipsum'
import { MAX_WORDS } from '../lib/config'
import { loadApis } from '../lib/loadApis'

// eslint-disable-next-line
export function word(param: Record<string, any>, req: Request, res: Response) {

	const lorem: any = (new LoremIpsum()).generateWords(Math.min(parseInt(req.params[0]), MAX_WORDS))
	if (req.params[1] === ',' && typeof lorem === 'string') { return lorem.split(' ') }

	return lorem
}

loadApis([{
	get: /\/(\d+)(?:w|word|words)(,*)$/,
	callback: word
}])
