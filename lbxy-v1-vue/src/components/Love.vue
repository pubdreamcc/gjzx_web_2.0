<template>
   <div class="love">
     <div class="container">
       <div class="love-title">
         <img src='../assets/img/like.png'>
         <span>猜你喜欢</span>
       </div>
       <img src="../assets/img/steer left.png" class="left_arrow" @click="slide('left')">
       <img src="../assets/img/right.png" class="right_arrow" @click="slide('right')">
       <div class="slide-course">
         <ul class="course-list clearfix" ref="slideList">
           <li v-for="(course, index) in courses" :key="index">
             <a href="javascript:;">
               <img :src="course.src">
               <p class="course-title">{{course.title}}</p>
               <p class="course-class">{{course.class}}</p>
             </a>
           </li>
         </ul>
         <!-- 滑动课程 -->
       </div>
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
        {src: '../../static/course-imgs/1535681021070.jpg', title: '0基础学绘画透视', class: '综合性专业基础课'}
      ],
      i: 0
    }
  },
  components: {},
  methods: {
    slide (dir) {
      if (dir === 'right') {
        if (this.i === 5 - this.courses.length) {
          this.i = 5 - this.courses.length
          return
        }
        this.i--
        this.$refs.slideList.style.left = 217 * this.i + 'px'
      } else {
        if (this.i === 0) {
          this.i = 0
          return
        }
        this.i++
        this.$refs.slideList.style.left = 217 * this.i + 'px'
      }
    }
  }
}
</script>

<style>
  .love{
    min-width: 960px;
    background: white;
  }
  .love .container{
    margin: 0 auto;
    width: 1080px;
    padding: 27px 0 0;
    position: relative;
  }
  .love .container .love-title{
    position: relative;
    margin-bottom: 17px;
    height: 26px;
    text-align: center;
  }
  .love .container .love-title span{
    font-size: 18px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .love .container .slide-course{
    position: relative;
    width: 100%;
    height: 195px;
    overflow: hidden;
  }
  .love .container > img{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 43%;
    z-index: 1000;
    cursor: pointer;
  }
  .love .container > .left_arrow{
    left: -50px;
    background: #9999;
    border-radius: 50%;
  }
  .love .container > .right_arrow{
    right: -50px;
  }
  .love .container > .slide-course .course-list{
    width: 1736px;
    position: absolute;
    z-index: 1001;
    transition: left .3s;
    left: 0;
  }
  .love .container > .slide-course .course-list > li{
    float: left;
    margin-right: 13px;
    margin-bottom: 17px;
    border-radius: 4px;
  }
  .love .container > .slide-course .course-list > li a{
    display: block;
    width: 204px;
  }
  .love .container > .slide-course .course-list > li a:hover img{
    transform: scale(1.15);
  }
  .love .container > .slide-course .course-list > li a img{
    height: 116px;
    width: 100%;
    display: block;
    transition: transform .8s;
  }
  .love .container > .slide-course .course-list > li a .course-title{
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
  .love .container > .slide-course .course-list > li a .course-class{
    color: #999;
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    height: 26px;
  }
</style>
