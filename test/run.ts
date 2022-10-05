import { apiServer, loadApis } from '../src'
import { api } from './api'

apiServer({
	callback: ()=> loadApis(api),
	port: 13000
});