<template>
  <div>
    <el-row>
      <el-col :span="24">
         <div class="grid-content bg-purple-dark">
             <div @click="changeItem(1)">78878</div>
             <div @click="changeItem(2)">8888</div>
          </div>
      </el-col>
 </el-row>
 <!-- 通知栏 -->
 <van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
   <!--居中显示的区域-->
    <el-container style="height: 350px;
    overflow: scroll;">
      <el-header>Header</el-header>
      <el-main>
        <el-table style="width:100%" :data="xiadandata">
          <el-table-column  prop="data">
            
          </el-table-column> 
          <el-table-column  prop="name">
            
          </el-table-column> 
          <el-table-column  prop="active">
            
          </el-table-column> 
        </el-table>
      </el-main>
    </el-container>
    <!-- 轮播显示-->
    <el-carousel :interval="4000" type="card" style="height:12rem">
      <el-carousel-item v-for="item in   bannerlist" :key="item.img" style="height:10rem">
          <!-- <img  class="bannerimg"  :src="item.img" width="100%"  onerror="errorImg"/> -->
          <van-image round width="10rem" height="10rem" :src="item.img"/>
      </el-carousel-item>
    </el-carousel>
    <!-- 底部新闻 -->
    <div>
       <van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
       <van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
       <van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
       <van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
       <van-notice-bar mode="link">技术是开发它的人的共同灵魂。</van-notice-bar>
    </div>
    <!-- 步骤 -->
   <van-steps >
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
<div style="width:100%;text-align:center"><el-button type="primary" round @click="phoneme">主要按钮</el-button></div>
  </div>
</template>
<script>
export default {
   name:"Index",
   data(){
     return{
       xiadandata:[],
       bannerlist:[]
     }
   },
   created(){
     //放置定时器
        this.getxiadandata();
     //获取轮播的介绍
        this.getbanneritem();
   },
   methods:{
     getxiadandata(){
       setInterval(()=>{
       this.$http.get('../../static/data.json').then((response) => {
              var length=response.data.length;
              var datas=response.data;
              var data=[];
              for(var i=0;i<5;i++){
                var a=Math.ceil(Math.random()*length);
                data.push(datas[a]);
              }
              this.xiadandata=data
         })
         .catch(error=>{
             console.log(error)
        });
        },4000)
       },
       //获取轮播的介绍
      getbanneritem(){
          this.$http.get('../../static/banner.json').then((response) => {
            console.log(response);
            this.bannerlist=response.data
          })  .catch(error=>{
             console.log(error)
        });
      },
      //点击item切换
      changeItem(index){
        console.log(index);
        if(index==1){
           this.$router.push({name:'coment'})
        }
      },
      //点击电话
      phoneme(){
         this.$router.push({name:'phoneme'})
      }
   }
}
</script>
<style>
 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .bg-purple-dark div{
    width: 50%;
    float: left;
    text-align: center;
    line-height: 36px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  thead{
    display: none;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__container{
    height: 170px;
  }
</style>