import app from './app'
import { HOST, PORT } from './config'
import { Request, Response } from 'express'
import { loadApiByConfig } from './utils'


exports.apiServer = function (param?: { [key: string]: any }) {
  const { host = HOST, port = PORT, callback } = param || {};
  callback && callback(app);
  app.listen(port, host, () => {
    console.log(`listening at http://${host}:${port}`);
  })
}