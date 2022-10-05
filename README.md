# 使用说明

```shell
npm install -D canvas rh-dev-mock-server rh-mock ts-node-dev typescript
```

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
import { Mock } from 'rh-mock'
import { apiServer, loadApis, initTableApi } from 'rh-dev-mock-server'

const config = {
  locale: {
   lang: 'localeStr',
   langs: ['zh_CN', 'en_US', 'zh_TW'],
   fields: ['desc']
  }
 }

function apiServerCallback(app) {

 const vDao = new VirtualDao();
 vDao.init(
  'db',
  Mock({
   'list|30-50': {
    'id': "@id",
    // uid: "@uuid",
    'type': '@name',
    // 'maxLength|1-30': 10,
    "desc&&zh_CN,en_US,zh_TW": "@name",
    "shortURL|1": ["1", "2"],
   }
  })['list'],
 );

 loadApis(initTableApi(
  'db',
  vDao,
  (data) => {
   return { code: '0', result: data, message: 'Successful' }
  },
  config
 ), app)
}

apiServer({
 callback: apiServerCallback,
  port: 10086
});

// 控制台就有接口显示出来

```
