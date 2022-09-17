import { Mock } from 'rh-mock';
import { originalData } from './originalData'

const db = Mock({
	'Ruihua': {
		id: '@id',
		useDashboardId: '',
		'dashboard|2-4': {
			id: '@id',
			name: '@name',
			layouts: originalData,
			globalFilterConfig: {},
		}
	}
})

db['Ruihua']['useDashboardId'] = db['Ruihua']['dashboard'][0].id


export { db } 