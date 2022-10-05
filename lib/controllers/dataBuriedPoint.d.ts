import { Request, Response } from 'express';
/**
 * @description: Data buried point 数据埋点 集合
 */
export declare const DataBuriedPoint: (Record<string, string> | any)[];
/**
 * @description: Data buried point 数据埋点 集合
 */
export declare function dataBuriedPoint(params: Record<string, any>, req: Request, res: Response): void;
/**
 * @description: 获取 Data buried point 数据埋点
 */
export declare function getDataBuriedPoint(params: Record<string, any>, req: Request, res: Response): Record<string, any>;
