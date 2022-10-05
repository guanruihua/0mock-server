import { Mock } from 'rh-mock'

export const moduleApis = [
	{
		get: '/vr/getConsumerGrowth',
		callback: () => {
			const data = [];
			['Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22', 'Aug-22', 'Sep-22', 'Oct-22', 'Nov-22', 'Dec-22'].map(
				(name) => {
					data.push({
						name,
						values: Mock({ 'v|3': '@num(100,500)' }).v
					})
				}
			)
			return {
				code: '0',
				data
			}
		}
	},
	{
		get: '/vr/getSuccessAuthPerConsumer',
		callback: () => {
			const data = [];
			['Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22', 'Aug-22', 'Sep-22', 'Oct-22', 'Nov-22', 'Dec-22'].map(
				(name) => {
					data.push({
						name,
						value: Mock('@num(100,500)')
					})
				}
			)
			return {
				code: '0',
				data
			}
		}
	},
	{
		get: '/vr/getTopScanPerFoProd',
		callback: () => {
			const data = []
			Mock({ "name|6-10": '@name' }).name.map(
				(name) => {
					data.push({
						name,
						values: Mock({ 'v|2': '@num(100,500)' }).v
					})
				}
			)
			return {
				code: '0',
				data
			}
		}
	},
	{
		get: '/vr/getBottomScanPerFoProd',
		callback: () => {
			const data = []
			Mock({ "name|6-10": '@name' }).name.map(
				(name) => {
					data.push({
						name,
						values: Mock({ 'v|2': '@num(100,500)' }).v
					})
				}
			)
			return {
				code: '0',
				data
			}
		}
	},
	{
		get: '/vr/scanRate',
		callback: (params: Record<string, string | number>) => {
			return {
				code: '0',
				data: {
					value: Mock('@num(351,992)') / 10,
					float: Mock('@num(31,251)') / 10,
				}
			}
		}
	}, {
		get: '/vr/totalScanVolume',
		callback: (params: Record<string, string | number>) => {
			return {
				code: '0',
				data: {
					value: Mock('@num(1500000,30000000)'),
					float: Mock('@num(-900,1000)')
				}
			}
		}
	}, {
		get: '/vr/authRate',
		callback: (params: Record<string, string | number>) => {
			return {
				code: '0',
				data: {
					value: Mock('@num(351,992)') / 10,
					float: Mock('@num(31,251)') / 10,
				}
			}
		}
	}, {
		get: '/vr/totalActiveUaid',
		callback: (params: Record<string, string | number>) => {
			return {
				code: '0',
				data: {
					value: Mock('@num(1500000,30000000)'),
					float: Mock('@num(-900,1000)')
				}
			}
		}
	},
]
