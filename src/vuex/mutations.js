import {RECEIVE_NAVLIST, RECEIVE_CATEGORYS, RECEIVE_LIST} from './mutations_type'

export default{

    [RECEIVE_NAVLIST](state,{navList}){
        state.navList = navList
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_LIST](state,cateList){
        state.cateList = cateList
    }
}