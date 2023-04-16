import requests from "@/api/ajax"

export const reqGetCategoryList = ()=> requests.get('/product/getBaseCategoryList')
