

exports.singleReturnParams = (req: any, res: any): void => {
	res.send(req.query)
}