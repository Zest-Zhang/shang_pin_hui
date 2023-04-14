<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show" ></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>

</style>
