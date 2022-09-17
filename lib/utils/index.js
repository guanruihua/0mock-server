"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApiByConfig = exports.initTableApiConfig = void 0;
const rh_mock_1 = require("rh-mock");
// 生成 基础接口 配置
function initTableApiConfig(tableName, vDao, resultParam, config) {
    const { baseUrl = '/' } = config;
    return [
        {
            'get': `${baseUrl}${tableName}/query`,
            callback: (params) => {
                console.log(tableName, 'query', params, '');
                if (resultParam) {
                    return resultParam(vDao[tableName]);
                }
                return vDao[tableName];
            }
        },
        {
            'get': `${baseUrl}${tableName}/queryPage`,
            callback: (params) => {
                console.log(tableName, 'queryPage', params);
                const { pageSize = 10, pageNo = 1, ...param } = params || {};
                const result = vDao[tableName].selectPage(pageSize, pageNo, param);
                if (resultParam) {
                    return resultParam({
                        data: result,
                        total: vDao[tableName].length,
                        pageNo,
                        pageSize
                    });
                }
                return result;
            }
        },
        {
            'get': `${baseUrl}${tableName}/queryByParam`,
            callback: (params) => {
                console.log(tableName, 'queryByParam', params);
                const result = vDao[tableName].select(params);
                if (resultParam) {
                    return resultParam(result);
                }
                return result;
            }
        },
        {
            'post': `${baseUrl}${tableName}/save`,
            callback: (params) => {
                console.log(tableName, 'save', params);
                const { lang, fields = [], langs = ['zh_CN', 'en_US', 'zh_TW'] } = config.locale || {};
                if (params.id) {
                    const result = vDao[tableName].select({ id: params.id })[0];
                    if (lang) {
                        fields.forEach((key) => {
                            const val = JSON.parse(result[key] || "{}");
                            params[lang] && (val[params[lang]] = params[key]);
                            params[key] = JSON.stringify(val);
                        });
                        delete params[lang];
                    }
                    vDao['db'].update({ id: params.id }, params);
                    if (resultParam) {
                        return resultParam(result);
                    }
                    return result;
                }
                else {
                    let tmpVal = undefined;
                    fields.forEach((key, index) => {
                        if (index === 0) {
                            tmpVal = params[key];
                            params[key] = {};
                        }
                        langs.forEach((item) => {
                            params[key][item] = tmpVal;
                        });
                        params[key] = JSON.stringify(params[key]);
                    });
                    params.id = (0, rh_mock_1.Mock)("@id");
                    delete params[lang];
                    vDao[tableName].add(params);
                    if (resultParam) {
                        return resultParam({});
                    }
                    return {};
                }
            },
        },
        {
            'post': `${baseUrl}${tableName}/del`,
            callback: (params) => {
                console.log(tableName, 'del', params);
                // eslint-disable-next-line
                const { pageNo, pageSize, ...param } = params;
                const result = vDao[tableName].del(param);
                if (resultParam) {
                    return resultParam(result);
                }
                return result;
            }
        },
    ];
}
exports.initTableApiConfig = initTableApiConfig;
function loadApiByConfig(apiList, app) {
    apiList.forEach((item) => {
        try {
            console.log(item);
            if (item.get) {
                app.get(item.get, (req, res) => {
                    res.send(item.callback(req.query, req, res));
                });
            }
            if (item.post) {
                app.post(item.post, (req, res) => {
                    res.json(item.callback(req.query, req, res));
                    // res.json(item.callback(req.body, req, res))
                });
            }
        }
        catch (error) {
            console.log('error', error);
        }
    });
}
exports.loadApiByConfig = loadApiByConfig;
//# sourceMappingURL=index.js.map