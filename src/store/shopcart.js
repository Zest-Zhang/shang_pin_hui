import {reqGetCartList,reqDeleteCartById,reqUpdateCheckedById,} from '@/api/api'

const state = {
    cartList: [],
}
const mutations = {
    GETCARTLIST( state,cartList ){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({commit} ) {
        let result = await reqGetCartList();
        if(result.code === 200){
            commit('GETCARTLIST',result.data)
        }
    },
    //删除购物车某一个产品
    async deleteCartListBySkuId({commit },skuId){
    let result=await reqDeleteCartById(skuId);
    if (result.code ===200){
        return"ok";
    }else{return Promise.reject(new Error("faile"));}
},
    //修改购物车某一个产品的选中状态
    async updateCheckedById({commit },{skuId,isChecked }){
        let result=await reqUpdateCheckedById(skuId,isChecked);
        if(result.code===200){
        return 'ok';
    }else{
        return Promise.reject(new Error('faile'));}},
    // 删除全部勾选的产品
    deleteAllCheckedCart({dispatch,getters}){
    // 获取购物车中全部的产品
    let PromiseAll=[]
    getters.cartList.cartInfoList.forEach(item=>{
        let promise=item.isChecked ===1?dispatch('deleteCartListBySkuId',item.skuId):''
        // 将每一次返回的Promise：添加到数组当中
        PromiseAll.push(promise);
    })
        // 只要全部的 p1|p2..都成功，返回结果即为成功
        // 如果有一个失败，返回即为失败结果
        return Promise.all(PromiseAll);
}
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
}

export default {state,mutations,actions,getters}


