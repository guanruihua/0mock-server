import { apiServer } from '../server'
import { VirtualDao } from '../dao'
import { Application } from 'express'
import { loadApiByConfig, initTableApiConfig } from '../utils'
import Mock from 'rh-mock'

function apiServerCallback(app: Application): void {

	const config: any = {
		locale: {
			lang: 'localeStr',
			langs: ['zh_CN', 'en_US', 'zh_TW'],
			fields: ['desc']
		}
	}

	const vDao: any = new VirtualDao();
	vDao.init(
		'db',
		Mock.mock({
			'list|30-50': {
				id: "@id",
				// uid: "@uuid",
				type: '@name',
				'maxLength|1-30': 10,
				desc: () => {
					return JSON.stringify(Mock.mock({
						zh_CN: '@name',
						en_US: '@name',
						zh_TW: '@name',
					}))
				},
				"shortURL|1": ["1", "2"],
			}
		})['list'],
	);

	loadApiByConfig(initTableApiConfig(
		'db',
		vDao,
		(data: any) => {
			return { code: '0', result: data }
		}
	), app, config)

	app.post('/db/saveByLang', (req: any, res: any) => {
		let param: any = req.body
		if (param.id) {
			let result: any = vDao.db.select({ id: param.id })[0]
			let _desc: any = JSON.parse(result.desc || "{}")
			param.localeStr && (_desc[param.localeStr] = param['desc'])
			param['desc'] = JSON.stringify(_desc);
			delete param.localeStr
			vDao['db'].update({ id: param.id }, param)
		} else {
			delete param.localeStr
			param.desc = JSON.stringify({ en_US: param.desc, zh_CN: param.desc, zh_TW: param.desc })
			param.id = Mock.mock("@id")
			vDao.db.add(param)
		}
		res.json({ code: '0', data: {} })
	})

}

apiServer({
	callback: apiServerCallback
});