<template>
  <div>
    <div class="brand">
      <div class="py-container">
        <ul class="brand-list">
          <li class="brand-item">
            <img src="./images/brand_21.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_03.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_05.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_07.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_09.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_11.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_13.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_15.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_17.png"  alt=""/>
          </li>
          <li class="brand-item">
            <img src="./images/brand_19.png"  alt=""/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.brand {
  margin: 10px 0;
}
.brand .py-container {
  width: 1200px;
  margin: 0 auto;
}
.brand .py-container .brand-list {
  overflow: hidden;
  padding: 15px 0;
  background: #f7f7f7;
  line-height: 18px;
}
.brand .py-container .brand-list .brand-item {
  width: 120px;
  float: left;
  height: 37px;
}
.brand .py-container .brand-list .brand-item img {
  border-left: 1px dotted #ccc;
  padding: 0 10px;
}
.brand .py-container .brand-list .brand-item:first-child img {
  border-left: 0;
}
</style>