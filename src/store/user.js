import {reqPostUserRegister} from "@/api/api";

const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST( state,searchList ){
        state.searchList = searchList
    }
}
const actions = {
    // 用户注册的地方
    async userRegister({ commit }, obj) {
        // 注册接口没有返回 data,不需要提交 mutation
        let result = await reqPostUserRegister(obj);
        if (result.code === 200) {
            //注册成功
            return 'ok';
        } else {
            //注册失败
            return Promise.reject(new Error(result.message));
        }
    },
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList || []
    },
}

export default{ state,mutations,actions,getters }


