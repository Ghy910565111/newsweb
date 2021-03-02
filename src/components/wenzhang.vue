<template>
  <div>
              <!-- 头部返回 -->
     <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/> 
     <p>{{this.$route.params.age}}</p>
  </div>
</template>

<script>
export default {
name:"wenzhang",
 created(){
        console.log(this.$route.params.age)
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

</style>