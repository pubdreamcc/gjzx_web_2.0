<template>
  <div class="major">
    <div class="container">
      <div class="major-title">
        <img src="../assets/img/profession.png">
        <span>专业推荐</span>
      </div>
      <!-- 标签页 -->
      <el-tabs>
        <el-tab-pane v-for="(course, index) in courses" :key="index" :label="course.class"><a href="javascript:;"><img :src="course.src"><p class="course-title">{{course.title}}</p><p class="course-class">{{course.class}}</p></a></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      courses: [
        {src: '../../static/course-imgs/1507630775871.jpg', title: '拍风光前你需要了解这…', class: '汽车制造与检修'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533895932933.jpg', title: '京东店铺精细化运营', class: '公共基础必修课程'},
        {src: '../../static/course-imgs/1534911512210.jpg', title: '邵飞带你学正确的UI交…', class: '综合性专业基础课'},
        {src: '../../static/course-imgs/1534912321960.jpg', title: '你的插画会讲故事么', class: '职业基础课程'},
        {src: '../../static/course-imgs/1534916129905.jpg', title: '在玩趣中秒懂西方艺术', class: '专业基础课程'},
        {src: '../../static/course-imgs/1534990760114.jpg', title: 'SketchUI设计利器', class: '技术领域的技能'},
        {src: '../../static/course-imgs/1535681021070.jpg', title: '0基础学绘画透视', class: '综合性专业基础课'},
        {src: '../../static/course-imgs/1507630775871.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'}
      ]
    }
  }
}
</script>
<style>
  .major{
    min-width: 960px;
    background: #f5f5f5;
  }
  .major .container{
    width: 1080px;
    margin: 0 auto;
    padding: 22px 0 12px;
    text-align: center;
  }
  .major .container .major-title{
    height: 26px;
    text-align: center;
    margin-bottom: 17px;
    position: relative;
  }
  .major .container .major-title span{
    position: absolute;
    font-size: 18px;
    height: 26px;
    line-height: 26px;
    font-family: PingFangSC-Medium;
    text-align: center;
    top: 0;
    left: -2px;
    width: 100%;
  }
  .major .container .major-title img{
    height: 25px;
    width: 226px;
    margin: 2.5px auto;
    display: block;
    text-align: center;
  }
  .el-tabs__active-bar{
    display: none;
  }
  .el-tabs__nav-wrap::after{
    display: none;
  }
  .el-tabs__item{
    float: left;
    margin-bottom: 20px;
    margin-right: 14px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 18px;
    padding: 9px 18px !important;
    color: #666666 !important;
    background: #eeeeee;
    text-align: center;
    line-height: normal;
    height: auto;
  }
  .el-tabs__nav .is-active{
    color: white !important;
    background: #3246D8;
  }
  .el-tab-pane{
    float: left;
    margin-right: 13px;
    margin-bottom: 17px;
    border-radius: 4px;
  }
  .el-tab-pane:nth-child(5n){
    margin-right: 0;
  }
  .el-tab-pane a{
    display: block;
    width: 204px;
  }
  .el-tab-pane a:hover img{
    transform: scale(1.15);
  }
  .el-tab-pane a img{
    height: 116px;
    width: 100%;
    display: block;
    transition: transform .8s;
  }
  .el-tab-pane a .course-title{
    color: #333;
    font-size: 16px;
    line-height: 26px;
    height: 26px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 12px;
  }
  .el-tab-pane a .course-class{
    color: #999;
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    height: 26px;
  }
</style>
