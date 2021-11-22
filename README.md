# 使用说明

## 添加功能

> 支持某些指定字段多语言修改

## 依赖

```json
 "express": "^4.17.1",
 "lorem-ipsum": "^2.0.4",
 "nodemon": "^2.0.13",
 "canvas":"^2.8.0",
 "cors":"2.8.5",
```

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
