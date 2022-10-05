import { HOST, PORT } from './config'
import { color } from 'rh-color'
import { app } from './app'

export function apiServer(param?: { [key: string]: any }): void {
	const { host = HOST, port = PORT, callback } = param || {};
	callback && callback(app);
	app.listen(port, host, () => {
		console.log(color(`listening at http://${host==='0.0.0.0'?'localhost':host}:${port}`, 'Grey'));
	})
}