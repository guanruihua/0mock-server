import { initTableApiConfig, VDao } from '../../..'
import { config as _config } from '../../constant'
import { db } from './structure'

const vDao: any = new VDao();
vDao.init(
	'config',
	[db]
);

const config = vDao['config']

export const axrApis = initTableApiConfig('config', vDao, (data: any) => {
	return { code: '0', result: data, message: 'Successful' }
}, _config).concat([
	{
		post: '/vr/config/deleteById',
		callback: (req) => {
			const { id } = req
			if(!id) return config
			const list = config.selectByPath("0.Ruihua.dashboard.0.layouts")
			let index = -1;
			[].concat(list).forEach((item, i)=>{
				if(item.id === id){
					index = i
				}
			})
			if(index >-1){
				config.delByPath(`0.Ruihua.dashboard.0.layouts.${index}`)
			}
			return config
		}
	}
])