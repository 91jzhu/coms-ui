<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav>
        <template v-slot:sun>
          <svg class="icon sun">
            <use xlink:href="#icon-taiyang2"></use>
          </svg>
        </template>
        <template v-slot:doc>
          <router-link to="/doc">文档</router-link>
        </template>
      </Topnav>
      <div class="banner">
        <h1>Coms-UI</h1>
        <h2>一个有意思的 ui 框架</h2>
        <p class="actions">
          <a href="https://github.com/91jzhu/coms-ui">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
.sun{
  position: absolute;
  width:56px;
  height:56px;
  top:2vh;
  left: 50vw;
  margin-left: -28px;
}
.features {
  margin: 16px auto;
  width: 300px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

.topnavAndBanner {
  background: linear-gradient(0deg, rgba(255, 188, 151, 1) 0%, rgba(247, 136, 135, 1) 100%);
  clip-path: ellipse(70% 60% at 50% 40%);
}

.banner {
  color: #ffffff;
  font-size: x-large;
  font-weight: bolder;
  padding: 100px 0 40px 0;
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