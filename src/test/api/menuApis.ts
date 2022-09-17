export const menuApis = [
	{
		get: '/vr/apiMock/getMenus',
		callback: (req) => {
			//label,key,path,children:[]
			return {
				code: '0',
				data: [{
					label: JSON.stringify({ "en_US": "Geo", "zh_CN": "Geo", "zh_TW": "Geo" }),
					key: 'geo',
					// children: [{
					// 	label: JSON.stringify({ "en_US": "Manage", "zh_CN": "管理", "zh_TW": "管理" }),
					// 	key: 'geo/list',
					// }]
				},
				{
					label: JSON.stringify({ "en_US": "Dashboard", "zh_CN": "面板", "zh_TW": "面板" }),
					key: '/dashboard',
				}]
			}
		},	
	},
	{
		get: '/vr/apiMock/getRouters',
		callback: (req) => {
			return {
				code: '0',
				data: [{
					key: 'geo-manage',
					path: '/geo',
					frontIsIndex: 0,
					isShow: 1,
					frontViewPath: 'geoManage',
					children: [{
						key: 'geo-list',
						frontIsIndex: 1,
						isShow: 0,
						path: '/geo/list',
						frontViewPath: 'geoManage/list'
					}]
				},
				{
					label: 'Dashboard',
					key: 'dashboard',
					path: '/dashboard',
					frontIsIndex: 0,
					// frontIsIndex: 1,
					isShow: 1,
					frontViewPath: 'dashboard',
					children: [
						{
							label: 'dashboard-index',
							key: 'dashboard-index',
							path: '/dashboard/list',
							frontIsIndex: 1,
							isShow: 1,
							frontViewPath: 'dashboard/panel',
						},
						{
							label: 'setting',
							key: 'dashboard',
							path: '/dashboard/setting',
							frontIsIndex: 0,
							isShow: 1,
							frontViewPath: 'dashboard/setting',
						}
					]
				},
				// {
				// 		label: 'dashboard-index',
				// 		key: 'dashboard-index',
				// 		path: '/dashboard/list',
				// 		frontIsIndex: 1,
				// 		isShow: 1,
				// 		frontViewPath: 'dashboard/panel',
				// 	},
				{
					label: 'Dashboard2',
					key: 'dashboard2',
					path: '/dashboard2',
					frontIsIndex: 0,
					isShow: 1,
					frontViewPath: 'dashboard'
				},
				]
			}
		},
	},

];