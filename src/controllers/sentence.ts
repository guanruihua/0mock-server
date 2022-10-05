import { Request, Response } from 'express'
import { LoremIpsum } from 'lorem-ipsum'
import { MAX_SENTENCE } from '../lib/config'
import { loadApis } from '../lib'

// eslint-disable-next-line
export function sentence(param: Record<string, any>, req: Request, res: Response): Record<string, any> {
	let lorem: any = (new LoremIpsum()).generateSentences(Math.min(parseInt(req.params[0]), MAX_SENTENCE))
	if (req.params[1] === ',') {
		return lorem
			.split('.')
			.map((s: any): string => s.trim() + '.')
			.filter((i: any): boolean => i !== '.')
	}

	return lorem
}


loadApis([{
	get: /\/(\d+)(?:s|sentence|sentences)(,*)$/,
	callback: sentence
}])