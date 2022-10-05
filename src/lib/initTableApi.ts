import { VDao } from 'rh-vr-dao'
import { Mock } from 'rh-mock'

interface TableApiConfig {
	baseUrl?: string
	locale?: {
		lang?: string
		langs?: string[]
		fields?: string[]
		[key: string]: any
	}
	analysisParam?: (params: any) => any
	vDao: VDao,
	[key: string]: any
}

/**
 * @description 生成 基础接口 配置
 */
export function initTableApi(
	tableName: string,
	config?: TableApiConfig
): {
	baseUrl?: string,
	get?: string,
	post?: string,
	callback: (...params: any[]) => any
}[] {
	const {
		baseUrl = '/', vDao, locale = {},
		analysisParam = (params: any) => params
	} = config || {}

	return [
		{
			'get': `${baseUrl}${tableName}/query`,
			callback: (params: Record<string, any>): any => {
				console.log(tableName, 'query', params);
				if (analysisParam) {
					return analysisParam(vDao[tableName])
				}
				return vDao[tableName];
			}
		},

		{
			'get': `${baseUrl}${tableName}/queryPage`,
			callback: (params: Record<string, any>): any => {
				console.log(tableName, 'queryPage', params);

				const { pageSize = 10, pageNo = 1, ...param } = params || {}
				const result: any = vDao[tableName].selectPage(pageSize, pageNo, param)
				if (analysisParam) {
					return analysisParam({
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
			callback: (params: Record<string, any>): any => {
				console.log(tableName, 'queryByParam', params);

				const result: any = vDao[tableName].select(params)
				if (analysisParam) { return analysisParam(result) }
				return result;
			}
		},
		{
			'post': `${baseUrl}${tableName}/save`,
			callback: (params: Record<string, any>): any => {
				console.log(tableName, 'save', params);
				const {
					lang,
					fields = [],
					langs = ['zh_CN', 'en_US', 'zh_TW']
				} = locale || {}
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
					vDao[tableName].update({ id: params.id }, params)

					if (analysisParam) { return analysisParam(result) }
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
					if (analysisParam) { return analysisParam({}) }
					return {};
				}
			},
		},
		{
			'post': `${baseUrl}${tableName}/saveJson`,
			callback: (params: Record<string, any>): any => {
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
					vDao[tableName].update({ id: params.id }, params)

					if (analysisParam) { return analysisParam(result) }
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
					if (analysisParam) { return analysisParam({}) }
					return {};
				}
			},
		},
		{
			'post': `${baseUrl}${tableName}/del`,
			callback: (params: Record<string, any>): any => {
				console.log(tableName, 'del', params);
				// eslint-disable-next-line
				const { pageNo, pageSize, ...param } = params;
				const result: any = vDao[tableName].del(param)
				if (analysisParam) { return analysisParam(result) }
				return result;
			}
		},
	];
}