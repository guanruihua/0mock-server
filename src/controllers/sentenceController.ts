import { LoremIpsum } from 'lorem-ipsum'
import { MAX_SENTENCE } from '../config'

export function sentence(req: any, res: any): void {

	let lorem: any = (new LoremIpsum()).generateSentences(Math.min(parseInt(req.params[0]), MAX_SENTENCE))
	req.params[1] === ',' && (
		lorem = lorem
			.split('.')
			.map((s: any): string => s.trim() + '.')
			.filter((i: any): boolean => i !== '.'))

	res.json({ "data": lorem })

}
