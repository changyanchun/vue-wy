/* 
使用mockjs实现mock数据接口
*/
import Mock from 'mockjs'
import home from './homeData.json' // 自动解析为js  可以相互转换
import category from './category.json'
import categoryList from './categoryList.json'

// mock /goods接口
Mock.mock('/home', {code:0, data:home})
// mock /ratings接口
Mock.mock('/category', {code: 0, data: category})
// mock /info接口
Mock.mock('/categoryList', {code: 0, data: categoryList})

// export default ???
console.log('mockServer启动了...')