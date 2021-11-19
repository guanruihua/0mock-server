import { apiServer } from '../server'
import { VirtualDao } from '../dao'
import { Application } from 'express'
import { loadApiByConfig, initTableApiConfig } from '../utils'
import Mock from 'rh-mock'

function apiServerCallback(app: Application): void {

	const vDao: any = new VirtualDao();
	vDao.init('db', Mock.mock({
		'list|30-50': {
			id: '@name',
			code: '@name',
			name: '@name',
		}
	})['list']);

	loadApiByConfig(initTableApiConfig(
		'db',
		vDao,
		(data: any) => {
			return { code: '0', result: data }
		}
	), app)

}

apiServer({
	callback: apiServerCallback
});