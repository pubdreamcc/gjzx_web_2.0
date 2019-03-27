<template>
   <div class="main">
     <Courses/>
     <Major/>
     <Love/>
   </div>
</template>

<script>
import Courses from './Courses.vue'
import Major from './Major.vue'
import Love from './Love.vue'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    Courses,
    Major,
    Love
  }
}
</script>

<style>
</style>
