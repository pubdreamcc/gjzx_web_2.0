<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="always" height="378px" trigger='click'>
      <el-carousel-item v-for="item in 6" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  components: {}
}
</script>

<style>
  .carousel{
    min-width: 960px;
    background: #F0F7FE;
  }
  .carousel::before{
    display: table;
    content: ''
  }
  .el-carousel{
    width: 1080px;
    margin: 13px auto;
    border-radius: 9px;
  }
  .el-carousel__item:nth-child(2n) {
    background: url("../assets/carousel-imgs/1534990760114.jpg");
  }
  .el-carousel__item:nth-child(2n+1) {
    background: url('../assets/carousel-imgs/1535681021070.jpg');
  }
  .el-carousel__button{
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .el-carousel__indicators{
    right: -20px;
    bottom: 15px;
    left: auto;
  }
  .el-carousel__arrow{
    background: rgba(255, 255, 255, 0);
    font-size: 34px;
  }
</style>
