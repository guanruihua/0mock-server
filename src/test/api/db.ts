import { Mock } from 'rh-mock';
import { VDao, initTableApiConfig } from '../../server'
import { config } from '../constant'

const vDao: any = new VDao();
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

export const dbApis = initTableApiConfig('db', vDao, (data: any) => {
	return { code: '0', result: data, message: 'Successful' }
}, config)