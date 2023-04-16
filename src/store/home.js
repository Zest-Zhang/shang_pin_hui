import { reqGetCategoryList } from "@/api/api"

const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList= categoryList
    }
}
const actions = {
    async getCategoryList({ commit }){
        let result = await reqGetCategoryList();
        if( result.code === 200 ){
            commit("CATEGORYLIST", result.data)
        }
    }
}
const getters = {}

export default{ state,mutations,actions,getters }