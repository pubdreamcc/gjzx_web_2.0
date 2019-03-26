<template>
   <div class="footer">
     <div class="container">
       <p class="title">国凯鲁班学院是凯文旗下专注职业技能提升的</p>
       <ul class="link">
         <li><a href="#/home">首页</a></li>
         <li><a href="#/resourcecenter">资源中心</a></li>
         <li><a href="#/live">直播</a></li>
       </ul>
       <p class="copyright">粤ICP备05065871号-45</p>
     </div>
   </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  components: {}
}
</script>
<style>
  .footer{
      min-width: 960px;
      height: 103px;
      background: #f5f5f5;
    }
  .footer .container{
    width: 1078px;
    margin: 0 auto;
    padding: 18px 0 19px;
  }
  .footer .container .title{
    height:17px;
    font-size:16px;
    text-align: left;
    color:#333;
  }
  .footer .container .link{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height:17px;
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    margin-top: 7px;
  }
  .footer .container .link li{
    margin-right: 10px;
  }
  .footer .container .link a{
    color: #666;
  }
  .footer .container .link a:hover{
    color: #333;
  }
  .footer .container .copyright{
    height:17px;
    font-size:13px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(155,155,155,1);
    margin-top: 13px;
  }
</style>
