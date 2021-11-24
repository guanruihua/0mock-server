import app from './app'
import { HOST, PORT } from './config'
import Mock from 'rh-mock'
import { Application } from 'express'
import { VirtualDao } from './dao'
import { loadApiByConfig, initTableApiConfig } from './utils'

function apiServer(param?: { [key: string]: any }): void {
  const { host = HOST, port = PORT, callback } = param || {};
  callback && callback(app);
  app.listen(port, host, () => {
    console.log(`listening at http://${host}:${port}`);
  })
}


const DevServer = Object.assign(
  {
    apiServer,
  },
  {
    Mock,
    VirtualDao,
    loadApiByConfig,
    initTableApiConfig,
    Application,
  }
)

export default DevServer