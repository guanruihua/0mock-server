"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTableApi = void 0;
const rh_mock_1 = require("rh-mock");
/**
 * @description 生成 基础接口 配置
 */
function initTableApi(tableName, config) {
    const { baseUrl = '/', vDao, locale = {}, analysisParam = (params) => params } = config || {};
    return [
        {
            'get': `${baseUrl}${tableName}/query`,
            callback: (params) => {
                console.log(tableName, 'query', params);
                if (analysisParam) {
                    return analysisParam(vDao[tableName]);
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
                if (analysisParam) {
                    return analysisParam({
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
                if (analysisParam) {
                    return analysisParam(result);
                }
                return result;
            }
        },
        {
            'post': `${baseUrl}${tableName}/save`,
            callback: (params) => {
                console.log(tableName, 'save', params);
                const { lang, fields = [], langs = ['zh_CN', 'en_US', 'zh_TW'] } = locale || {};
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
                    vDao[tableName].update({ id: params.id }, params);
                    if (analysisParam) {
                        return analysisParam(result);
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
                    if (analysisParam) {
                        return analysisParam({});
                    }
                    return {};
                }
            },
        },
        {
            'post': `${baseUrl}${tableName}/saveJson`,
            callback: (params) => {
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
                    vDao[tableName].update({ id: params.id }, params);
                    if (analysisParam) {
                        return analysisParam(result);
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
                    if (analysisParam) {
                        return analysisParam({});
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
                if (analysisParam) {
                    return analysisParam(result);
                }
                return result;
            }
        },
    ];
}
exports.initTableApi = initTableApi;
//# sourceMappingURL=initTableApi.js.map