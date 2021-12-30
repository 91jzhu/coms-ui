<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Coms-UI</h1>
        <h2>一个有意思的 ui 框架</h2>
        <p class="actions">
          <a href="https://github.com/91jzhu">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-light"></use>
      </svg>
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
.features{
  > svg{
    width:64px;
    height:64px;
  }
}
.topnavAndBanner {
  background: linear-gradient(0deg, rgba(255, 188, 151, 1) 0%, rgba(247, 136, 135, 1) 100%);
}

.banner {
  color: #ffffff;
  font-size: x-large;
  font-weight: bolder;
  padding: 100px 0 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1, h2 {
    color: #3f2a4e
  }

  > .actions {

    padding: 48px 0 10px 0;

    a {
      color: #835e7f;
      background: #ffeedd;
      margin: 0 16px;
      display: inline-block;
      $h: 48px;
      height: $h;
      line-height: $h;
      border-radius: $h/6;
      padding: 0 16px;
    }
  }
}
</style>