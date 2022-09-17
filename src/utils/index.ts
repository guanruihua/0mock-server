import { VDao } from 'rh-vr-dao'
import { Mock } from 'rh-mock'

// 生成 基础接口 配置
export function initTableApiConfig(
	tableName: string,
	vDao: VDao,
	resultParam?: any,
	config?: any
): {
	baseUrl?: string,
	get?: string,
	post?: string,
	callback: (...params: any[]) => any
}[] {
	const { baseUrl = '/' } = config

	return [
		{
			'get': `${baseUrl}${tableName}/query`,
			callback: (params: any): any => {
				console.log(tableName, 'query', params, '');
				if (resultParam) {
					return resultParam(vDao[tableName])
				}
				return vDao[tableName];
			}
		},

		{
			'get': `${baseUrl}${tableName}/queryPage`,
			callback: (params: any): any => {
				console.log(tableName, 'queryPage', params);

				const { pageSize = 10, pageNo = 1, ...param } = params || {}
				const result: any = vDao[tableName].selectPage(pageSize, pageNo, param)
				if (resultParam) {
					return resultParam({
						data: result,
						total: vDao[tableName].length,
						pageNo,
						pageSize
					})
				}
				return result;
			}
		},

		{
			'get': `${baseUrl}${tableName}/queryByParam`,
			callback: (params: any): any => {
				console.log(tableName, 'queryByParam', params);

				const result: any = vDao[tableName].select(params)
				if (resultParam) { return resultParam(result) }
				return result;
			}
		},
		{
			'post': `${baseUrl}${tableName}/save`,
			callback: (params: any): any => {
				console.log(tableName, 'save', params);
				const { lang, fields = [],
					langs = ['zh_CN', 'en_US', 'zh_TW']
				} = config.locale || {}
				if (params.id) {
					const result: any = vDao[tableName].select({ id: params.id })[0]

					if (lang) {
						fields.forEach((key: string): void => {
							const val: any = JSON.parse(result[key] || "{}")
							params[lang] && (val[params[lang]] = params[key])
							params[key] = JSON.stringify(val)
						})
						delete params[lang]
					}
					vDao['db'].update({ id: params.id }, params)

					if (resultParam) { return resultParam(result) }
					return result;

				} else {
					let tmpVal: any = undefined;
					fields.forEach((key: string, index: number): void => {
						if (index === 0) {
							tmpVal = params[key];
							params[key] = {};
						}
						langs.forEach((item: string): void => {
							params[key][item] = tmpVal;
						})
						params[key] = JSON.stringify(params[key])
					})
					params.id = Mock("@id")
					delete params[lang]
					vDao[tableName].add(params)
					if (resultParam) { return resultParam({}) }
					return {};
				}
			},
		},
		{
			'post': `${baseUrl}${tableName}/del`,
			callback: (params: any): any => {
				console.log(tableName, 'del', params);
				// eslint-disable-next-line
				const { pageNo, pageSize, ...param } = params;
				const result: any = vDao[tableName].del(param)
				if (resultParam) { return resultParam(result) }
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
					res.send(item.callback(req.query, req, res))
				});
			}
			if (item.post) {
				app.post(item.post, (req: any, res: any): void => {
					res.json(item.callback(req.query, req, res))
					// res.json(item.callback(req.body, req, res))
				})
			}
		} catch (error) {
			console.log('error', error);
		}

	})
}