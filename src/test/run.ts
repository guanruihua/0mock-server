import { apiServer } from '../server'
import { VirtualDao } from '../dao'
import { loadApiByConfig, initTableApiConfig } from '../utils'
import Mock from 'rh-mock'


apiServer({
	callback: (app: any) => {

		const vDao: VirtualDao = new VirtualDao();
		vDao.init('db', [], app);
		vDao.insert('db',
			Mock.mock({
				'list|10-20': {
					id: '@name',
				}
			})['list']
		)

		loadApiByConfig(initTableApiConfig(
			'db',
			vDao,
			(data: any) => {
				return { code: '0', result: data }
			}
		), app)


		app.get('/get', (req: Request, res: Response) => {
			res.send({ ...req.query })
		})
		app.post('/post', (req: Request, res: Response) => {
			res.json({ ...req.body })
		})
	}
});