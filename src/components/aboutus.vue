<template>
  <div>
        <!-- 头部返回 -->
     <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/> 
  </div>
</template>

<script>
export default {
     name:"aboutus",
    methods:{
     onClickLeft(){
        this.$router.push({name:'Index'})
     }
   }
}
</script>

<style>

</style>