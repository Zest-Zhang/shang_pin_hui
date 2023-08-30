# shangpinhui（参考京东商城）

## 线上地址（电脑访问）
http://47.96.150.51

## Build Setup

```bash
# 克隆项目
git clone https://github.com/Zest-Zhang/shang_pin_hui.git

# 进入项目目录
cd shang_pin_hui

# 安装依赖
npm install

# 启动服务
npm run serve
```
## 技术选型

![image-20220608150139753](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/0.png)

## 前端路由

![image-20220608150232527](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/1.png)

## Search路由

1.搜索查询条件参数理解与准备
2.组件动态数据显示
3.根据分类和关键字进行搜索
4.根据品牌进行搜索
5.根据属性进行搜索
6.排序搜索
7.自定义分页组件

![image-20220608155022983](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/2.png)

## Detail路由

1)图片放大镜效果
2)小图轮播

![image-20220608155212247](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/3.png)

## AddCartSuccess路由

区别使用sessionStorage与localStorage

![image-20220608155413517](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/4.png)

## ShopCart路由

1)用户临时ID的处理
2)购物车数据的管理(复杂)
3)不使用v-model监控用户输入
4)async / await / Promise.all() 的使用

![image-20220608155635581](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/5.png)

## 注册与登陆路由

1)注册/登陆请求后组件的响应处理
2)登陆后自动携带token数据

![image-20220608155847991](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/12.png)
![image-20220608155847993](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/6.png)

测试用的账号和密码:
账号:13700000000
密码:111111

## 导航和路由守卫

a.只有登陆了, 才能查看交易/支付/个人中心界面
b.只有没有登陆, 才能查看登陆界面
c.只有携带的skuNum以及sessionStorage中有skuInfo数据, 才能查看添加购物车成功的界面
d.只能从购物车界面, 才能跳转到交易界面
e.只能从交易界面, 才能跳转到支付界面
f.只有从支付界面, 才能跳转到支付成功的界面

## 订单与支付

1)提交订单
2)支付二维码
3)获取订单状态

![image-20220609105837105](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/12.png)

## 支付组件

![image-20220609110322172](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/11.png)

## 支付成功组件

![image-20220609110358429](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/13.png)

## 我的订单组件

![image-20220609110438770](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/9.png)

## 图片懒加载

还没有加载得到目标图片时, 先显示loading图片
在<img>进入可视范围才加载请求目标图片

## 路由懒加载

(1)当打包构建应用时，JS包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了
(2)本质就是Vue 的异步组件在路由组件上的应用
需要使用动态import语法, 也就是import()函数

## 前台表单校验

(1)项目中有一些如注册/登陆表单, 在提交请求前是需要进行表单输入数据校验的
(2)只有前台表单验证成功才会发请求
(3)如果校验失败, 以界面红色文本的形式提示, 而不是用alert的形式
(4)校验的时机, 除了点击提交时, 还有输入过程中实时进行校验

![image-20220609110707175](https://raw.githubusercontent.com/Zest-Zhang/blog-img/master/16.png)
