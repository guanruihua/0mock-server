import { VirtualDao, initTableApiConfig, VDao } from '../../../server'
import { config as _config } from '../../constant'
import { db } from './structure'

const vDao: any = new VDao();
// const vDao: any = new VirtualDao();
vDao.init(
	'config',
	// originalData
	[db]
);

const config = vDao['config']
console.log(config.selectByPath('this'))

export const axrApis = initTableApiConfig('config', vDao, (data: any) => {
	return { code: '0', result: data, message: 'Successful' }
}, _config).concat([
	{
		post: '/vr/config/deleteById',
		callback: (req) => {
			// console.log(req, vDao)
			console.log(config)
			return req
			// return vDao['config'].selectByPath('this')
		}
	}
])