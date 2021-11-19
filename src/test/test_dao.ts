import { VirtualDao } from '../dao'
const vDao: any = new VirtualDao();
vDao
	.init('db1', [{
		a: 123,
		init: 1234234,
	}])
	.init('db2', [{
		b: 1333
	}])
	.insert('db2', {
		b: 444
	})
	.init('db', [])
	.insert('db', [{
		id: '123', msg: '马总牛逼'
	}])
	.insert('db3', [1, 23, 4])

// console.log(vDao.db1.select())
// console.log(vDao.db2.select())
// console.log(vDao.db)
// console.log(vDao.db3)
// console.log(vDao)
vDao.db.add({ id: '4567' })
vDao.db.add([{ id: '1234', a: '123123' }])
// console.log(vDao.db.select("*").where({ id: '123' }))
// console.log(vDao.db.select({
// 	id: true,
// 	msg: 'text',
// }).where())
// console.log(vDao.db.select().format({
// 	id: true,
// 	msg: 'text',
// }))
// console.log(vDao.db.select({ id: '123' }).format({ name: true, id: true, a: true }))
// console.log(vDao.db.del([{ id: '123' }]))
vDao.db.update({ id: '123' }, { c: 'ccc' })
console.log(vDao.db)
// $gt: 大于
// $lt: 小于
// $gte: 大于或等于
// $lte: 小于或等于
// $ne: 不等于
// in / $in
// not in /$nin
// $mod 取模运算 {$mod: [10, 1]} => % 10 === 1
// $all 类似 in
// $size 数量
// $exists 存在
// $type  待了解...
// 正则
// $elemMatch 
// vDao.select('param_name').from(ta).where({a:})