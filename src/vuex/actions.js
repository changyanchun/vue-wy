/* 
包含n个用于间接修改状态数据的方法的对象
*/
import {reqHome} from '../api'
import {RECEIVE_NAVLIST} from './mutations_type'
export default{  
    
    /* 
        获取录播图
    */
    async reNav({commit,state}){
        const result = await reqHome()
        if(result.code === 0){
            const navList = result.data
            commit(RECEIVE_NAVLIST,{navList})
        }
    }
}
