/* 
包含n个用于间接修改状态数据的方法的对象
*/
import {reqHome, reqCategory, reqCategoryList} from '../api'
import {RECEIVE_NAVLIST, RECEIVE_CATEGORYS, RECEIVE_LIST} from './mutations_type'

export default{  
    
    /* 
        获取home中数据
    */
    async reNav({commit,state}){
        const result = await reqHome()
        if(result.code === 0){
            const navList = result.data
            commit(RECEIVE_NAVLIST,{navList})
        }
    },
    /* 
        获取category中的数据
    */
      async recategorys({commit,state}){
          const result = await reqCategory()
          if(result.code === 0){
              const categotys = result.data
              commit(RECEIVE_CATEGORYS,{categotys})
          }
      },

    /* 
        获取category列表数据
    */
   async reList({commit,state}){
    const result = await reqCategoryList()
    if(result.code === 0){
        const cateList = result.data
        commit(RECEIVE_LIST,cateList)
    }
  }

}
