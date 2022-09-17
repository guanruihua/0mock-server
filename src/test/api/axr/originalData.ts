interface Data {
	id: string,
	group?: string,
	/**
	 * @description 组 的 容器
	 */
	groupBox?: string
	title: string,
	desc?: string,
	/**
	 * show
	 * edit
	 */
	showType?: string,
	/**
	 * 过滤条件
	 */
	filter?: Record<string, string | number>
}

export const originalData: Data[] = [
	{
		id: 'dashboard',
		groupBox: 'dashboard',
		title: 'Dashboard',
		desc: 'Dashboard',
		showType: 'show',
		filter: {
			dataSourceVal: '@name',
			productVal: ''
		}
	},
	{
		id: 'dashboard_total_active_uaid',
		group: 'dashboard',
		title: 'Total Active UAID',
		desc: 'Dashboard1',
		showType: 'show',
		filter: {
			dataSourceVal: '@name',
			productVal: ''
		}
	},
	{
		id: 'dashboard_total_scan_volume',
		group: 'dashboard',
		title: 'TOTAL SCAN VOLUME',
		desc: 'Dashboard1'
	},
	{
		id: 'dashboard_scan_rate',
		group: 'dashboard',
		title: 'SCAN RATE',
		desc: 'Dashboard3'
	},
	{
		id: 'dashboard_authentication_rate',
		group: 'dashboard',
		title: 'AUTHENTICATION RATE',
		desc: 'Dashboard4'
	},

	{
		id: '__SCAN__LOCATION__',
		title: 'SCAN LOCATION',
		desc: 'SCAN LOCATION',
	},
	{
		id: 'shareOfScanDataByProduct',
		title: 'SHARE OF SCAN DATA BY PRODUCT',
		desc: 'SHARE OF SCAN DATA BY PRODUCT',
	},
	{
		id: 'shareOfScanDataByProductCategory',
		title: 'SHARE OF SCAN DATA BY PRODUCT CATEGORY',
		desc: 'SHARE OF SCAN DATA BY PRODUCT CATEGORY',
	},
	{
		id: 'topScanningPerformanceProduct',
		title: 'TOP SCANNING PERFORMANCE PRODUCT',
		desc: 'TOP SCANNING PERFORMANCE PRODUCT',
	},
	{
		id: 'bottomScanningPerformanceProduct',
		title: 'BOTTOM SCANNING PERFORMANCE PRODUCT',
		desc: 'BOTTOM SCANNING PERFORMANCE PRODUCT',
	},
	{
		id: 'consumerGrowth',
		title: 'CONSUMER GROWTH',
		desc: 'CONSUMER GROWTH',
	},
	{
		id: 'successfulAuthPerConsumer',
		title: 'SUCCESSFUL AUTHENTICATION PER CONSUMER',
		desc: 'SUCCESSFUL AUTHENTICATION PER CONSUMER',
		filter: {
			dataSourceVal: '@name',
			productVal: ''
		}
	},
].map(item => {

	if (item['showType'] === undefined) {
		item['showType'] = 'show'
	}

	item['type'] = item.id
	item.id = '@id'
	// item['title&&zh_CN,en_US,zh_TW'] = item.title
	// delete item.title
	// item['desc&&zh_CN,en_US,zh_TW'] = item.desc
	// delete item.desc
	return item
})