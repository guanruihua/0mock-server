import express, { Request, Response } from 'express'
import bodyParser, { json, urlencoded } from 'body-parser'
import controller from './controllers'
import cors from 'cors'
import morgan from 'morgan'

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config()

    // 引入路由
    this.app.get('/', (req: Request, res: Response) => {
      res.send({ message: 'Hello rh-dev-mock-server ' })
    })

    controller(this.app);
  }
  private config() {
    //开启 cors
    this.app.use(cors())
    //支持  application/json类型 发送数据
    this.app.use(json());
    //支持 application/x-www-form-urlencoded 发送数据
    this.app.use(urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.app.all('*', function (req: Request, res: Response, next: any): void {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', '*');
      res.header('Content-Type', 'application/json;charset=utf-8');
      next();
    });
    //日志中间件
    this.app.use(morgan(function (tokens: any, req: Request, res: Response): any {
      let url: string = tokens.url(req, res);
      if (url.indexOf('/sockjs-node/info?t=') > -1) {
        return;
      }
      return [
        `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)} content-length: ${tokens.res(req, res, 'content-length')} - ${tokens['response-time'](req, res)}ms`
      ]
    }))
    // this.app.use(morgan('dev'))
  }

}
export default new App().app
