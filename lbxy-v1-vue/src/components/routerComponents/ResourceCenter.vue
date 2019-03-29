<template>
   <div class="resourceCenter">
     <div class="container">
       <div class="navPath">
         <span>首页</span>
         <span>> 资源中心</span>
       </div>
       <div class="coursesClassList">
       </div>
       <el-tabs tab-position="bottom" type="border-card">
        <el-tab-pane label="1">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in courses1" :key="index">
              <a href="javascript:;">
                <img :src=course.src>
                <p class="course-title">{{course.title}}</p>
                <p class="course-class">{{course.class}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="2">
          <ul class="courses-list clearfix">
          <li v-for="(course, index) in courses2" :key="index">
            <a href="javascript:;">
              <img :src=course.src>
              <p class="course-title">{{course.title}}</p>
              <p class="course-class">{{course.class}}</p>
            </a>
          </li>
        </ul>
        </el-tab-pane>
        <el-tab-pane label="3">
          <ul class="courses-list clearfix">
          <li v-for="(course, index) in courses3" :key="index">
            <a href="javascript:;">
              <img :src=course.src>
              <p class="course-title">{{course.title}}</p>
              <p class="course-class">{{course.class}}</p>
            </a>
          </li>
        </ul>
        </el-tab-pane>
        <el-tab-pane label="4">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in courses4" :key="index">
              <a href="javascript:;">
                <img :src=course.src>
                <p class="course-title">{{course.title}}</p>
                <p class="course-class">{{course.class}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="5">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in courses5" :key="index">
              <a href="javascript:;">
                <img :src=course.src>
                <p class="course-title">{{course.title}}</p>
                <p class="course-class">{{course.class}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
     </div>
   </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      courses1: [
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
      ],
      courses2: [
        {src: '../../static/course-imgs/1533890995253.jpg', title: '拍风光前你需要了解这…', class: '汽车制造与检修'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533895932933.jpg', title: '京东店铺精细化运营', class: '公共基础必修课程'},
        {src: '../../static/course-imgs/1534911512210.jpg', title: '邵飞带你学正确的UI交…', class: '综合性专业基础课'},
        {src: '../../static/course-imgs/1534912321960.jpg', title: '你的插画会讲故事么', class: '职业基础课程'},
        {src: '../../static/course-imgs/1534916129905.jpg', title: '在玩趣中秒懂西方艺术', class: '专业基础课程'},
        {src: '../../static/course-imgs/1534990760114.jpg', title: 'SketchUI设计利器', class: '技术领域的技能'},
        {src: '../../static/course-imgs/1535681021070.jpg', title: '0基础学绘画透视', class: '综合性专业基础课'},
        {src: '../../static/course-imgs/1507630775871.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'}
      ],
      courses3: [
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
      ],
      courses4: [
        {src: '../../static/course-imgs/1534990760114.jpg', title: '拍风光前你需要了解这…', class: '汽车制造与检修'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533895932933.jpg', title: '京东店铺精细化运营', class: '公共基础必修课程'},
        {src: '../../static/course-imgs/1534911512210.jpg', title: '邵飞带你学正确的UI交…', class: '综合性专业基础课'},
        {src: '../../static/course-imgs/1534912321960.jpg', title: '你的插画会讲故事么', class: '职业基础课程'},
        {src: '../../static/course-imgs/1534916129905.jpg', title: '在玩趣中秒懂西方艺术', class: '专业基础课程'},
        {src: '../../static/course-imgs/1534990760114.jpg', title: 'SketchUI设计利器', class: '技术领域的技能'},
        {src: '../../static/course-imgs/1535681021070.jpg', title: '0基础学绘画透视', class: '综合性专业基础课'},
        {src: '../../static/course-imgs/1507630775871.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'}
      ],
      courses5: [
        {src: '../../static/course-imgs/1534916129905.jpg', title: '拍风光前你需要了解这…', class: '汽车制造与检修'},
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
  },
  components: {}
}
</script>

<style>
  .resourceCenter{
    min-width: 960px;
  }
  .resourceCenter .container{
    width: 1080px;
    margin: 30px auto;
  }
  .resourceCenter .container .navPath{
    font-weight: 500;
    color: #999999;
    line-height: 26px;
  }
  .resourceCenter .container .navPath span:nth-child(1){
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51,51,51,1);
  }
  .resourceCenter .container .coursesClassList{
    height: 138px;
    width: 100%;
    background: #3246D8;
    margin: 28px auto;
  }
  .resourceCenter .el-tabs--border-card{
    border: none;
    box-shadow: none;
  }
  .resourceCenter .el-tabs--border-card > .el-tabs__content{
    padding: 0;
  }
  .resourceCenter .el-tabs--border-card > .el-tabs__content > .el-tab-pane{
    margin-right: 0;
  }
  .resourceCenter .el-tabs__header{
    border-top: none !important;
    background: none !important;
  }
  .resourceCenter .courses-list > li{
    float: left;
    margin-right: 15px;
    margin-bottom: 17px;
    border-radius: 4px;
  }
  .resourceCenter .courses-list > li:nth-child(5n){
    margin-right: 0;
  }
  .resourceCenter .courses-list > li a{
    display: block;
    width: 204px;
  }
  .resourceCenter .courses-list > li a:hover img{
    transform: scale(1.15);
  }
  .resourceCenter .courses-list > li a img{
    height: 116px;
    width: 100%;
    display: block;
    transition: transform .8s;
  }
  .resourceCenter .courses-list > li a .course-title{
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
  .resourceCenter .courses-list > li a .course-class{
    color: #999;
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    height: 26px;
  }
  .resourceCenter .el-tabs__nav {
    left: 50%;
    transform: translateX(-50%) !important;
  }
  .resourceCenter .el-tabs__nav .el-tabs__item{
    border-radius: 50% !important;
    border: 1px solid #D9DDE1 !important;
    margin: 0 5px !important;
    font-size: 16px;
  }
  .resourceCenter .el-tabs__nav .is-active{
    border-color: #3246D8 !important;
    color: #3246D8 !important;
  }
</style>
