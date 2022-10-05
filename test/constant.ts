import { VDao } from '../src/index'

export const config = {
	vDao: new VDao(),
	queryPage: {
		total: 'totalCount'
	},
	locale: {
		lang: 'localeStr',
		langs: ['zh_CN', 'en_US', 'zh_TW'],
		fields: ['desc']
	},
	baseUrl: '/vr/',
	analysisParam: (data: Record<string, any>) => {
		return { code: '0', result: data, message: 'Successful' }
	}
}