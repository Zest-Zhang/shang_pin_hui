import requests from "@/api/ajax"

export const reqGetCategoryList = ()=> requests.get('/product/getBaseCategoryList')
// export const reqGetSearchList = (params)=> requests({ url:'/list',method:"post",data: params })