import { VirtualDao } from '../dao'

export interface iApi {
	[key: string]: string;
	callback: (params: any) => any;
}

// const apiList = [
// 	{
// 		'post': '/postA',
// 		callback: (params: any): any => {
// 			return params
// 		}
// 	},
// 	{
// 		'get': '/getA',
// 		callback: (params: any): void => {
// 			return params
// 		}
// 	}
// ]

export function loadApiByConfig(apiList, app) {
	apiList.forEach((item: iApi): void => {
		try {
			console.log(item)
			if (item.get) {
				app.get(item.get, (req: any, res: any): void => {
					res.send(item.callback(req.query))
				});
			}
			if (item.post) {
				app.post(item.post, (req: Request, res: Response): void => {
					res.json(item.callback(req.body))
				})
			}
		} catch (error) {
			console.log('error', error);
		}

	})
}