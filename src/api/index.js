//接口请求函数的模块
//每个函数返回的都是promise对象

//根据经纬度获取位置的请求
 

import ajax from './ajax'


export const reqHome = () => ajax('/home')

export const reqCategory = () => ajax('/category')

export const reqCategoryList = ()=> ajax('/categoryList')

export const reqNav = ()=> ajax('api/topic/v1/find/getTabs.json')

export const reqLazy = ({page,size}) => ajax({
    url:'api/topic/v1/find/recAuto.json',
    method:'GET',
    params:{page,size}
})