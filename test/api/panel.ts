/*
 * @Author: peiyanh
 * @Date: 2022-09-27 10:14:15
 * @LastEditTime: 2022-09-30 10:57:24
 * @LastEditors: peiyanh
 * @Description: 
 * @FilePath: /vr-server/src/test/api/panel.ts
 * Copyright (c) 2004-2021 i-Sprint Technologies, Inc.
 *  address: 
 *  All rights reserved. 
 *  
 *  This software is the confidential and proprietary information of 
 *  i-Sprint Technologies, Inc. ('Confidential Information').  You shall not 
 *  disclose such Confidential Information and shall use it only in 
 *  accordance with the terms of the license agreement you entered into 
 *  with i-Sprint. 
 */

const worldjson = require('./geofiles/world.json')
const chinajson = require('./geofiles/china/china.json')
const indiajson = require('./geofiles/India.json')

export const panelApis = [
	{
		get: '/vrmenu/apiMock/getTotalUAID',
		callback: (req) => {
			return {
				code: '0',
				data: { totalNum: 1005928, compare: 3253 }
			}
		},

	},
	{
		get: '/vrmenu/apiMock/getGeoJSon',
		callback: (req, response) => {
			console.log(req);
			let obj = { world: worldjson, CN: chinajson, India: indiajson }
			return {
				code: '0',
				data: obj[req.name] || ''
			}
		},

	},
	{
		get: '/vrmenu/apiMock/getMapData',
		callback: (req, response) => {
			let obj = {
				world: [
					{ name: 'CN', value: 4822023 },
					{ name: 'SG', value: 4822023 },
				], CN: [
					{ name: '青海省', value: 23456 },
					{ name: '黑龙江省', value: 123 },
				], India: [
					{ name: 'Delhi', value: 1111 },
					{ name: 'Himachal Pradesh', value: 5 },
				]
			}
			return {
				code: '0',
				data: obj[req.name]
			}
		},

	},
	{
		get: '/vrmenu/apiMock/getMapBarData',
		callback: (req, response) => {
			let obj = {
				world: [
					[4822023, 'CN'] ,
					[4822023, 'India' ]
				], CN: [
					[23456, '青海省'],
					[123, '黑龙江省'],
				], India: [
					[1111, 'Delhi'],
					[5, 'Himachal Pradesh'],
				]
			}
			return {
				code: '0',
				data: obj[req.name]
			}
		},

	},
	{
		get: '/vrmenu/apiMock/getScanLocationProd',
		callback: (req, response) => {
			let obj = {
				world: [
					{ value: 100, name:'Product AW' },
					{ value: 99, name: 'Product BW' },
					{ value: 98, name: 'Product CW' },
					{ value: 97, name: 'Product DW' },
					{ value: 96, name: 'Product EW' },
					{ value: 95, name: 'Product FW' },
					{ value: 94, name: 'Product GW' },
					{ value: 93, name: 'Product HW' },
					{ value: 92, name: 'Product IW' },
					{ value: 91, name: 'Product JW' },
				], CN: [
					{ value: 100, name: 'Product AC' },
					{ value: 99, name: 'Product BC' },
					{ value: 98, name: 'Product CC' },
					{ value: 97, name: 'Product DC' },
					{ value: 80, name: 'Product EC' },
					{ value: 78, name: 'Product FC' },
					{ value: 56, name: 'Product GC' },
					{ value: 34, name: 'Product HC' },
					{ value: 24, name: 'Product IC' },
					{ value: 11, name: 'Others' },
				], India: [
					{ value: 100, name: 'Product AI' },
					{ value: 99, name: 'Product BI' },
					{ value: 98, name: 'Product CI' },
					{ value: 97, name: 'Product DI' },
					{ value: 96, name: 'Product EI' },
					{ value: 95, name: 'Product FI' },
					{ value: 94, name: 'Product GI' },
					{ value: 80, name: 'Product HI' },
					{ value: 76, name: 'Product II' },
					{ value: 35, name: 'Product JI' },
				]
			}
			return {
				code: '0',
				data: obj[req.name]
			}
		},

	},
	{
		get: '/vrmenu/apiMock/getScanLocationProdCate',
		callback: (req, response) => {
			let obj = {
				world: [
					{ value: 12, name: 'Cate AW' },
					{ value: 33, name: 'Cate BW' },
					{ value: 7, name: 'Cate CW' },
					{ value: 25, name: 'Cate DW' },
					{ value: 99, name: 'Cate EW' },
					{ value: 5, name: 'Cate FW' },
					{ value: 8, name: 'Cate GW' },
					{ value: 93, name: 'Cate HW' },
					{ value: 92, name: 'Cate IW' },
					{ value: 91, name: 'Cate JW' },
				], CN: [
					{ value: 100, name: 'Cate AC' },
					{ value: 99, name: 'Cate BC' },
					{ value: 98, name: 'Cate CC' },
					{ value: 97, name: 'Cate DC' },
					{ value: 80, name: 'Cate EC' },
					{ value: 3, name: 'Cate FC' },
					{ value: 56, name: 'Cate GC' },
					{ value: 34, name: 'Cate HC' },
					{ value: 78, name: 'Cate IC' },
					{ value: 11, name: 'Others' },
				], India: [
					{ value: 100, name: 'Cate AI' },
					{ value: 99, name: 'Cate BI' },
					{ value: 98, name: 'Cate CI' },
					{ value: 97, name: 'Cate DI' },
					{ value: 11, name: 'Cate EI' },
					{ value: 95, name: 'Cate FI' },
					{ value: 94, name: 'Cate GI' },
					{ value: 22, name: 'Cate HI' },
					{ value: 76, name: 'Cate II' },
					{ value: 35, name: 'Cate JI' },
				]
			}
			return {
				code: '0',
				data: obj[req.name]
			}
		},

	}
]