import {reqGetGoodsList} from '@/api/api'

const state = {
    goodsList : {}
}
const mutations = {
    GOODSLIST(state,goodsList){
        state.goodsList = goodsList
    }
}
const actions= {
    async getGoodsList({ commit },skuId){
        let result = await reqGetGoodsList(skuId);
        if( result.code === 200 ){
            commit("GOODSLIST", result.data)
        }
    },
}
const getters={
    //这里不加 ||{} 会报 undefined 的错误，因为 state.goodsList 初始状态是空对象
     categoryView(state){ return state.goodsList.categoryView || {} },
     skuInfo(state){ return state.goodsList.skuInfo || {} },
     spuSaleAttrList(state){ return state.goodsList.spuSaleAttrList || {} },
}

export default {state,mutations,actions,getters}
