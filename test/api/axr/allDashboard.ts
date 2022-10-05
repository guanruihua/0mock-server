import { _originalData__, Data } from './originalData'
export const allOriginal: Data[] = []

_originalData__.forEach(item => {

	const _item = JSON.parse(JSON.stringify(item))

	if (_item['showType'] === undefined) {
		_item['showType'] = 'show'
	}

	// item['type'] = item.id
	delete _item.id
	// item.id = '@id'
	// item['title&&zh_CN,en_US,zh_TW'] = item.title
	// delete item.title
	// item['desc&&zh_CN,en_US,zh_TW'] = item.desc
	// delete item.desc
	// return item
	allOriginal.push(_item)
})