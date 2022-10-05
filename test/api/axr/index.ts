import { allOriginal } from './allDashboard';
import { Mock } from 'rh-mock'
import { initTableApi } from '../../../src'
import { config as _config } from '../../constant'
import { db } from './structure'

_config.vDao.init( 'config', db['list'] || [] );

const config = _config.vDao['config']

export const axrApis = initTableApi('config', _config)
	.concat([
		{
			get: '/vr/alldashboard',
			callback: () => {
				return { code: '0', result: allOriginal, message: 'Successful' }
			}
		},
		{
			post: '/vr/dashboard/add',
			callback: (req) => {
				const { userId, name, desc, globalFilterConfig = {} } = req
				let dataIndex = -1
				config.map((item, index: number) => {
					if (item.id === userId) {
						dataIndex = index
					}
				})
				if (dataIndex < 0) {
					return { code: '0', result: config, message: 'Error' }
				}
				const newItem = JSON.parse(JSON.stringify(config[dataIndex]))
				const newId = Mock('@id')
				newItem.useDashboardId = newId
				newItem.dashboard.push({
					id: newId,
					name,
					desc,
					layouts: [],
					globalFilterConfig
				})

				config[dataIndex] = newItem
				return { code: '0', result: req, message: 'Successful' }
			}
		},
		{
			post: '/vr/config/deleteById',
			callback: (req) => {
				const { id, userId, useDashboardId } = req

				let dataIndex = -1
				config.map((item, index: number) => {
					if (item.id === userId) {
						dataIndex = index
					}
				})
				if (dataIndex < 0) {
					return { code: '0', result: config, message: 'Error' }
				}

				if (!id) return config

				let newItem = JSON.parse(JSON.stringify(config[dataIndex]))

				newItem.dashboard = newItem.dashboard.map(item => {
					if (item.id === useDashboardId) {
						item.layouts = item.layouts(itt => {
							return !itt.id === id
						})
					}
					return item
				})

				config[dataIndex] = newItem


				// const dashboardlist = config.selectByPath(`${dataIndex}.Ruihua.dashboard`)

				// config.map((item, index: number) => {
				// 	if (item.id === userId) {
				// 		dataIndex = index
				// 	}
				// })
				// if (dataIndex < 0) {
				// 	return { code: '0', result: config, message: 'Error' }
				// }

				// const list = config.selectByPath(`${dataIndex}.Ruihua.dashboard.0.layouts`)
				// let index = -1;
				// [].concat(list).forEach((item, i) => {
				// 	if (item.id === id) {
				// 		index = i
				// 	}
				// })
				// if (index > -1) {
				// 	config.delByPath(`0.Ruihua.dashboard.0.layouts.${index}`)
				// }

				return { code: '0', result: req, message: 'Successful' }
			}
		}
	])