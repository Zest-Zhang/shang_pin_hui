<template>
  <div class="pagination">
    <button
        v-show="startNumAndEndNum.start >1"
        @click="$emit('getPageNo',1)"
        :class="{ active:pageNo===1 }"
    >1</button>
    <button :disabled="pageNo===1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-show="startNumAndEndNum.start > 2">···</button>
    <button
        v-for="(page,index) in startNumAndEndNum.end"
        :key="index"
        v-show="page>=startNumAndEndNum.start"
        @click="$emit('getPageNo',page)"
        :class="{ active:pageNo===page}"
    >{{page}}</button>
    <button v-show="startNumAndEndNum.end < totalPages -1">···</button>
    <button
        v-show="startNumAndEndNum.end < totalPages"
        @click="$emit('getPageNo',totalPages)"
        :class="{ active:pageNo===totalPages}"
    >{{totalPages}}</button>
    <button
        :disabled="pageNo===totalPages"
        @click="$emit('getPageNo',pageNo+1)"
    >下一页</button>

    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:[ 'pageNo','pageSize','total','continues' ],
  computed:{
    totalPages(){ return Math.ceil(this.total/this.pageSize) },
    startNumAndEndNum(){ const {continues,pageNo,totalPages} = this;
      //初始化起始和结束数字
      let start,end = 0
      //如果总页数totalPages没有连续页码continues多
      if( continues>totalPages ){ start=1; end= totalPages
      }else{
        start = pageNo - parseInt(continues/2);
        end= pageNo + parseInt(continues/2);
        //把start = 0或负数的不正常现象纠正
        if( start < 1 ){ start = 1; end = continues }
        //把end大于总页码的不正常现象纠正
        if(end>totalPages){ end = totalPages; start = totalPages - continues  + 1 }
      }
      return {start,end}
    }
  }
}
</script>

<style scoped>
.pagination{
  text-align: center;
}
:active{ background:skyblue }
.pagination button {
  margin: 0 5px;
  background-color: #f4f4f5;
  color: #606266;
  outline: none;
  border-radius: 2px;
  padding: 0 4px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  border: 0;
}
.pagination button[disabled] {
  color: #c0c4cc;
  cursor: not-allowed;
}
.pagination button.active {
  cursor: not-allowed;
  background-color: #409eff;
  color: #fff;
}
</style>