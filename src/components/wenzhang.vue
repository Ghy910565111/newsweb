<template>
  <div>
              <!-- 头部返回 -->
     <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/> 
      此页面调用父子组件
  </div>
</template>

<script>
export default {
name:"wenzhang",
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

</style>