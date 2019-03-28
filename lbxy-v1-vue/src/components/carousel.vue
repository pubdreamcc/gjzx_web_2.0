<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="always" height="378px" trigger='click'>
      <el-dropdown :hide-on-click="false" trigger="click" @visible-change="openNav">
        <span class="el-dropdown-link"><img src="../assets/img/navigation.png" class="openNav"></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(nav, index) in navs" :key="index" @click.native="clearStyle"><span>{{nav}}</span><img src="../assets/img/icon@2x.png"></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <el-carousel-item v-for="item in 6" :key="item">
      </el-carousel-item>
    </el-carousel>
    <img src="../assets/img/close.png" class="closeNav" :style="{display: flag}">
    <div class="course-nav-list" ref="CoursesList">
      <dl>
        <dt v-text='Title'></dt>
        <hr>
        <dd v-for="(item, index) in content1" :key="index">{{item}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      Title: '公民素养',
      navs: ['立德树人', '安防学院', '农学院', '商学院', '机器学院', '电器学院', '幸福学院', '职场加油站', '建筑学院', '其他学院'],
      flag: 'none',
      content1: ['哲学与人生', '环境保护', '国学经典', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助', '思想和道德', '思想和道德'],
      content2: ['我们的深圳', '环境保护', '国学经典', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      content3: ['哲学与人生', '环境保护', '法律基础', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      content4: ['我们的深圳', '环境保护', '法律基础', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      content5: ['我们的深圳', '环境保护', '法律基础', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      content6: ['哲学与人生', '法律基础', '法律基础', '法律基础', '环境保护', '哲学与人生', '安全教育', '紧急救助'],
      content7: ['法律基础', '法律基础', '法律基础', '法律基础', '环境保护', '哲学与人生', '安全教育', '紧急救助'],
      content8: ['思想和道德', '环境保护', '法律基础', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      content9: ['我们的深圳', '环境保护', '国学经典', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      content10: ['哲学与人生', '环境保护', '国学经典', '法律基础', '思想和道德', '哲学与人生', '安全教育', '紧急救助'],
      title: ['公民素养', '职业素养', '创新创业', '教育素养', '大众素养', '职业素养', '创新创业', '职业素养', '创新创业', '职业素养']
    }
  },
  components: {},
  methods: {
    openNav (flag) {
      if (flag) {
        this.flag = 'block'
      } else {
        this.flag = 'none'
        this.$refs.CoursesList.style.display = 'none'
      }
    },
    clearStyle (ev) {
      if (ev.target.parentNode.className === 'el-dropdown-menu__item') {
        ev.target.parentNode.style.background = '#333333'
        ev.target.parentNode.style.color = '#999999'
        this.$refs.CoursesList.style.display = 'block'
        for (let i = 0; i < 10; i++) {
          if (ev.path[2].children[i] === ev.target.parentNode) {
            this.Title = this.title[i]
          }
        }
      } else {
        ev.target.style.background = '#333333'
        ev.target.style.color = 'rgba(153, 153, 153)'
        this.$refs.CoursesList.style.display = 'block'
        for (let i = 0; i < 10; i++) {
          if (ev.path[1].children[i] === ev.target) {
            this.Title = this.title[i]
          }
        }
      }
    }
  }
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
  .closeNav{
    position: absolute;
    bottom: 285px;
    left: 16.4%;
    background: #F0F7FE;
    cursor: pointer;
  }
  .el-carousel__arrow{
    background: rgba(255, 255, 255, 0);
    font-size: 34px;
  }
  .el-dropdown{
    position: absolute;
    left: 45px;
    z-index: 3;
  }
  .el-dropdown .openNav{
    cursor: pointer;
  }
  .el-dropdown-menu{
    width: 208px;
    height: 378px;
    background: #333333;
    border-top-left-radius: 10px;
    border: none;
    margin: 0;
    box-shadow: none;
    padding: 0;
    top: 51px !important;
    left: 163px !important;
    border-bottom-left-radius: 10px;
    overflow: hidden;
  }
  .el-dropdown-menu__item{
    position: relative;
    width: 208px;
    height: 37.8px;
    color: #999999;
    padding: 0;
  }
  .el-dropdown-menu__item:hover{
    background: #9B9B9B !important;
    color: #ffffff !important;
  }
  .el-dropdown-menu__item:hover img{
    border: 1px dashed white;
    background: rgba(255, 255, 255, .5);
  }
  .el-dropdown-menu__item span{
    position: absolute;
    vertical-align: middle;
    font-size: 13px;
    line-height: 37.8px;
    width: 117px;
    left: 50px;
    overflow: hidden;
  }
  .el-dropdown-menu__item img{
    position: absolute;
    height: 17px;
    width: 17px;
    right: 68px;
    vertical-align: middle;
    top: 10px;
    font-size: 28px;
  }
  .popper__arrow{
    display: none !important;
  }
  /* 首页轮播图上课程列表导航菜单 */
  .course-nav-list{
    position: absolute;
    width: 723px;
    background: white;
    height: 378px;
    left: 371px;
    top: 63px;
    z-index: 2;
    display: none;
  }
  .course-nav-list dl hr{
    height: 1px;
    border: none;
    border-top: 2px solid #EEEEEE;
    display: inline-block;
    width: 615px;
    position: relative;
    top: 8px;
    right: -107px;
  }
  .course-nav-list dl dt{
    position: absolute;
    left: 0;
    line-height: 26px;
    top: 2px;
    font-size: 16px;
    color: #333333;
    background: white;
    padding: 0 25px;
    font-weight: 600;
  }
  .course-nav-list dl dd{
    float: left;
    width: 90px;
    height: 35px;
    padding: 0 10px;
    color: #999999;
    line-height: 35px;
    cursor: pointer;
    font-size: 14px;
  }
  .course-nav-list dl dd:hover{
    color: black;
  }
</style>
