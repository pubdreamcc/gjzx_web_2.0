<template>
   <div class="searchlist">
     <div class="search_nav_list">
       <div class="search_input_content">
         <div class="search_form_nav">
           <img src="../../assets/img/search@3x.png">
           <input type="text" placeholder="职业素养" v-model="searchCourse" @keyup.enter="search">
           <input type="button" value="搜索" @click="search">
         </div>
         <div class="search_tags">
           <p>搜索关键词：</p>
           <span @click="searchTags(tag1)">{{tag1}}</span>
           <span @click="searchTags(tag2)">{{tag2}}</span>
           <span @click="searchTags(tag3)">{{tag3}}</span>
           <span @click="searchTags(tag4)">{{tag4}}</span>
         </div>
       </div>
     </div>
     <div class="search_content" v-show="this.searchCourses.length !== 0">
       <div class="container">
         <div class="search_right_content">
           <div class="recommendation">
             <p class="recommendationTitle"><span>相关课程推荐</span></p>
             <ul class="recommenCourseList">
               <li v-for="(recommenCourse, index) in recommenCourses" :key="index">
                 <a href="javascript:;">
                   <div class="recommenCourseImg"><img :src="'http://lgedu.gtafe.com:80'+recommenCourse.coverImg"></div>
                   <div class="recommenCourseInfo"><p>{{recommenCourse.courseName}}</p><p><span>基础课程</span><span>{{recommenCourse.totalMic}}课</span></p></div>
                 </a>
                </li>
             </ul>
           </div>
         </div>
         <div class="search_left_content">
           <ul class="search_left_course_list">
             <li v-for="(searchCourse, index) in searchCourses" :key="index">
                <a href="javascripnt:;">
                  <div class="CourseImg"><img :src="'http://lgedu.gtafe.com:80'+searchCourse.coverImg"></div>
                  <div class="CourseInfo">
                    <p class="CourseInfoTitle">{{searchCourse.courseName}}</p>
                    <p class="CourseInfoStatus">
                      <span>基础课程</span>
                      <span>{{searchCourse.totalMic}}课</span>
                      <span>考试总量：{{searchCourse.totalExam}}</span>
                      <span>{{searchCourse.studyCount}}人已学过</span>
                    </p>
                    <div class="CourseInfoDetail">{{searchCourse.intro}}</div>
                  </div>
                </a>
              </li>
           </ul>
         </div>
       </div>
     </div>
     <div class="search_error" v-show="this.searchCourses.length === 0"><img src="../../assets/img/vacancy@3x.png"><p>暂时没有满足条件的内容</p></div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      searchCourse: '',
      recommenCourses: [],
      searchCourses: [],
      tag1: '职业方法能力--数字应用',
      tag2: '职业素养与能力',
      tag3: '职业方法能力--信息处理',
      tag4: '新型职业农民素质与礼仪'
    }
  },
  components: {},
  methods: {
    search () {
      if (this.searchCourse.trim()) {
        // 发送Ajax请求
        let URL1 = 'http://lgedu.gtafe.com/teach/rest/v1/course/getCourseList?pageNo=1&pageSize=10&courseName=' + this.searchCourse.trim()
        let URL2 = 'http://lgedu.gtafe.com/teach/rest/v1/course/getGuessingCourse?institutionId=10001'
        axios.get(URL1).then(response => {
          let result = response.data.data.result
          this.searchCourses = result
        }).catch(error => {
          alert('搜索失败' + error)
        })
        axios.get(URL2).then(response => {
          let result = JSON.parse(response.data.data)
          this.recommenCourses = result
        }).catch(error => {
          alert('搜索失败' + error)
        })
      }
    },
    searchTags (Tagmsg) {
      this.searchCourse = Tagmsg
      // 发送Ajax请求
      let URL1 = 'http://lgedu.gtafe.com/teach/rest/v1/course/getCourseList?pageNo=1&pageSize=10&courseName=' + this.searchCourse.trim()
      let URL2 = 'http://lgedu.gtafe.com/teach/rest/v1/course/getGuessingCourse?institutionId=10001'
      axios.get(URL1).then(response => {
        let result = response.data.data.result
        this.searchCourses = result
      }).catch(error => {
        alert('搜索失败' + error)
      })
      axios.get(URL2).then(response => {
        let result = JSON.parse(response.data.data)
        this.recommenCourses = result
      }).catch(error => {
        alert('搜索失败' + error)
      })
    }
  },
  created () {
    if (this.$route.params.courseName) {
      this.searchCourse = this.$route.params.courseName
      let URL1 = 'http://lgedu.gtafe.com/teach/rest/v1/course/getCourseList?pageNo=1&pageSize=10&courseName=' + this.searchCourse.trim()
      let URL2 = 'http://lgedu.gtafe.com/teach/rest/v1/course/getGuessingCourse?institutionId=10001'
      axios.get(URL1).then(response => {
        let result = response.data.data.result
        this.searchCourses = result
      }).catch(error => {
        alert('搜索失败' + error)
      })
      axios.get(URL2).then(response => {
        let result = JSON.parse(response.data.data)
        this.recommenCourses = result
      }).catch(error => {
        alert('搜索失败' + error)
      })
    }
  }
}
</script>

<style>
  .searchlist
  {
    min-width: 960px;
  }
  .searchlist .search_nav_list{
    height: 117px;
    background: #D9DDE1;
    position: relative;
    text-align: center;
  }
  .searchlist .search_nav_list .search_input_content{
    width: 599px;
    height: 71px;
    margin: 0 auto;
    padding: 23px 0;
  }
  .searchlist .search_nav_list .search_input_content .search_form_nav{
    height: 47px;
    background: #FFFFFF;
  }
  .searchlist .search_nav_list .search_input_content .search_form_nav img{
    float: left;
    position: absolute;
    width: 25px;
    height: 25px;
    margin: 11px 0 0 16px;
  }
  .searchlist .search_nav_list .search_input_content .search_form_nav input[type="text"]{
    width: 476px;
    height: 100%;
    outline: none;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #333333;
    padding-left: 60px;
    border: none;
  }
  .searchlist .search_nav_list .search_input_content .search_form_nav input[type="button"]{
    width: 63px;
    outline: none;
    border: none;
    height: 47px;
    background: #3246D8;
    float: right;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 47px;
    text-align: center;
    cursor: pointer;
  }
  .searchlist .search_nav_list .search_input_content .search_tags{
    width: 100%;
    text-align: left;
    margin-top: 5px;
  }
  .searchlist .search_nav_list .search_input_content .search_tags p{
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #666666;
    line-height: 17px;
    margin-right: 3px;
    display: inline-block;
  }
  .searchlist .search_nav_list .search_input_content .search_tags span{
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #666666;
    line-height: 17px;
    margin-right: 5px;
    cursor: pointer;
  }
  .searchlist .search_nav_list .search_input_content .search_tags span:hover{
    color: #333333;
  }
  .searchlist .search_content .container{
    width: 1080px;
    margin: 19px auto 40px auto;
  }
  .searchlist .search_content .container .search_right_content{
    width: 264px;
    float: right;
    height: 460px;
  }
  .search_content .container .search_right_content .recommendationTitle{
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #333333;
    line-height: 22px;
    margin-top: 2px;
  }
  .search_content .container .search_right_content .recommenCourseList{
    margin-top: 5px;
  }
  .search_content .container .search_right_content .recommenCourseList li:hover .recommenCourseImg img{
    transform: scale(1.15);
  }
  .search_content .container .search_right_content .recommenCourseList .recommenCourseImg{
    width: 84.6px;
    height: 60px;
    border-radius: 3px;
    display: inline-block;
    overflow: hidden;
    margin: 13px 0;
  }
  .search_content .container .search_right_content .recommenCourseList .recommenCourseInfo{
    float: right;
    width: 163px;
    height: 100%;
    padding: 10px 0 25px;
    border-bottom: 1px solid #D9DDE1;
  }
  .search_content .container .search_right_content .recommenCourseList .recommenCourseInfo p:nth-child(1){
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51,51,51,1);
    line-height: 33px;
    height: 33px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
  .search_content .container .search_right_content .recommenCourseList .recommenCourseInfo p:nth-child(2){
    font-size: 9px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153,153,153,1);
    line-height: 12px;
    margin-top: 4px;
  }
  .search_content .container .search_right_content .recommenCourseList .recommenCourseInfo p:nth-child(2) span:nth-child(1){
    margin-right: 20px;
  }
  .search_content .container .search_right_content .recommenCourseList .recommenCourseImg img{
    width: 100%;
    height: 100%;
    transition: transform .8s;
  }
  .searchlist .search_content .container .search_left_content{
    width: 800px;
    min-height: 480px;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li{
    height: 140px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 16px;
    padding: 16px;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseImg{
    width: 184px;
    height: 138px;
    border-radius: 5px;
    display: inline-block;
    overflow: hidden;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseImg img{
    widows: 100%;
    height: 100%;
    transition: transform .8s;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseInfo{
    float: right;
    width: 570px;
    height: 100%;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseInfo .CourseInfoTitle{
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #333333;
    line-height: 22px;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseInfo .CourseInfoStatus{
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999999;
    line-height: 17px;
    margin-top: 16px;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseInfo .CourseInfoStatus span{
    margin-right: 25px;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseInfo .CourseInfoStatus span:nth-last-child(1){
    margin-left: 45px;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li .CourseInfo .CourseInfoDetail{
    font-size: 13px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
    margin-top: 12px;
    height: 72px;
    overflow: hidden;
  }
  .searchlist .search_content .search_left_content .search_left_course_list li:hover .CourseImg img{
    transform: scale(1.15);
  }
  /* 搜索不成功页面样式 */
  .searchlist .search_error{
    width: 285px;
    margin: 40px auto;
    text-align: center;
  }
  .searchlist .search_error img{
    width: 170px;
    height: 135px;
  }
  .searchlist .search_error p{
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51,51,51,1);
    line-height: 20px;
    text-align: center;
    margin: 50px 0 0 0;
  }
</style>
