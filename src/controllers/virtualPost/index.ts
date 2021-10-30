exports.singleReturnParams = (req: any, res: any): void => {
	// console.log(req.body)
	// console.log(req.query)
	// console.log(req.params)

	res.json({ ...req.query, ...req.body })
}