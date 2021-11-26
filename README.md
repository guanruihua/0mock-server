# 使用说明

> package.json 添加 '"type": "module"'

## 添加功能

> 支持某些指定字段多语言修改

### `apiServer([host[, port[, callback]]])`

> 不传就会是默认值
> callback(app): 这个app就是express的app, 方便开发者进行二次修改

## 虚拟接口服务器

> 使用 : `host:port/ + (加上以下配置)`
>
>- `[number](w|word|words)[,]` : 随机数量词
>- `[number](s|sentence|sentences)[,]` : 随机数量句子  
>- `[number](p|paragraph|paragraphs)[,]` : 随机数量自然段  
>- `[number]x[number].(jpg|png)[[背景颜色], [字体颜色]]` (rgb颜色不用#) : 随机图片  
>- `random,[value1 [, value2][, value3] ...]` : 多选一字符  
> 补充: 加上逗号`,`会变成数组形式

### 例如

> <http://localhost:3000/3p>,

### 代码案例

```js
import DevServer from 'rh-dev-mock-server'

const { apiServer, VirtualDao, loadApiByConfig, initTableApiConfig, Mock } = DevServer.default;

function apiServerCallback(app) {

 const config = {
  locale: {
   lang: 'localeStr',
   langs: ['zh_CN', 'en_US', 'zh_TW'],
   fields: ['desc']
  }
 }

 const vDao = new VirtualDao();
 vDao.init(
  'db',
  Mock.mock({
   'list|30-50': {
    'id': "@id",
    // uid: "@uuid",
    'type': '@name',
    'maxLength|1-30': 10,
    // 'desc': () => {
    //  return JSON.stringify(Mock.mock({
    //   zh_CN: '@name',
    //   en_US: '@name',
    //   zh_TW: '@name',
    //  }))
    // },
    "desc&&zh_CN,en_US,zh_TW": "@name",
    "shortURL|1": ["1", "2"],
   }
  })['list'],
 );

 loadApiByConfig(initTableApiConfig(
  'db',
  vDao,
  (data) => {
   return { code: '0', result: data, message: 'Successful' }
  },
  config
 ), app)

}

apiServer({
 callback: apiServerCallback
});
```
