<template>
   <div class="resourceCenter">
     <div class="container">
       <div class="navPath">
         <span>首页</span>
         <span>> 资源中心</span>
       </div>
       <div class="coursesClassList">
         <div class="course_item">
           <span>精选推荐</span>
           <ul class="course_item_list">
             <li>理工类</li>
             <li>商科类</li>
             <li>通用类</li>
             <li>演示资源</li>
             <li>农业类</li>
           </ul>
         </div>
         <div class="course_item">
           <span>社区教育</span>
           <ul class="course_item_list">
             <li>职业证书类</li>
             <li>修养爱好类</li>
             <li>商业技能类</li>
             <li>素质素养类</li>
           </ul>
         </div>
         <div class="course_item">
           <span>新职农专题</span>
           <ul class="course_item_list">
             <li>素质素养</li>
             <li>农业服务</li>
             <li>农业经营</li>
             <li>农业生产</li>
           </ul>
         </div>
         <div class="course_item">
           <span>证书专题</span>
           <ul class="course_item_list">
             <li>眼睛考证</li>
             <li>商科考证</li>
             <li>安防考证</li>
             <li>核心能力</li>
           </ul>
         </div>
         <div class="course_item">
           <span>眼镜专题</span>
           <ul class="course_item_list">
             <li>眼镜设计</li>
             <li>眼镜考证</li>
             <li>眼镜制造</li>
           </ul>
         </div>
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
    display: flex;
  }
  .resourceCenter .container .coursesClassList .course_item{
    box-sizing: border-box;
    width: 20%;
    border-right: 3px solid rgba(255, 255, 255, .5);
    height: 100%;
    padding: 20px 23px;
    cursor: pointer;
  }
  .resourceCenter .container .coursesClassList .course_item:nth-last-child(1){
    border-right: none;
  }
  .resourceCenter .container .coursesClassList .course_item span{
    font-size: 14px;
    color: rgba(255,255,255,1);
    font-family:PingFangSC-Medium;
  }
  .resourceCenter .container .coursesClassList .course_item .course_item_list{
    width: 167px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
  }
  .resourceCenter .container .coursesClassList .course_item .course_item_list li{
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255,255,255,1);
    margin: 0 10px 8px 0;
  }
  .resourceCenter .container .coursesClassList .course_item:hover{
    background-color: #fff;
  }
  .resourceCenter .container .coursesClassList .course_item:hover span{
    color: #333;
  }
  .resourceCenter .container .coursesClassList .course_item:hover .course_item_list li{
    color: #666;
  }
  .resourceCenter .container .coursesClassList .course_item .course_item_list li:hover{
    color: #333;
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
