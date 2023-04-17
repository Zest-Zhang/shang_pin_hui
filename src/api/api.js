import requests from "@/api/ajax"
import mockRequests from "@/api/mockAjax"

export const reqGetCategoryList = ()=> requests.get('/product/getBaseCategoryList')
export const reqGetBannerList = ()=>mockRequests.get('/banner')
export const reqGetFloorList = ()=>mockRequests.get('/floor')
// export const reqGetSearchList = (params)=> requests({ url:'/list',method:"post",data: params })