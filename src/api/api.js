import requests from "@/api/ajax"
import mockRequests from "@/api/mockAjax"

export const reqGetCategoryList = ()=> requests.get('/product/getBaseCategoryList')
export const reqGetBannerList = ()=>mockRequests.get('/banner')
export const reqGetFloorList = ()=>mockRequests.get('/floor')
export const reqGetSearchList = (params)=> requests({ url:'/list',method:"post",data: params })
export const reqGetGoodsList = (skuId) => requests({url:`/item/${ skuId }`,method:"get"})
export const reqAddOrUpdateShopCart=(skuId,skuNum)=> requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
export const reqGetCartList = ()=>requests.get('/cart/cartList')
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
export const reqUpdateCheckedById= (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});








