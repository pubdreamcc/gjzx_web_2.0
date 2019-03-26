<template>
  <div class="header">
    <div class="container">
      <a href='#/home'>
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
        <div class="search">
          <div class="searchTags" ref="searchTags">
            <a href="javscript:;">电气学院</a>
            <a href="javscript:;">保安</a>
          </div>
          <div class="search-form">
            <input class="search-input " type="text" @focus="search" @blur="showTags">
          </div>
          <div class="search-button">
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
          <li><a href="javascript:;">登录/注册</a></li>
          <li><a href="javascript:;"><img src="../assets/img/head.png"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      flag: false
    }
  },
  components: {},
  methods: {
    search () {
      this.$refs.searchTags.style.display = 'none'
    },
    showTags () {
      this.$refs.searchTags.style.display = 'block'
    },
    showDownload (i) {
      this.flag = i
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
    font-size:9px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color: #999;
    line-height:13px;
    background: #F5F5F5;
    border-radius: 10px;
  }
  .header .container .search .search-button{
    position: absolute;
    right: 0;
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
  .router-link-active{
    border-bottom: 2px solid #3246D8;
    color: #3246D8;
  }
</style>
