<template>
  <Topnav/>
  <div class="banner">
    <h1>ui</h1>
    <h2>一个有意思的 ui 框架</h2>
    <p>
      <a>Github</a>
      <br/>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>

</template>

<script>
import Topnav from '../components/Topnav.vue'
export default {
  name: "Home",
  components: {Topnav}
}
</script>

<style lang="scss" scoped>

</style>