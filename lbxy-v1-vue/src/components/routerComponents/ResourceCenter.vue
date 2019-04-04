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
             <li v-for="(major, index) in major1" :key="index" @click="searchCourseClass(major.id)">{{major.name}}</li>
           </ul>
         </div>
         <div class="course_item">
           <span>社区教育</span>
           <ul class="course_item_list">
             <li v-for="(major, index) in major2" :key="index" @click="searchCourseClass(major.id)">{{major.name}}</li>
           </ul>
         </div>
         <div class="course_item">
           <span>新职农专题</span>
           <ul class="course_item_list">
             <li v-for="(major, index) in major3" :key="index" @click="searchCourseClass(major.id)">{{major.name}}</li>
           </ul>
         </div>
         <div class="course_item">
           <span>证书专题</span>
           <ul class="course_item_list">
              <li v-for="(major, index) in major4" :key="index" @click="searchCourseClass(major.id)">{{major.name}}</li>
           </ul>
         </div>
         <div class="course_item">
           <span>眼镜专题</span>
           <ul class="course_item_list">
              <li v-for="(major, index) in major5" :key="index" @click="searchCourseClass(major.id)">{{major.name}}</li>
           </ul>
         </div>
       </div>
       <el-tabs tab-position="bottom" type="border-card" @tab-click="changePage">
        <el-tab-pane label="1">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in coursesList" :key="index">
              <a href="javascript:;">
                <img :src="'http://lgedu.gtafe.com/img'+course.coverImg">
                <p class="course-title">{{course.courseName}}</p>
                <p class="course-class">{{course.majorName}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="2">
          <ul class="courses-list clearfix">
          <li v-for="(course, index) in coursesList" :key="index">
            <a href="javascript:;">
              <img :src="'http://lgedu.gtafe.com/img'+course.coverImg">
              <p class="course-title">{{course.courseName}}</p>
              <p class="course-class">{{course.majorName}}</p>
            </a>
          </li>
        </ul>
        </el-tab-pane>
        <el-tab-pane label="3">
          <ul class="courses-list clearfix">
          <li v-for="(course, index) in coursesList" :key="index">
            <a href="javascript:;">
              <img :src="'http://lgedu.gtafe.com/img'+course.coverImg">
              <p class="course-title">{{course.courseName}}</p>
              <p class="course-class">{{course.majorName}}</p>
            </a>
          </li>
        </ul>
        </el-tab-pane>
        <el-tab-pane label="4">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in coursesList" :key="index">
              <a href="javascript:;">
                <img :src="'http://lgedu.gtafe.com/img'+course.coverImg">
                <p class="course-title">{{course.courseName}}</p>
                <p class="course-class">{{course.majorName}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="5">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in coursesList" :key="index">
              <a href="javascript:;">
                <img :src="'http://lgedu.gtafe.com/img'+course.coverImg">
                <p class="course-title">{{course.courseName}}</p>
                <p class="course-class">{{course.majorName}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="6">
          <ul class="courses-list clearfix">
            <li v-for="(course, index) in coursesList" :key="index">
              <a href="javascript:;">
                <img :src="'http://lgedu.gtafe.com/img'+course.coverImg">
                <p class="course-title">{{course.courseName}}</p>
                <p class="course-class">{{course.majorName}}</p>
              </a>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
     </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      coursesList: [],
      major1: [{name: '理工类', id: 121}, {name: '商科类', id: 119}, {name: '通用类', id: 123}, {name: '演示资源', id: 127}, {name: '农业类', id: 122}],
      major2: [{name: '职业证书类', id: 126}, {name: '修养爱好类', id: 125}, {name: '商业技能类', id: 124}, {name: '素质素养类', id: 99}],
      major3: [{name: '素质素养', id: 93}, {name: '农业服务', id: 115}, {name: '农业经营', id: 114}, {name: '农业生产', id: 95}],
      major4: [{name: '眼镜考证', id: 118}, {name: '商科考证', id: 109}, {name: '安防考证', id: 113}, {name: '核心能力', id: 112}],
      major5: [{name: '眼镜设计', id: 116}, {name: '眼镜考证', id: 118}, {name: '眼镜制造', id: 117}]
    }
  },
  components: {},
  methods: {
    changePage (tab, event) {
      // 发送Ajax请求
      let URL = 'http://lgedu.gtafe.com/teach/rest/v1/course/queryAllCourseInfoList'
      let pageNum = event.target.innerHTML
      let params = new URLSearchParams()
      params.append('institutionId', '10001')
      params.append('pageSize', '20')
      params.append('pageNo', pageNum)
      axios.post(URL, params).then(response => {
        let result = response.data.data.result
        this.coursesList = result
      }).catch(error => {
        alert('分页失败' + error)
      })
    },
    searchCourseClass (value) {
      // 发送Ajax请求
      let URL = 'http://lgedu.gtafe.com/teach/rest/v1/course/queryCoursepackagesCourse'
      let valueStr = value.toString()
      let params = new URLSearchParams()
      params.append('id', valueStr)
      params.append('pageSize', '20')
      axios.post(URL, params).then(response => {
        let result = response.data.data.result
        this.coursesList = result
      }).catch(error => {
        alert('查询失败' + error)
      })
    }
  },
  created () {
    // 发送Ajax请求
    let URL = 'http://lgedu.gtafe.com/teach/rest/v1/course/queryAllCourseInfoList'
    let params = new URLSearchParams()
    params.append('institutionId', '10001')
    params.append('pageSize', '20')
    params.append('pageNo', '1')
    axios.post(URL, params).then(response => {
      let result = response.data.data.result
      this.coursesList = result
    }).catch(error => {
      alert('分页失败' + error)
    })
  }
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
    transition: none;
    color: #D9DDE1 !important;
    padding: 0 !important;
    width: 40px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .resourceCenter .el-tabs__nav .el-tabs__item:hover{
    color: #D9DDE1 !important;
  }
  .resourceCenter .el-tabs__nav .is-active{
    border-color: #3246D8 !important;
    color: #3246D8 !important;
  }
</style>
