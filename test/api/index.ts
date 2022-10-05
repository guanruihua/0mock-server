import { menuApis } from './menuApis'
import { dbApis } from './db'
import { axrApis } from './axr'
import { panelApis } from './panel'
import { moduleApis } from './modules'

export const api = [
	...menuApis,
	...dbApis,
	...axrApis,
	...panelApis,
	...moduleApis
]