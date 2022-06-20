export function singleReturnParams(req: any, res: any): void {
	res.json({ ...req.query, ...req.body })
}