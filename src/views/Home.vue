<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>ui</h1>
      <h2>一个有意思的 ui 框架</h2>
      <p class="actions">
        <a href="https://github.com/91jzhu">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
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
.topnavAndBanner{
  background: linear-gradient(0deg, rgba(255,188,151,1) 0%, rgba(247,136,135,1) 100%);
}
.banner {
  color:#ffffff;
  font-size: x-large;
  font-weight: bolder;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {

    padding: 8px 0;

    a {
      background: #6288f1;
      margin: 0 8px;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>