import { LoremIpsum } from 'lorem-ipsum'
import { MAX_WORDS } from '../config'

export function word(req: any, res: any) {

	let lorem: any = (new LoremIpsum()).generateWords(Math.min(parseInt(req.params[0]), MAX_WORDS))
	req.params[1] === ',' && (lorem = lorem.split(' '))
	res.json({ "data": lorem })

}

