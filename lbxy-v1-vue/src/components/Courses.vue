<template>
   <div class="courses">
     <div class="container">
       <div class="title">
         <img src="../assets/img/Hotcourses.png">
         <span>热门课程</span>
       </div>
       <ul class="courses-list clearfix">
         <li v-for="(course, index) in courses"  :key="index">
           <a href="javascript:;">
             <img :src=course.src>
              <p class="course-title">{{course.title}}</p>
              <p class="course-class">{{course.class}}</p>
            </a>
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
export default {
  name: '',
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
        {src: '../../static/course-imgs/1535681021070.jpg', title: '0基础学绘画透视', class: '综合性专业基础课 copy'},
        {src: '../../static/course-imgs/1507630775871.jpg', title: '电商详情页', class: '基础课'},
        {src: '../../static/course-imgs/1533890995253.jpg', title: '电商详情页', class: '基础课'}
      ]
    }
  },
  components: {}
}
</script>

<style>
  .courses{
    min-width: 960px;
    background: white;
  }
  .courses .container{
    width: 1080px;
    margin: 0 auto;
    padding: 12px 0;
  }
  .courses .container .title{
    height: 26px;
    margin-bottom: 17px;
    text-align: center;
    position: relative;
    font-size: 18px;
  }
  .courses .container .title span, .courses .container .title img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .courses .container .courses-list > li{
    float: left;
    margin-right: 13px;
    margin-bottom: 17px;
    border-radius: 4px;
  }
  .courses .container .courses-list > li:nth-child(5n){
    margin-right: 0;
  }
  .courses .container .courses-list > li a{
    display: block;
    width: 204px;
  }
  .courses .container .courses-list > li a:hover img{
    transform: scale(1.15)
  }
  .courses .container .courses-list > li a img{
    height: 116px;
    width: 100%;
    display: block;
    transition: transform .8s;
  }
  .courses .container .courses-list > li a .course-title{
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
  .courses .container .courses-list > li a .course-class{
    color: #999;
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    height: 26px;
  }
</style>
