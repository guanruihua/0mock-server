import app from './app'
import { HOST, PORT } from './config'

export function apiServer(param?: { [key: string]: any }): void {
  const { host = HOST, port = PORT, callback } = param || {};
  callback && callback(app);
  app.listen(port, host, () => {
    console.log(`listening at http://${host}:${port}`);
  })
}