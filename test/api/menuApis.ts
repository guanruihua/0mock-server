export const menuApis = [
	{
		get: '/vr/apiMock/getMenus',
		callback: (req) => {
			//label,key,path,children:[]
			return {
				code: '0',
				data: [{
					icon: 'SnippetsOutlined',
					label: JSON.stringify({ "en_US": "Geo", "zh_CN": "Geo", "zh_TW": "Geo" }),
					key: 'geo',
					// children: [{
					// 	label: JSON.stringify({ "en_US": "Manage", "zh_CN": "管理", "zh_TW": "管理" }),
					// 	key: 'geo/list',
					// }]
				},
				{
					icon: 'HomeOutlined',
					label: JSON.stringify({ "en_US": "Dashboard", "zh_CN": "面板", "zh_TW": "面板" }),
					key: '/dashboard',
				},
				{
					icon: 'HomeOutlined',
					label: JSON.stringify({ "en_US": "Demo1", "zh_CN": "Demo1", "zh_TW": "demo1" }),
					key: 'demo1',
				},
				{
					icon: 'HomeOutlined',
					label: JSON.stringify({ "en_US": "Demo2", "zh_CN": "Demo2", "zh_TW": "demo2" }),
					key: 'demo2',
				},
				{
					icon: 'HomeOutlined',
					label: JSON.stringify({ "en_US": "Demo3", "zh_CN": "Demo3", "zh_TW": "demo3" }),
					key: 'demo3',
				},
				{
					icon: 'HomeOutlined',
					label: JSON.stringify({ "en_US": "Demo4", "zh_CN": "Demo4", "zh_TW": "demo4" }),
					key: 'demo4',
				},
				{
					icon: 'HomeOutlined',
					label: JSON.stringify({ "en_US": "Demo5", "zh_CN": "Demo5", "zh_TW": "demo5" }),
					key: 'demo5',
				},
				]
			}
		},
	},
	{
		get: '/vr/apiMock/getRouters',
		callback: (req) => {
			return {
				code: '0',
				data:
					[
						{
							label: 'Login',
							path: 'login',
							key: 'login',
							frontViewPath: 'login',
						},
						{
							label: 'Layout',
							key: 'layout',
							path: '/',
							frontViewPath: 'app/Layout.tsx',
							children: [{
								key: 'geo-manage',
								path: '/geo',
								frontIsIndex: 0,
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
								label: 'test',
								key: 'test',
								path: 'test',
								frontViewPath: 'dtest'

							},

							{
								label: 'Demo1',
								key: 'demo1',
								path: '/demo1',
								frontIsIndex: 0,
								// frontViewPath: 'dashboard_demo1',
								frontViewPath: 'demo/demo1',
							},
							{
								label: 'Demo2',
								key: 'demo2',
								path: '/demo2',
								frontIsIndex: 0,
								// frontViewPath: 'dashboard_demo1',
								frontViewPath: 'demo/demo2',
							},
							{
								label: 'Demo3',
								key: 'demo3',
								path: '/demo3',
								frontIsIndex: 0,
								// frontViewPath: 'dashboard_demo1',
								frontViewPath: 'demo/demo3',
							},
							{
								label: 'Demo4',
								key: 'demo4',
								path: '/demo4',
								frontIsIndex: 0,
								// frontViewPath: 'dashboard_demo1',
								frontViewPath: 'demo/demo4',
							},
							{
								label: 'Demo5',
								key: 'demo5',
								path: '/demo5',
								frontIsIndex: 0,
								// frontViewPath: 'dashboard_demo1',
								frontViewPath: 'demo/demo5',
							},
							// {
							// 	label: 'Layout',
							// 	key: 'layout',
							// 	path:'/',
							// 	frontViewPath: 'dashboard/panel',
							// },/
							//想让dashboard成为‘/’的默认路由，直接改成path‘/’
							{
								label: 'Dashboard',
								key: 'dashboard',
								path: '/dashboard',
								frontIsIndex: 0,
								frontViewPath: 'dashboard',
								children: [
									{
										label: 'dashboard-index',
										key: 'dashboard-index',
										frontIsIndex: 1,
										frontViewPath: 'dashboard/panel',
									},
									{
										label: 'setting',
										key: 'dashboard',
										path: '/dashboard/setting',
										frontIsIndex: 0,
										frontViewPath: 'dashboard/setting',
									},
								]
							},
							{
								label: 'setting',
								key: 'dashboard',
								path: '/dashboardSetting',
								frontIsIndex: 0,
								frontViewPath: 'dashboard/setting',
							},
							{
								label: 'add',
								key: 'dashboard-add',
								path: '/dashboardadd',
								frontIsIndex: 0,
								isShow: 1,
								frontViewPath: 'dashboard/addDashboard',
							},

							]
						},
					]

			}
		},
	},

];