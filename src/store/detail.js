import {reqGetGoodsList,reqAddOrUpdateShopCart,} from '@/api/api'
import {getUUID} from "@/utils/uuid_token";

const state = {
    goodsList : {},
    uuid_token: getUUID()
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
    async addOrUpdateShopCart({commit}, {skuId,skuNum} ) {
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // 判断加入购物车成功或失败
        if(result.code === 200){
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters={
    //这里不加 ||{} 会报 undefined 的错误，因为 state.goodsList 初始状态是空对象
     categoryView(state){ return state.goodsList.categoryView || {} },
     skuInfo(state){ return state.goodsList.skuInfo || {} },
     spuSaleAttrList(state){ return state.goodsList.spuSaleAttrList || {} },
}

export default {state,mutations,actions,getters}
