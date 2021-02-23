<template>
  <div>
          <!-- 头部返回 -->
     <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  show
/>
<div style="padding:10px">
  <el-input placeholder="请输入内容" v-model="input1">
    <template slot="prepend">姓名</template>
  </el-input>
  <div style="widt:100%;height:10px"></div>
  <el-input placeholder="请输入内容" v-model="input2">
    <template slot="prepend">电话</template>
  </el-input>
  <div style="width:100%;height:50px;text-align:center;margin-top:20px;">
    <el-button type="success" round @click="onSave">我对此感兴趣</el-button>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name:"phoneme",
  data(){
    return{
      input1:"1",
      input2:"2"
    }
  },
    methods:{
     onClickLeft(){
        this.$router.push({name:'Index'})
     },
     onSave(){
       console.log("111");
     }
   }
}
</script>

<style>

</style>