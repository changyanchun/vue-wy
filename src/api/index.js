//接口请求函数的模块
//每个函数返回的都是promise对象

//根据经纬度获取位置的请求
 

import ajax from './ajax'


export const reqHome = () => ajax('/home')

export const reqCategory = () => ajax('/category')

export const reqCategoryList = ()=> ajax('/categoryList')