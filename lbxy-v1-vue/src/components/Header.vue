<template>
  <div class="header" ref="header">
    <div class="container">
      <a href='/home'>
        <img src="../assets/img/logo2.png">
      </a>
      <ul class="header-nav">
        <li>
          <router-link to='/home'>首页</router-link>
        </li>
        <li>
          <router-link to='/resourcecenter'>资源中心</router-link>
        </li>
        <li>
          <router-link to='/live'>直播</router-link>
        </li>
      </ul>
      <div class="header-info">
        <div class="search" v-show="this.$route.name !== 'SearchList'">
          <div class="searchTags" ref="searchTags" v-show="this.keyWords.trim() === ''">
            <router-link :to="{name: 'SearchList',params: {courseName: '电气学院'}}">电气学院</router-link>
            <router-link :to="{name: 'SearchList',params: {courseName: '保安'}}">保安</router-link>
          </div>
          <div class="search-form">
            <input class="search-input " type="text" @focus="search" @blur="showTags" v-model="keyWords" @input="getCourseName" @keyup.enter="searchCourse">
            <div class="courseName_list" ref="courseName_list">
              <div class="courseName_list_wrap">
                <router-link :to="{name: 'SearchList',params: {courseName: courseName}}" v-for="(courseName, index) in courseNames" :key="index" class="courseName_list_link">{{courseName}}</router-link>
              </div>
            </div>
          </div>
          <div class="search-button" @click="searchCourse">
            <img class="search-image" src="../assets/img/seaching@2x.png">
          </div>
        </div>
        <ul class="header-login">
          <li>
            <a href="javascript:;" @mouseenter="showDownload(true)" @mouseleave="showDownload(false)">下载APP</a>
            <div v-show='flag' class="download-app">
              <p>扫描下载官方APP</p>
              <img src="../assets/img/二维码@2x.png">
            </div>
          </li>
          <li><a href="javascript:;"><span @click="dialogLoginVis=true">登录</span><span @click="dialogregisterVis=true">/注册</span></a></li>
          <li><a href="javascript:;"><img src="../assets/img/head.png"></a></li>
        </ul>
      </div>
    </div>
    <el-dialog title="登录" :visible.sync="dialogLoginVis" append-to-body top="25vh" width="31.2%" center @closed="clearInput('login')">
      <div class="inputPhone">
        <img src="../assets/img/number@3x.png">
        <input type="text" placeholder="请输入手机号" ref="phoneCode">
      </div>
      <div class="inputPsd">
        <img src="../assets/img/password@3x.png">
        <input type="text" placeholder="请输入密码" ref="psdCode">
      </div>
      <div class="confirm">
        <input type="text" class="confirmCode" placeholder="请输入验证码" ref="confirmCode">
        <span class="code" ref="code">0259</span>
        <span class="change" @click="changeCode">看不清，换一换</span>
      </div>
      <p class="Tips"></p>
      <div class="action_btn">登录</div>
      <div class="bottomMsg">
        <div class="rememberPsd"><img src="../assets/img/agree_default@3x.png"><span>记住密码</span></div>
        <a href="javascript:;" class="forget">忘记密码</a>
        <a href="javascript:;" class="goRegis" @click="goLogin(false)">去注册></a>
      </div>
    </el-dialog>
    <el-dialog title="手机号注册" :visible.sync="dialogregisterVis" append-to-body top="25vh" width="31.2%" center @closed="clearInput('register')" class="register_height">
      <div class="inputPhone">
        <img src="../assets/img/number@3x.png">
        <input type="text" placeholder="请输入手机号" ref="phoneCode2" @blur="checkPhonenumber($refs.phoneCode2.value)" @focus="inputPhonenumber">
      </div>
      <div class="inputConfirm">
        <input type="text" placeholder="请输入短信验证码" ref='phoneInfo' @blur="checkMsgConfirm($refs.phoneInfo.value)" @focus="inputMsgConfirm">
      </div>
      <input type="button" value="获取验证码" class="btn_getInfo" @click="getMsgConfirm" ref="btnMsgConfirm">
      <div class="inputPsd">
        <img src="../assets/img/password@3x.png">
        <input type="text" placeholder="请输入密码" ref="psdCode2">
      </div>
      <div class="inputPsd">
        <img src="../assets/img/password@3x.png">
        <input type="text" placeholder="请再次确认密码" ref="psdCode3">
      </div>
      <p class="Tips" ref="registerMsgTips"></p>
      <div class="action_btn">注册</div>
      <div class="bottomMsg">
        <div class="agreeInfo"><img src="../assets/img/agree_default@3x.png"><span>我同意《服务条款》</span></div>
        <a href="javascript:;" class="goLogin" @click="goLogin(true)">去登录></a>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      flag: false,
      dialogLoginVis: false,
      dialogregisterVis: false,
      codeArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      keyWords: '',
      courseNames: [],
      Tips: ['请输入正确的手机号码', '手机号已被注册', '两次密码输入不一致', '密码格式错误，6-20位数字字母下划线', '请输入验证码']
    }
  },
  components: {},
  methods: {
    search () {
      this.$refs.searchTags.style.display = 'none'
      this.$refs.courseName_list.style.display = 'block'
    },
    showTags () {
      setTimeout(() => {
        this.$refs.courseName_list.style.display = 'none'
      }, 100)
      // this.$refs.courseName_list.style.display = 'none'
      if (this.keyWords === '') {
        this.$refs.searchTags.style.display = 'block'
      }
    },
    showDownload (i) {
      this.flag = i
    },
    changeCode () {
      let code = ''
      let codeArr = this.codeArr
      for (let i = 0; i < 4; i++) {
        code += codeArr[Math.floor(Math.random() * 10)]
      }
      this.$refs.code.innerHTML = code
    },
    clearInput (str) {
      if (str === 'login') {
        this.$refs.confirmCode.value = this.$refs.psdCode.value = this.$refs.phoneCode.value = ''
      } else {
        this.$refs.phoneCode2.value = this.$refs.phoneInfo.value = this.$refs.psdCode2.value = this.$refs.psdCode3.value = ''
      }
    },
    getCourseName () {
      // 发送Ajax请求
      if (this.keyWords.trim()) {
        this.$refs.courseName_list.style.display = 'block'
        let URL = 'http://lgedu.gtafe.com/teach/rest/v1/course/getCourseNameByKeyword?keyword=' + this.keyWords
        axios.get(URL).then(response => {
          let result = response.data.data
          this.courseNames = result
        }).catch(error => {
          alert('搜索失败' + error)
        })
      } else {
        this.courseNames = []
      }
    },
    searchCourse () {
      if (this.keyWords.trim()) {
        this.$router.push({
          name: 'SearchList',
          params: {
            courseName: this.keyWords
          }
        })
        this.keyWords = ''
        this.$refs.searchTags.style.display = 'block'
      }
    },
    goLogin (flag) {
      if (flag) {
        // 去登录
        this.dialogLoginVis = true
        this.dialogregisterVis = false
      } else {
        // 去注册
        this.dialogregisterVis = true
        this.dialogLoginVis = false
      }
    },
    checkPhonenumber (number) {
      if (number) {
        if (!(/^1[34578]\d{9}$/.test(number))) {
          // 电话号码错误
          this.$refs.registerMsgTips.innerHTML = this.Tips[0]
          this.$refs.phoneCode2.style.border = '1px solid #FF5E62'
        } else {
          // 发送Ajax请求判断电话号码是否已经注册
          let URL = 'http://lgedu.gtafe.com/cms/isNoMobile'
          let numStr = number.toString()
          let params = new URLSearchParams()
          params.append('mobile', numStr)
          axios.post(URL, params).then(response => {
            let result = response.data.mess
            if (result) {
              this.$refs.registerMsgTips.innerHTML = this.Tips[1]
              this.$refs.phoneCode2.style.border = '1px solid #FF5E62'
            }
          }).catch(error => {
            alert('检查手机号码失败' + error)
          })
        }
      }
    },
    inputPhonenumber () {
      this.$refs.phoneCode2.style.border = 'none'
      this.$refs.registerMsgTips.innerHTML = ''
    },
    checkMsgConfirm (value) {
      if (!value) {
        this.$refs.registerMsgTips.innerHTML = this.Tips[4]
        this.$refs.phoneInfo.style.border = '1px solid #FF5E62'
      }
    },
    inputMsgConfirm () {
      this.$refs.registerMsgTips.innerHTML = ''
      this.$refs.phoneInfo.style.border = 'none'
    },
    getMsgConfirm () {
      // 获取短信验证码
      if (this.$refs.phoneCode2.style.border === 'none' && this.$refs.phoneCode2.value) {
        // 发送Ajax请求获取短信验证码
        let URL = 'http://lgedu.gtafe.com/cms/sendAliMsg'
        let PhoneNum = this.$refs.phoneCode2.value.toString()
        let params = new URLSearchParams()
        params.append('mobile', PhoneNum)
        let time = 60
        axios.post(URL, params).then(response => {
          this.$refs.btnMsgConfirm.disabled = true
          let timer = setInterval(() => {
            time--
            if (time >= 0) {
              this.$refs.btnMsgConfirm.value = time + 's'
            } else {
              time = 60
              this.$refs.btnMsgConfirm.disabled = false
              this.$refs.btnMsgConfirm.value = '重新发送'
              clearInterval(timer)
            }
          }, 1000)
        }).catch(error => {
          alert('发送短信验证码失败' + error)
        })
      }
    }
  }
}
</script>
<style>
  .header{
    height: 50px;
    min-width: 960px;
    background: #fff;
    filter:blur(0px);
    position: relative;
    z-index: 98;
  }
  .header .container{
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .header .container > .header-info{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }
  .header .container .header-nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .header .container .header-nav li{
    width: 80px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .header .container .header-nav li a{
    display: inline-block;
  }
  .header .container .search{
    position: relative;
    width: 277px;
    height: 40px;
    margin-right: 100px;
  }
  .header .container .search .searchTags{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
  }
  .header .container .search .searchTags a{
    display: inline-block;
    padding: 3px 13px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color: #999;
    line-height:13px;
    background: #F5F5F5;
    border-radius: 10px;
  }
  .header .container .search .searchTags a:hover{
    color: #333;
  }
  .header .container .search .search-button{
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .header .container .search .search-form{
    position: absolute;
    width: 100%;
    height: 40px;
    border-bottom: 3px solid black;
  }
  .header .container .search .search-form input{
    width: 100%;
    outline: none;
    border: none;
    height: 100%;
    font-size: 16px;
  }
  .header .container .search .search-form .courseName_list{
    display: none;
    position: absolute;
    top: 105%;
    background: white;
    max-height: 264px;
    border-radius: 0 0 9px 9px;
    width: 100%;
    overflow: auto;
  }
  .header .container .search .search-form .courseName_list .courseName_list_wrap a{
    height: 42px;
    padding: 0 10px;
    color: #666666;
    font-size: 13px;
    line-height: 42px;
    text-align: left;
    display: block;
  }
  .header .container .search .search-form .courseName_list .courseName_list_wrap a:hover{
    color: #333;
    background: #F5F5F5;
  }
  .header .container .header-login{
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
  .header .container .header-login li{
    width: 80px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin: 0 8px;
  }
  .header .container .header-login li a{
    color: #666;
  }
  .header .container .header-login li a:hover{
    color: blue;
  }
  .header .container .header-login li:nth-child(1){
    position: relative;
  }
  .header .container .header-login li:nth-child(1) .download-app{
    position: absolute;
    left: 50%;
    top: 56px;
    transform: translateX(-50%);
    padding: 10px 10px 22px;
    box-sizing: border-box;
    background-color: #fff;
    width: 200px;
    height: 200px;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
    border-radius: 8px;
    z-index: 998;
    font-size: 16px;
    text-align: center;
    border: 2px solid #F5F5F5
  }
  .header .container .header-login li:nth-child(1) .download-app img{
    width: 124px;
    height: 124px;
  }
  .header .container .header-login li:nth-child(3) a img{
    margin-top: 10px;
  }
  .header-nav .router-link-active{
    border-bottom: 2px solid #3246D8;
    color: #3246D8;
  }
  /* 登录/注册模态框样式 */
  .el-dialog__header{
    height: 51px;
    width: 100%;
    padding: 16px 0 7px;
  }
  .el-dialog__title{
    font-size: 16px;
    color: #333333;
    line-height: 51px;
  }
  .el-dialog__headerbtn{
    width: 16px;
    height: 18px;
    background: url('../assets/img/close01@2x.png') no-repeat center;
  }
  .el-dialog__headerbtn i{
    display: none;
  }
  .el-dialog .el-dialog__body{
    height: 338px;
    padding: 0;
    width: 391px;
    margin: 0 auto;
    text-align: center;
  }
  .register_height .el-dialog__body{
    height: 376px;
  }
  .inputPhone{
    width: 100%;
    height: 47px;
    border: 1px solid #D9DDE1;
    border-radius: 3px;
    position: relative;
    margin-bottom: 14px;
  }
  .inputPhone img{
    position: absolute;
    width: 20px;
    height: 26px;
    left: 17px;
    top: 10px;
  }
  .inputPhone input{
    position: absolute;
    right: 17px;
    top: 8px;
    width: 306px;
    line-height: 31px;
    font-size: 13px;
    outline: none;
    border: none;
  }
  .inputPsd{
    width: 100%;
    height: 47px;
    border: 1px solid #D9DDE1;
    border-radius: 3px;
    position: relative;
    margin-bottom: 14px;
  }
  .inputPsd img{
    position: absolute;
    width: 20px;
    height: 26px;
    left: 17px;
    top: 10px;
  }
  .inputPsd input{
    position: absolute;
    right: 17px;
    top: 8px;
    width: 306px;
    line-height: 31px;
    font-size: 13px;
    outline: none;
    border: none;
  }
  .confirm{
    width: 100%;
    height: 47px;
    text-align: left;
    display: block;
    margin-bottom: 14px;
  }
  .confirm .confirmCode{
    height: 47px;
    border: 1px solid #D9DDE1;
    border-radius: 3px;
    position: relative;
    width: 161px;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0px;
    font-size: 13px;
    outline: none;
    padding: 7px 16px;
    box-sizing: border-box;
  }
  .confirm .code{
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
    width: 108px;
    height: 47px;
    display: inline-block;
    color: #999999;
    font-size: 17px;
    letter-spacing: 2px;
    border: 1px solid #D9DDE1;
    line-height: 47px;
    text-align: center;
  }
  .confirm .change{
    width: 83px;
    height: 19px;
    font-size: 13px;
    color: #999999;
    vertical-align: middle;
    cursor: pointer;
  }
  .Tips{
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    color: #FF5E62;
    text-align: left;
  }
 .action_btn{
    height: 47px;
    line-height: 47px;
    border-radius: 3px;
    font-size: 16px;
    color: white;
    background: #3246D8;
    margin-top: 4px;
    cursor: pointer;
  }
  .bottomMsg{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    text-align: left;
    position: relative;
  }
  .bottomMsg .rememberPsd{
    text-align: left;
    display: inline-block;
    cursor: pointer;
  }
  .bottomMsg .rememberPsd img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .bottomMsg .rememberPsd span{
    height: 16px;
    line-height: 16px;
    font-size: 10px;
    color: #666666;
    margin-left: 9px;
    vertical-align: middle;
  }
  .bottomMsg .forget{
    float: right;
    width: 55px;
    line-height: 25px;
    font-size: 10px;
    color: #666666;
    cursor: pointer;
  }
  .bottomMsg .goRegis{
    bottom: 0;
    right: 0;
    position: absolute;
    width: 50px;
    line-height: 25px;
    font-size: 10px;
    color: #3246D8;
    cursor: pointer;
  }
  /* 注册模态框样式 */
  .inputConfirm{
    width: 246px;
    margin-right: 11px;
    display: inline-block;
    height: 47px;
    border: 1px solid #D9DDE1;
    border-radius: 3px;
    position: relative;
    margin-bottom: 14px;
  }
  .inputConfirm input{
    width: 212px;
    position: absolute;
    right: 17px;
    top: 8px;
    line-height: 31px;
    border: none;
    font-size: 13px;
    outline: none;
  }
  .btn_getInfo{
    width: 130px;
    height: 47px;
    line-height: 47px;
    border: 1px solid #3246D8;
    border-radius: 3px;
    float: right;
    font-size: 13px;
    color: #3246D8;
    background: white;
    cursor: pointer;
  }
  .agreeInfo{
    text-align: left;
    display: inline-block;
    cursor: pointer;
  }
  .agreeInfo img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .agreeInfo span{
    height: 16px;
    line-height: 16px;
    font-size: 10px;
    color: #666666;
    margin-left: 9px;
    vertical-align: middle;
  }
  .goLogin{
    float: right;
    width: 50px;
    line-height: 25px;
    font-size: 10px;
    color: #3246D8;
    cursor: pointer;
  }
</style>
