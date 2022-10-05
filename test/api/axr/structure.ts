import { Mock } from 'rh-mock';
import { originalData } from './originalData'

export const db = Mock({
	'list|1-1': {
		// 'list|1-3': {
		name: 'Ruihua',
		id: '@id',
		useDashboardId: '',
		'dashboard': [{
			id: '@id',
			name: '@name',
			desc: '@title',
			layouts: originalData,
			globalFilterConfig: {},
		}, {
			id: '@id',
			name: '@name',
			desc: '@title',
			layouts: [],
			globalFilterConfig: {},
		}
		]
	}
})

db['list'][0]['useDashboardId'] = db['list'][0]['dashboard'][0].id

// console.log(db['list'][0]['dashboard'][0])