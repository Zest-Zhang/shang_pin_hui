import {reqUserRegister,reqGetCode,} from "@/api/api";

const state = {
    searchList: {},
    code: '',
}
const mutations = {
    GETSEARCHLIST( state,searchList ){
        state.searchList = searchList
    },
    GETCODE(state, code) {
        state.code = code;
    },
}
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code === 200) {
            commit('GETCODE', result.data);
        }
    },
    // 用户注册的地方
    async userRegister({ commit }, obj) {
        // 注册接口没有返回 data,不需要提交 mutation
        let result = await reqUserRegister(obj);
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


