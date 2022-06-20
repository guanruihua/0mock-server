import { Mock } from 'rh-mock';
import { apiServer, VirtualDao, loadApiByConfig, initTableApiConfig, Application } from '../server'

function apiServerCallback(app: Application): void {

	const config: any = {
		queryPage: {
			total: 'totalCount'
		},
		locale: {
			lang: 'localeStr',
			langs: ['zh_CN', 'en_US', 'zh_TW'],
			fields: ['desc']
		}
	}

	const vDao: any = new VirtualDao();
	vDao.init(
		'db',
		Mock({
			'list|30-50': {
				id: "@id",
				uid: "@uuid",
				type: '@name',
				'maxLength|1-30': 10,
				"desc&&zh_CN,en_US,zh_TW": "@name",
				"shortURL|1": ["1", "2"],
			}
		})['list'],
	);

	loadApiByConfig(initTableApiConfig(
		'db',
		vDao,
		(data: any) => {
			return { code: '0', result: data, message: 'Successful' }
		},
		config
	), app)

}

apiServer({
	callback: apiServerCallback,
	port: 3001
});