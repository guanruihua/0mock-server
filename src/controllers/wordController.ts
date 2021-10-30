import { LoremIpsum } from 'lorem-ipsum'
import { MAX_WORDS } from '../config'

exports.word = (req: any, res: any) => {
	
	let lorem = (new LoremIpsum()).generateWords(Math.min(parseInt(req.params[0]), MAX_WORDS))
	req.params[1] === ',' && (lorem = lorem.split(' '))
	res.json({ "data": lorem })

}

