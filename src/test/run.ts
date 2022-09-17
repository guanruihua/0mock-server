import { apiServer, loadApiByConfig, Application } from '../server'
import { api } from './api'

function apiServerCallback(app: Application): void {
	loadApiByConfig(api, app)
}

apiServer({
	callback: apiServerCallback,
	port: 13000
});