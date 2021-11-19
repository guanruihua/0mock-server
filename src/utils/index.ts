import { VirtualDao } from '../dao'

export function initTableApiConfig(tableName: string, vDao: VirtualDao, resultParam?: any): {
	'get'?: string,
	'post'?: string,
	callback: (params: any) => any
}[] {
	return [
		{
			'get': `/${tableName}/query`,
			callback: (params: any): any => {
				console.log(tableName, 'query', params, '');

				if (resultParam) return resultParam(vDao[tableName])
				return vDao[tableName];
			}
		},

		{
			'get': `/${tableName}/queryPage`,
			callback: (params: any): any => {
				console.log(tableName, 'queryPage', params);

				const { pageSize = 10, pageNo = 1, ...param } = params || {}
				let result: any = vDao[tableName].selectPage(param, pageSize, pageNo)
				if (resultParam) return resultParam({ data: result, total: result.length, pageNo, pageSize })
				return result;
			}
		},

		{
			'get': `/${tableName}/queryByParam`,
			callback: (params: any): any => {
				console.log(tableName, 'queryByParam', params);

				let result: any = vDao[tableName].select(params)
				if (resultParam) return resultParam(result)
				return result;
			}
		},
		{
			'post': `/${tableName}/save`,
			callback: (params: any): any => {
				console.log(tableName, 'save', params);

				let result: any = vDao[tableName].select(params)

				if (params.id) {
					result = vDao[tableName].update(params)
				} else {
					result = vDao[tableName].add(params)
				}

				if (resultParam) return resultParam(result)
				return result;
			}
		},
		{
			'post': `/${tableName}/del`,
			callback: (params: any): any => {
				console.log(tableName, 'del', params);
				const { pageNo, pageSize, ...param } = params;
				let result: any = vDao[tableName].del(param)
				if (resultParam) return resultParam(result)
				return result;
			}
		},
	];
}

export function loadApiByConfig(apiList: any[], app: any): void {
	apiList.forEach((item: any): void => {
		try {
			console.log(item)
			if (item.get) {
				app.get(item.get, (req: any, res: any): void => {
					res.send(item.callback(req.query))
				});
			}
			if (item.post) {
				app.post(item.post, (req: any, res: any): void => {
					res.json(item.callback(req.body))
				})
			}
		} catch (error) {
			console.log('error', error);
		}

	})
}