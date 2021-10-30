import { LoremIpsum } from 'lorem-ipsum'
import { MAX_SENTENCE } from '../config'

exports.sentence = (req: any, res: any) => {

	let lorem = (new LoremIpsum()).generateSentences(Math.min(parseInt(req.params[0]), MAX_SENTENCE))
	req.params[1] === ',' && (
		lorem = lorem
			.split('.')
			.map((s: string): string => s.trim() + '.')
			.filter((i: string): boolean => i !== '.'))

	res.json({ "data": lorem })

}
