<template>
  <div>
      <!-- 头部返回 -->
     <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<van-tree-select
  height="515vw"
  :items="items"
  :main-active-index.sync="activeIndex"
  @click-item="aaa"
/>
  </div>
</template>

<script>
export default {
   name:"coment",
   data(){
     return{
       activeIndex: 0,
       items:[
        { text: '浙江', children: [{text:'1',id:1},{text:'2',id:2}], dot: true },
        { text: '江苏', children: [{text:'1',id:3},{text:'2',id:4},{text:3,id:5}], badge: 5 },
      ],
      activeId: 1,
      activeIndex: 1,
     }
   },
   created(){
       
   },
   methods:{
     onClickLeft(){
        this.$router.push({name:'Index'})
     },
      aaa(index){
       console.log(index.id);
     }
   }
}
</script>

<style>
.commenthead{
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f7f8fa;
  line-height: 40px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple{
    line-height: 50px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
        margin-top: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>