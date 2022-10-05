import { Mock } from 'rh-mock';
import { initTableApi } from '../../src'
import { config } from '../constant'

config.vDao.init(
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

export const dbApis = initTableApi('db', config)