import { menuApis } from './menuApis'
import { dbApis } from './db'
import { axrApis } from './axr'

export const api = [
	...menuApis,
	...dbApis,
	...axrApis
]