import { apiServer } from '../server'
import { VirtualDao } from '../dao'
import { loadApiByConfig } from '../utils'

function initTableApiConfig(tableName: string, vDao: VirtualDao, resultParam?: any) {
	return [
		{
			'get': `/${tableName}/query`,
			callback: (params: any): any => {
				console.log(tableName, 'query', params);

				if (resultParam) return resultParam(vDao[tableName])
				return vDao[tableName];
			}
		},

		{
			'get': `/${tableName}/queryPage`,
			callback: (params: any): void => {
				console.log(tableName, 'queryPage', params);

				const { pageSize = 10, pageNo = 1, ...param } = params || {}
				let result: any = vDao[tableName].selectPage(param, pageSize, pageNo)
				if (resultParam) return resultParam({ data: result, total: result.length, pageNo, pageSize })
				return result;
			}
		},

		{
			'get': `/${tableName}/queryByParam`,
			callback: (params: any): void => {
				console.log(tableName, 'queryByParam', params);

				let result: any = vDao[tableName].select(params)
				if (resultParam) return resultParam(result)
				return result;
			}
		},
		{
			'post': `/${tableName}/save`,
			callback: (params: any): void => {
				console.log(tableName, 'save', params);

				let result: any = vDao[tableName].select(params)

				if (params.id) {
					result = vDao[tableName].update(params)
				} else {
					result = vDao[tableName].add(params)
				}

				if (resultParam) return resultParam(result)
				return result;
			}
		},
		{
			'post': `/${tableName}/del`,
			callback: (params: any): void => {
				console.log(tableName, 'del', params);
				const { pageNo, pageSize, ...param } = params;
				let result: any = vDao[tableName].del(param)
				if (resultParam) return resultParam(result)
				return result;
			}
		},
	];
}

apiServer({
	callback: (app: any) => {

		const vDao: VirtualDao = new VirtualDao();
		vDao.init('db', [], app);
		vDao.insert('db', [
			{ id: '1111', },
			{ id: '2' },
			{ id: '11', },
			{ id: '21' },
			{ id: '12', },

			{ id: '22' },
			{ id: '13', },
			{ id: '23' },
			{ id: '14', },
			{ id: '25' },

			{ id: '15', },
			{ id: '26' },
		])

		let list: any[] = initTableApiConfig(
			'db',
			vDao,
			(data: any) => {
				return { code: '0', result: data }
			}
		)

		loadApiByConfig(list, app)


		app.get('/get', (req: Request, res: Response) => {
			res.send({ ...req.query })
		})
		app.post('/post', (req: Request, res: Response) => {
			res.json({ ...req.body })
		})
	}
});