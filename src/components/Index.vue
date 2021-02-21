<template>
  <div>
    <el-row>
      <el-col :span="24">
         <div class="grid-content bg-purple-dark">
             <div>78878</div>
             <div>8888</div>
          </div>
      </el-col>
 </el-row>
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
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in   bannerlist" :key="item.img">
          <img  class="bannerimg"  :src="item.img" width="100%"  onerror="errorImg"/>
      </el-carousel-item>
    </el-carousel>
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
      //判断是手机还是pc
      isMobile
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
</style>