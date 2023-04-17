<template>
  <div>
    <div class="type-nav">
      <div class="container">
        <div @mouseleave = "leaveShow">
        <h2 class="all" @mouseenter = "enterShow">全部商品分类</h2>
        <transition name="sort">
            <div class="sort" v-show="show">
            <div class="all-sort-list2" @click = "goSearch">
            <div
                class="item bo"
                v-for="(c1,index) in categoryList" :key="c1.categoryId"
                :class="{ cur: currentIndex === index }">
              <h3
                  @mouseenter = "changeIndex(index)">
                <a
                    href=""
                    :data-categoryName = "c1.categoryName"
                    :data-category1Id = "c1.categoryId"
                >{{c1.categoryName}}</a>
              </h3>
              <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex === index?'block':'none' }"

              >
                <div class="subitem"
                       v-for="c2 in c1.categoryChild"
                     :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a
                          href=""
                          :data-categoryName = "c2.categoryName"
                          :data-category2Id = "c2.categoryId"
                      >{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild"
                          :key="c3.categoryId">
                        <a
                            href=""
                            :data-categoryName="c3.categoryName"
                            :data-category3Id = "c3.categoryId"
                        >{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
            </div>
        </transition>
        </div>
        <nav class="nav">
          <a href="#">服装城</a>
          <a href="#">美妆馆</a>
          <a href="#">尚品汇超市</a>
          <a href="#">全球购</a>
          <a href="#">闪购</a>
          <a href="#">团购</a>
          <a href="#">有趣</a>
          <a href="#">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import throttle from "lodash/throttle"

export default {
  name:'TypeNav',
  data(){
    return {
      currentIndex: -1,
      show: true
    }
  },
  methods: {
    changeIndex: throttle( function(index){
      this.currentIndex = index },50),
    leaveShow(){
      if( this.$route.path !== '/home'){
        this.currentIndex = -1;
        this.show = false
      }
      if (this.$route.path === "/home") {
        this.currentIndex = -1;
      }
    },
    goSearch(event) {
      let element = event.target;
      // event.target 有一个 dataset 属性，可以获取到节点的自定义属性和属性值
      // 这里的 categoryname 的 name 小写的原因是经过了服务器的转换
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      // 整理并合并路由跳转参数，query 是点击 TypeNav，params 是点击搜索按钮
      // 判断点击的是 a(不管是1|2|3)
      if (categoryname) {
        let location = {
          name: "search",
          query: { categoryName: categoryname },
        };
        // 一级分类的 a
        if (category1id) {
          location.query.category1Id = category1id;
        } else if (category2id) {
          // 二级分类的 a
          location.query.category2Id = category2id;
        } else {
          // 三级分类的 a
          location.query.category3Id = category3id;
        }
        //点击商品分类按钮的时候,如果路径当中携带 params 参数,需要合并携带给 search 模块（即 location）
        // 作用是点击搜索按钮再点击 TypeNav 后，params 和 query 参数会合并在一起
        if(this.$route.params.keyword){
          location.params = this.$route.params;
        }
        this.$router.push(location);
      }
    },
    enterShow(){ this.show = true }
},
  mounted(){
    if(this.$route.path!=='/home'){ this.show = false }
  },
  computed:{
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
}
</script>

<style scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
}
.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}

/* 过渡动画:商品分类 进入阶段 */
.type-nav .container .sort-enter {
  height: 0;
}
.type-nav .container .sort-enter-active {
  transition: all 0.3s;
}
.type-nav .container .sort-enter-to {
  height: 461px;
}
.type-nav .container .sort .all-sort-list2 .cur{
  background: skyblue
}
.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
/* .type-nav .container .sort .all-sort-list2 .item:hover .item-list { */
/*   display: block; */
/* } */
</style>