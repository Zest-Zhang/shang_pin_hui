<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor
        v-for = "(floor,index) in floorList"
        :key = "floor.id" :list = "floor" />
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/ListContainer';
import TodayRecommend from "@/pages/Home/TodayRecommend/TodayRecommend";
import Rank from "@/pages/Home/Rank/Rank";
import Like from "@/pages/Home/Like/Like";
import Floor from "@/pages/Home/Floor/Floor";
import Brand from "@/pages/Home/Brand/Brand";
import { mapState }	from 'vuex'
export default {
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({ floorList: state=>state.home.floorList })
  },
}
</script>

<style scoped>

</style>