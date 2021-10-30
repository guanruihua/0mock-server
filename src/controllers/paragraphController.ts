import { LoremIpsum } from 'lorem-ipsum'
import { MAX_PARAGRAPH } from '../config'

exports.paragraph = (req:any, res:any) => {
	let lorem:any = (new LoremIpsum()).generateParagraphs(Math.min(parseInt(req.params[0]),MAX_PARAGRAPH))
	req.params[1] === ',' && (lorem = lorem
		.split('\r\n')
		// .map(s => s.trim() + '.')
		// .filter(i => i !== '.')
	)

	res.json({
		// "data": {}
		"data": lorem
	})

}
