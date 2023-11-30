import { VDao } from '0vdao';
interface TableApiConfig {
    baseUrl?: string;
    locale?: {
        lang?: string;
        langs?: string[];
        fields?: string[];
        [key: string]: any;
    };
    analysisParam?: (params: any) => any;
    vDao: VDao;
    [key: string]: any;
}
/**
 * @description 生成 基础接口 配置
 */
export declare function initTableApi(tableName: string, config?: TableApiConfig): {
    baseUrl?: string;
    get?: string;
    post?: string;
    callback: (...params: any[]) => any;
}[];
export {};
