export function random(req: any, res: any): void {
	const randomSource = req.params[0].split(',')
	res.json({ "data": randomSource[Math.floor(Math.random() * randomSource.length)] })

}