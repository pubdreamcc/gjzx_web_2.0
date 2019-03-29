<template>
  <div id="app">
    <Header ref="header"/>
    <router-view></router-view>
    <Footer ref="footer"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  watch: {
    '$route': function () {
      if (this.$route.name === 'ResourceCenter') {
        this.$refs.footer.$refs.footer.style.background = '#3333331a'
        this.$refs.header.$refs.header.style.background = '#fff'
      } else if (this.$route.name === 'CourseDetail') {
        this.$refs.footer.$refs.footer.style.background = '#3333331a'
        this.$refs.header.$refs.header.style.background = '#3333331a'
      } else if (this.$route.name === 'Home') {
        this.$refs.footer.$refs.footer.style.background = '#F5F5F5'
        this.$refs.header.$refs.header.style.background = '#fff'
      } else if (this.$route.name === 'Live') {
        this.$refs.footer.$refs.footer.style.background = '#3333331a'
        this.$refs.header.$refs.header.style.background = '#3333331a'
      }
    }
  }
}
</script>
<style>
</style>
